import { Editor } from "grapesjs";
import jsfComponents from "./components"

export default (editor: Editor, config = {}) => {

    const componentManager = editor.DomComponents;

    jsfComponents(editor);

}