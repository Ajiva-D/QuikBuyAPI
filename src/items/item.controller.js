import model from './item.model'
const getMany = model => async (req, res) => {
  try {
    const docs = await model
      .find({ _id: req._id })
      .lean()
      .exec()

    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const crudContollers = {
	getMany : getMany(model)
}