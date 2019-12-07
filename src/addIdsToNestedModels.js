import isArray from 'lodash/isArray'
import omit from 'lodash/omit'

const addIdsToNestedModels = (entries)=> entries.reduce((models, [key, value]) => {
  const id = value && (value.id || value._id)
  if (id) return ({ ...omit(models, key), [key + '_id']: id })
  if (isArray(value)) return omit(models, key)
  return { ...models, [key]: value }
}, {})

export default addIdsToNestedModels
