export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({ _id: req.params.id, createdBy: req.user._id })
      .lean()
      .exec();
    if (!doc) {
      return res.status(400).end();
    }
    return res.status(200).json({ data: doc });
  } catch (err) {
    console.error(err.message);
    return res.status(404).end();
  }
};

export const getMany = model => async (req, res) => {
  try {
    const docs = await model
      .find({ createdBy: req.user._id })
      .lean()
      .exec();
    return res.status(200).json({ data: docs });
  } catch (err) {
    console.error(err.message);
    return res.status(404).end();
  }
};

export const createOne = model => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body, createdBy: req.user._id });
    return res.status(201).json({ data: doc });
  } catch (err) {
    console.error(err.message);
    return res.status(400).end();
  }
};

export const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model
      .findByIdAndUpdate(
        { _id: req.params.id, createdBy: req.user._id },
        req.body,
        { new: true }
      )
      .lean()
      .exec();
    if (!updatedDoc) {
      return res.status(400).end();
    }
    return res.status(200).json({ data: updatedDoc });
  } catch (err) {
    console.error(err.message);
    return res.status(404).end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const removed = await model
      .findByIdAndRemove({ _id: req.params.id, createdBy: req.user._id })
      .exec();

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removed });
  } catch (err) {
    console.error(err.message);
    return res.status(400).end();
  }
};

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});
