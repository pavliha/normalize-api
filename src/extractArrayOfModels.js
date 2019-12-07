import disassembleModel from './disassembleModel'
import merge from 'lodash/merge'

const extractArrayOfModels = (models, [key, value]) => {
  const extracted = value
    .map(v => disassembleModel(v, key))
    .reduce((models, model) => {
      const entries = Object.entries(model)
        .map(([key, model]) => {
          return [key, { [model.id || model._id]: model }]
        }).reduce((models, [key, model]) => {

          return { ...models, [key]: model }
        }, {})

      return merge(models, entries)
    }, {})

  return { ...models, ...extracted }
}

export default extractArrayOfModels
