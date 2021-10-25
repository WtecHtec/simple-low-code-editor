export default function Panels(editor){
  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'export',
        className: 'btn-open-export',
        label: 'Code',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      },
      {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'Json',
        context: 'show-json',
        command(editor) {
          editor.Modal.setTitle('Components JSON')
            .setContent(`<textarea style="width:100%; height: 280px;color: #333;">${JSON.stringify(editor.getComponents() , null, 2)}</textarea>`)
            .open();
        },
      }
    ]
  })
};

