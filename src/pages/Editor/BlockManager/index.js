import { Basic } from './Basic'
import { Echart } from './Echart'
export function BlockManager(editor){

  const blockManager = editor.BlockManager;
  Basic(blockManager)
  Echart(blockManager)
}