export function Line(domComponent) {
 
  domComponent.addType('ec-line', {
    model: {
      defaults: {
        attributes: { class: 'ec-dm', },
        components: ``,
        styles: ``,
        traits: [
          //Strings are automatically converted to text types
          // Same as: { type: 'text', name: 'name' }
          {
            type: 'button',
            label: 'DataServer',
            text: 'Click me',
            full: true, // Full width button
            command: editor => alert('Hello'),
            // or you can just specify the Command ID
            // command: 'some-command',
          }
        ]
      },
      init() {
        // console.log('Local hook: model.init');
        // Here we can listen global hooks with editor.on('...')
      },
      updated(property, value, prevValue) {
        console.log('Local hook: model.updated',
          'property', property, 'value', value, 'prevValue', prevValue);
      },
      removed() {
        console.log('Local hook: model.removed');
      },
      handlePropChange() {
        console.log('The value of testprop', this.get('testprop'));
      }
    },
    view: {
      init() {
        console.log('Local hook: view.init');
      },
      onRender() {
        console.log('Local hook: view.onRender', this.el);
        setTimeout(()=>{
          initEchart(this.el);
        }, 0)
      },
    },
  });
}

function initEchart(el){
  const ecLine = echarts.init(el);
  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  ecLine.setOption(option);
}