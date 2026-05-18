export const getAll = (Model) => async (req, res) => {
  try {
    const items = await Model.find({}).sort('order');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOne = (Model) => async (req, res) => {
  try {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOne = (Model) => async (req, res) => {
  try {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOne = (Model) => async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const upsertOne = (Model) => async (req, res) => {
  try {
    const item = await Model.findOneAndUpdate({}, req.body, { upsert: true, new: true });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
