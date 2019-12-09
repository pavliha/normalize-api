import omit from 'lodash/omit'

const mergeEntries = (entries, accumulator) =>
  entries.reduce((accumulator, value) => {
    return Object.entries(accumulator).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: [...(acc[key] || []), ...value]
    }), value)
  }, accumulator)

const mapEntries = (model) =>
  Object.entries(model)
    .map(([key, value]) => ({ [key]: [value] }))

const mapEntriesArray = (model) =>
  Object.entries(model)
    .map(([key, value]) => ({ [key]: Object.values(value) }))

const removeArrayLikeFromModel = (model, arrayLike) => {
  const keys = Object.keys(arrayLike)
  return omit(model, keys)
}

const extractArrayLike = (model) => {
  return Object.entries(model).reduce((acc, [key, value]) => {
    const isArrayLike = !(value.id || value._id)
    return isArrayLike ? { ...acc, [key]: value } : acc
  }, {})
}

const mergeDisassembledModels = (models) => models.reduce((accumulator, model) => {
  const arrayLike = extractArrayLike(model)
  const arrayOfEntries = mapEntriesArray(arrayLike)
  const modelWithoutArrayLike = removeArrayLikeFromModel(model, arrayLike)
  const entriesMap = [...mapEntries(modelWithoutArrayLike), ...arrayOfEntries,]
  return mergeEntries(entriesMap, accumulator)
}, {})

export default mergeDisassembledModels
