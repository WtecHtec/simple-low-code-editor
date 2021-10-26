export  const CssComposer = (editor) =>{
  // 注入第三方 css
  let iframeDocument = editor.getContainer().getElementsByTagName('iframe')[0].contentWindow.document
  iframeDocument.getElementsByTagName('body')[0].setAttribute('class','gjs-dashed' ) 
  let head = iframeDocument.getElementsByTagName('head')[0]
  let cssLink = iframeDocument.createElement('link')
  // cssLink.href = 'http://localhost:4200/app.css'
  cssLink.href = 'http://localhost:4200/index.css'
  cssLink.rel = "stylesheet"
  head.append(cssLink)

  // let jsEl = iframeDocument.createElement('script')
  // jsEl.src = 'https://cdn.jsdelivr.net/npm/echarts@5.2.1/dist/echarts.min.js'
  // head.append(jsEl)
  
}
