import React , { useEffect }from 'react'
import { observer } from 'mobx-react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import Panels from './EditorPanels'
import {SECTORS, StyleCommands } from './StyleManager'
import { LayerCommands } from './LayerManager'
import { TraitCommands } from './TraitManager'
import { BlockManager } from './BlockManager'
import './style.less'
import $ from 'jquery'

function EditorPage(){
  let editor = null
  const inirEditor = ()=> {
    editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#editor',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '100%',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: {
        defaults: [
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [{
                id: 'show-layers',
                active: true,
                label: 'Layers',
                command: 'show-layers',
                // Once activated disable the possibility to turn it off
                togglable: false,
              }, 
              {
                id: 'show-style',
                active: true,
                label: 'Styles',
                command: 'show-styles',
                togglable: false,
              },
              {
                id: 'show-traits',
                active: true,
                label: 'Traits',
                command: 'show-traits',
                togglable: false,
              },
            ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [{
                id: 'device-desktop',
                label: 'PC端',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              }, {
                id: 'device-mobile',
                label: '移动端',
                command: 'set-device-mobile',
                active: true,
                togglable: false,
              },
              {
                id: 'preview',
                className: 'fa fa-eye',
                command: 'preview',
                context: '预览',
                attributes: { title: 'Preview' }
              },
          ],
          },
        ],
      },
      selectorManager: {
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [...SECTORS],
      },
      layerManager: {
        appendTo: '.layers-container'
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      blockManager: {
        appendTo: '.blocks-container',
      },
      deviceManager: {
        devices: [{
            name: 'Desktop',
            width: '', // default size
          }, {
            name: 'Mobile',
            width: '375px', // this value will be used on canvas width
            widthMedia: '480px', // this value will be used in CSS @media
        }]
      },
    });

    StyleCommands(editor);
    LayerCommands(editor);
    TraitCommands(editor);

    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    });
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    });
    editor.on('run:preview', () =>{
      $('.panel__left').addClass('gjs-hidden')
      $('.panel__right').addClass('gjs-hidden')
    })
    editor.on('stop:preview', () =>{
      $('.panel__left').removeClass('gjs-hidden')
      $('.panel__right').removeClass('gjs-hidden')
    })

  }
  
  useEffect(() => {
    inirEditor()
    Panels(editor)
    BlockManager(editor)
  })

  return <div className="page-home page-content">
    <div className="panel__top">
      <div className="panel__basic-actions"></div>
      <div className="panel__devices"></div>
      <div className="panel__switcher"></div>
    </div>
    <div className="editor-row ">
      <div className="panel__left ">
        <div className="blocks-container  gjs-two-color"></div>
      </div>
      <div className="editor-canvas">
        <div id="editor" >
          <h1>编辑器</h1>
        </div>
      </div>
      <div className="panel__right ">
        <div className="layers-container"></div>
        <div className="styles-container"></div>
        <div className="traits-container"></div>
      </div>
    </div>
   
  </div>
}

export default  observer(EditorPage)
