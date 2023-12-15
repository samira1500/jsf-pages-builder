import { Editor } from "grapesjs";
import jsfInputTextBuilder from "./JSFInputText"

export default (editor: Editor, config = {}) => {

    const componentManager = editor.DomComponents;

    jsfInputTextBuilder.create(editor);
}