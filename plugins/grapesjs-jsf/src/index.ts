import grapesjs, { Plugin } from 'grapesjs';
import JsfPluginOptions from "./@types/jsfPluginOptions"; 
import loadJSFComponents from './jsf';
import i18next from './i18n';

const plugin: Plugin<JsfPluginOptions> =  (editor, options) => {
    loadJSFComponents(editor);
}

export default plugin;

// let x = i18next.t("components.input_text",{ns: "blocks"});
// console.log("*** x = " + x);