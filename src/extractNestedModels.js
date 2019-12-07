import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'
import extractArrayOfModels from './extractArrayOfModels'
import extractModel from './extactModel'

const extractNestedModels = entries => entries.reduce((models, [key, value]) => {
  if (isArray(value)) return extractArrayOfModels(models, [key, value])
  if (isObject(value) && (value.id || value._id)) return extractModel(models, [key, value])
  return models
}, {})

export default extractNestedModels
