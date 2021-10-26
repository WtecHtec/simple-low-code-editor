
import { LINE } from '../../svg'
export function Echart(blockManager){
  blockManager.add('line', {
    label: 'Line',
    media: LINE,
    content: { type: 'ec-line' },
    category: 'Echart',
    attributes: {}
  });

}