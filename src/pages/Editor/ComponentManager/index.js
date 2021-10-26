import { Echart } from './Echart'

export function ComponentManager(editor) {
  editor.on(`component:update`, model => console.log('Global hook: component:update:testprop', model.get('type')));
  const domc = editor.DomComponents
  Echart(domc);
  // editor.DomComponents.addType('my-input-type', {
  //   // Make the editor understand when to bind `my-input-type`
  //   isComponent: el => el.tagName === 'INPUT',
  
  //   // Model definition
  //   model: {
  //     // Default properties
  //     defaults: {
  //       tagName: 'input',
  //       draggable: 'form, form *', // Can be dropped only inside `form` elements
  //       droppable: false, // Can't drop other elements inside
  //       attributes: { // Default attributes
  //         type: 'text',
  //         name: 'default-name',
  //         placeholder: 'Insert text here',
  //       },
  //       traits: [
  //         'name',
  //         'placeholder',
  //         { type: 'checkbox', name: 'required' },
  //       ],
  //     }
  //   }
  // });
}