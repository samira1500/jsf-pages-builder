import grapesjs, { Plugin } from 'grapesjs';
import JsfPluginOptions from "./model/jsfPluginOptions"; 
import loadJSFElements from './jsf';
import i18next from './i18n';

const plugin: Plugin<JsfPluginOptions> =  (editor, options) => {
    loadJSFElements(editor);
    //loadPrimefacesElements(editor);
}

export default plugin;

// let x = i18next.t("components.input_text",{ns: "blocks"});
// console.log("*** x = " + x);