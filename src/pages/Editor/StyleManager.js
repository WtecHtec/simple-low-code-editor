export const SECTORS = [
  {
    name: '定位',
    open: false,
    buildProps: ['float', 'display', 'text-align', 'position', 'top', 'right', 'left', 'bottom']
  },{
    name: '布局',
    open: false,
    buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
  },{
    name: '尺寸',
    open: false,
    buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
  },{
    name: '字体',
    open: false,
    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
  },{
    name: '边框',
    open: false,
    buildProps: ['border-radius', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
  },{
    name: '其他',
    open: false,
    buildProps: ['transition', 'perspective', 'transform'],
  }
]

export function StyleCommands(editor){
  editor.Commands.add('show-styles', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.styles-container') },
  
    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = '';
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = 'none';
    },
  });
}