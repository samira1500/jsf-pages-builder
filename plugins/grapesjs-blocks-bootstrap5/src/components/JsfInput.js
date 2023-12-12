import inputIcon from "raw-loader!../icons/input.svg";

export const JsfInputBlock = (bm, label) => {
    bm.add('h:inputText', {
        label: `
      ${inputIcon}
      <div>${label}</div>`,
        category: 'jsfForms',
        content: '<h:inputText data-gjs-type="jsfInputText" class="form-control"></h:inputText>',
    });
};

export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('input');
    const defaultModel = defaultType.model;

    dc.addType('jsfInputText', {
        isComponent: function(el) {
            console.log("### In jsfInputText.IsComponent: el.tagName: ");
            console.log(el);
            if(el.hasOwnProperty('tagName'))
                console.log('## '+el.tagName);
            else
                console.log("## no tagName");
            console.log("## is h:inputtext: " + (el && el.hasOwnProperty('tagName') && el.tagName === 'H:INPUTTEXT'));
            // console.log(el.classList);
            
            if(el && el.hasOwnProperty('tagName') && el.tagName === 'H:INPUTTEXT') {
                console.log("### In jsfInputText.IsComponent: result is true ");
                return true; // {type: 'jsfInputText'};
            }
            console.log("### In jsfInputText.IsComponent: result is false ");
        },
        extend: 'input',
        model: {
            defaults: {
                ...defaultModel.prototype.defaults,
                tagName: 'h:inputText',
                'custom-name': config.labels.jsfInputText,
                draggable: 'form, form *',
                droppable: false,
                traits: [
                    traits.value,
                    traits.name,
                    traits.placeholder, 
                    traits.required,
                    {
                        label: config.labels.trait_value,
                        type: 'text',
                        name: 'type',
                        // options: [
                        //     {value: 'text', name: config.labels.type_text},
                        //     {value: 'email', name: config.labels.type_email},
                        //     {value: 'password', name: config.labels.type_password},
                        //     {value: 'number', name: config.labels.type_number},
                        //     {value: 'date', name: config.labels.type_date},
                        //     {value: 'hidden', name: config.labels.type_hidden},
                        // ]
                    }
                ],
            },
        },
        extendView: 'input',
        view: {
            tagName: 'input',
            attributes: {
                type: 'text',
            },
        }
    });
}
