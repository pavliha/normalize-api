
const convertObjectOfModelsToArray = (disassembledModels)=>{
  return Object.entries(disassembledModels).reduce((accumulator, [key, model]) => {
    const models = { ...accumulator }
    if (!(model.id || model._id)) {
      models[key] = [...(models[key] || []), ...Object.values(model)]
    } else {
      models[key] = [...(models[key] || []), model]
    }

    return models
  }, {})
}


export default convertObjectOfModelsToArray
