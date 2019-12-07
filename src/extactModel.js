import disassembleModel from './disassembleModel'
import omit from 'lodash/omit'

const extractModel = (models, [key, value]) => {
  const disassembled = disassembleModel(value, key)
  models = omit(models, key)
  return { ...models, ...disassembled }
}

export default extractModel
