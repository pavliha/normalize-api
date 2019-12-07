import extractNestedModels from './extractNestedModels'
import addIdsToNestedModels from './addIdsToNestedModels'

const disassembleModel = (model, name) => {
  const entries = Object.entries(model)
  const extractedModels = extractNestedModels(entries)
  const modelWithIds = addIdsToNestedModels(entries)
  return { [name]: modelWithIds, ...extractedModels }
}

export default disassembleModel
