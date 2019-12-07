import disassembleModel from './disassembleModel'
import convertObjectOfModelsToArray from './convertObjectOfModelsToArray'
import mergeDisassembledModels from './mergeDisassembledModels'

const normalize = (name, data) => {

  if (!data) throw new Error('entity not found! Check normalize-api input')

  if (!Array.isArray(data)) {
    const disassembledModels = disassembleModel({ ...data }, name)
    return convertObjectOfModelsToArray(disassembledModels)
  }

  const models = data.map((model) => disassembleModel(model, name))
  return mergeDisassembledModels(models)

}

export default (entry) => {
  const result = Object.entries(entry).map(([key, value]) => normalize(key, value))
  return result[0]
}
