import { IMAGE } from '../../svg'
export function Basic(blockManager){

  blockManager.add('image', {
    label: 'Image',
    media: IMAGE,
    content: {type: 'image'},
    category: 'Basic',
    attributes: {}
  });
  
}