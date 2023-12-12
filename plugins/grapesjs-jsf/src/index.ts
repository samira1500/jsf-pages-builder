
import { Editor } from 'grapesjs'
import loadCommands from './commands';
import loadTraits from './traits';
import loadComponents from './components';

export default (editor: Editor, opts) => {

  const default_blocks = {
    // FORM
    jsfInputText: true,
  };

  const default_labels = {
    // FORM
    jsfInputText: 'JSF Input Text',
  };
  
  const default_categories = {
    'jsfForms': true,
  };

  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  const opts_categories = opts.blockCategories || {};
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['blockCategories'];
  let options = { ...{
    blocks: Object.assign(default_blocks, opts_blocks),
    labels: Object.assign(default_labels, opts_labels),
    blockCategories: Object.assign(default_categories, opts_categories),
    optionsStringSeparator: '::',
    gridDevices: true,
    gridDevicesPanel: false,
    classNavigation: 'nav',
    classTabPanes: 'tab-content',
    classTabPane: 'tab-pane',
    classTab: 'nav-item',
  },  ...opts };

  loadCommands(editor, options);
  loadTraits(editor, options);
  loadComponents(editor, options);
  loadDevices(editor, options);
  loadCss(editor, options);


}
export default grapesjs.plugins.add('grapesjs-blocks-bootstrap5', (editor, opts = {}) => {

  window.editor = editor;

  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  const opts_categories = opts.blockCategories || {};
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['blockCategories'];


  console.log("******** options are");
  console.log(options);

  // Add components
  loadCommands(editor, options);
  loadTraits(editor, options);
  loadComponents(editor, options);
  loadDevices(editor, options);
  loadCss(editor, options);
});