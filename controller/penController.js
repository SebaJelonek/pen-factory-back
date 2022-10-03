const Pen = require('../model/Pen');

const newPen = async (req, res) => {
  const { pen } = req.body;
  await Pen.create(pen);
  res
    .status(200)
    .json({ message: 'New pen has been added', status: 'success' });
};

const deletePen = async (req, res) => {
  const { _id } = req.body;
  await Pen.deleteOne({ _id });
  const allPens = await Pen.find({});

  res
    .status(200)
    .json({ allPens, status: 'success', message: 'Pen has been deleted' });
};

const addPenAmount = async (req, res) => {
  const { additionalAmount, _id } = req.body;
  const { amount } = await Pen.findById(_id);
  await Pen.findOneAndUpdate({ _id }, { amount: amount + additionalAmount });
  const allPens = await Pen.find({});
  res.status(200).json({
    allPens,
    status: 'success',
    message: 'Pens amount has been updated',
  });
};

const penList = async (req, res) => {
  allPens = await Pen.find({});
  res.status(200).json({ allPens, status: 'success' });
};

module.exports = { penList, newPen, deletePen, addPenAmount };
