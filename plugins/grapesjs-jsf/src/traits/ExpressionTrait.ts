import type { Editor } from "grapesjs";
import i18next from '../i18n';
import {html, render} from 'lit-html'



export default (editor: Editor) => {


// // Create a simple custom button that will open the modal
// document.body.insertAdjacentHTML('afterbegin',`
//     <button onclick="openModal()">Open Modal</button>
// `);

  editor.TraitManager.addType('textExpression', {

    // createLabel({ label }) {
    //     return `<div>
    //       <div>Before</div>
    //       ${label}
    //       <div>After</div>
    //     </div>`;
    //   },
    // templateInput({ trait }) {
    //   return '';
    // },

    // Expects as return a simple HTML string or an HTML element
    createInput({ trait }) {
      // Here we can decide to use properties from the trait
      const traitOpts = trait.get('options') || [];
      const options = traitOpts.length ? traitOpts : [
        { id: 'url', name: 'URL' },
        { id: 'email', name: 'Email' },
      ];

      // Create a new element container and add some content
      const el = document.createElement('div');
      
      el.innerHTML =
        `
      <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-sm btn-outline-secondary" type="button" id="text-exp-btn">...</button>
      </div>
      `;

      let modal: any = null ;


// Open modal
// const openModal = () => {
//   modal = editor.Modal.open({
//       title: i18next.t("traitTypes.expression.modalTitle", { ns: "traits" }), // string | HTMLElement
//       content: ''// string | HTMLElement
      // html
      //   `
      //     <label class="silex-form__element">
      //       <input type="text" name="name" .value='xxxx'/>
      //     </label>
      //   `
      // `
      //   <form class="silex-form">
      //     <label class="silex-form__element">
      //       <input type="text" name="name" .value=${live(page.getName() || '')}/>
      //     </label>
      //     <footer>
      //       <input class="btn btn-success" type="button" @click=${e => onImport(editor, page)} value="Import from website">
      //       <input class="btn btn-default" type="button" @click=${e => editor.stopCommand(cmdOpenNewPageDialog)} value="Cancel">
      //       <input class="btn" type="submit" value="Ok">
      //     </footer>
      //   </form>
      // `

//   });
// };

const openModal = () => {
  const modalElement = document.createElement('div');
  render(html 
    `
        <form class="silex-form">
          <div class="d-flex">
            <textArea class="flex-grow-1 mb-3" type="text" name="name" placeholder="${i18next.t('traitTypes.expression.modalTextAreaPlaceholder', { ns: 'traits' })}" ></textArea>
          </div>
          <footer>
            <input class="btn btn-success" type="button" @click=${(e: PointerEvent) => {console.log(editor); console.log(e); }} value="Import from website">
            <input class="btn btn-danger" type="button" @click=${(e: PointerEvent) => editor.stopCommand(cmdOpenNewPageDialog)} value="Cancel">
            <input class="btn" type="submit" value="Ok">
          </footer>
        </form>
      `
    , modalElement);
  modal = editor.Modal.open({
    title: i18next.t("traitTypes.expression.modalTitle", { ns: "traits" }), // string | HTMLElement
    content: modalElement// string | HTMLElement

})
.onceClose((clb: Backbone.EventHandler) => {
  console.log(clb);
  alert("the clb");
})
;
}

// const appendModalContent = () => {
//   const modalElement = document.createElement('div');
//   render(html `
//       <label class="silex-form__element">
//         sssssssss
//       </label>
//   `, el);
//   modal.setContent(modalElement);
// }

      // Let's make our content interactive
      const inputsUrl = el.querySelector('.href-next__url-inputs');
      const inputsEmail = el.querySelector('.href-next__email-inputs');
      const inputType: Element | null = el.querySelector('.href-next__type');
      const button: Element | null = el.querySelector('#text-exp-btn');
      button?.addEventListener('click', ev => {
        openModal();
      });

      return el;
    },
  });

}
