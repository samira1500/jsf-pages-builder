import type { Editor } from 'grapesjs';


export const typeInputText = 'jsfInputText';

export const InputTextBlock = (editor: Editor, label: string) => {
    editor.BlockManager.add('h:inputText', {
        label: `
        <i class="fa-solid fa-input-text"></i>
        <div>${label}</div>`,
        category: 'jsfForms',
        content: '<h:inputText data-gjs-type="jsfInputText" class="form-control"></h:inputText>',
    });
};

export default (editor: Editor, label: string) => {

    const { Components } = editor;

    const defaultType = Components.getType('input');
    const defaultModel = defaultType?.model;

    // INPUT
    Components.addType(typeInputText, {
        isComponent: el => el.tagName == 'H:INPUTTEXT',
        extend: 'input',
        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                tagName: 'h:inputText',
                'custom-name': label,
                draggable: 'form, form *',
                droppable: false,
                attributes: { type: 'text' },
                // traits: [
                //     traits.value,
                //     traits.name,
                //     traits.placeholder, 
                //     traits.required,
                //     {
                //         label: config.labels.trait_value,
                //         type: 'text',
                //         name: 'type',
                //         // options: [
                //         //     {value: 'text', name: config.labels.type_text},
                //         //     {value: 'email', name: config.labels.type_email},
                //         //     {value: 'password', name: config.labels.type_password},
                //         //     {value: 'number', name: config.labels.type_number},
                //         //     {value: 'date', name: config.labels.type_date},
                //         //     {value: 'hidden', name: config.labels.type_hidden},
                //         // ]
                //     }
                // ],
                // traits: [
                // nameTrait,
                // placeholderTrait,
                // {
                //     type: 'select',
                //     name: 'type',
                //     options: [
                //     { value: 'text' },
                //     { value: 'email' },
                //     { value: 'password' },
                //     { value: 'number' },
                //     ]
                // },
                // requiredTrait
                // ],
            },
        },
        extendView: 'input',
        view: {
            tagName: () => 'input',
            attributes: {
                type: 'text',
            },
        }
        // extendFnView: ['updateAttributes'],
        // {
        //     updateAttributes() {
        //         this.el.setAttribute('autocomplete', 'off');
        //     },
        // }
    });
}
