export function BlockManager(editor){
  const blockManager = editor.BlockManager;
  blockManager.add('h1-block', {
    label: 'Heading',
    content: '<h1>Put your title here</h1>',
    category: 'Basic',
    attributes: {
      title: 'Insert h1 block'
    }
  });
}