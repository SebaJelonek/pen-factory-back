const Order = require('../model/Order');
const User = require('../model/User');
const Pen = require('../model/Pen');

const orderList = async (req, res) => {
  const userId = req.body.id;
  const userOrders = await Order.find({ userId });
  let status, message;
  if (userOrders.length > 0) {
    status = 'success';
    message = `You have made ${userOrders.length} orders with us`;
  } else {
    status = 'error';
    message = "You haven't made any orders yet";
  }
  res.status(200).json({ status, userOrders, message });
};

const newOrder = async (req, res) => {
  const { productList, totalValue } = req.body;
  const userId = req.body.id;
  let productIds = [];
  let amountList = [];
  let productBrandList = [];
  let productNameList = [];
  let status, statusCode, message, orderId;

  productList.forEach(
    ({ productId, productName, productBrand, productAmount }) => {
      productIds.push(productId);
      productNameList.push(productName);
      productBrandList.push(productBrand);
      amountList.push(productAmount);
    }
  );

  for (let index = 0; index < productIds.length; index++) {
    const _id = productIds[index];
    const amount = amountList[index];
    let pen = await Pen.findById({ _id });
    if (amount <= pen.amount) {
      await Pen.findByIdAndUpdate({ _id }, { amount: pen.amount - amount });
      status = 'success';
      statusCode = 200;
      message = 'Order has been created';
    } else {
      status = 'error';
      statusCode = 400;
      message =
        'Amount you tried to order is higher than the amount we currently have on stock';
    }
  }
  if (statusCode === 200) {
    const order = await Order.create({
      userId,
      totalValue,
      productNameList,
      productBrandList,
    });
    orderId = order._id;
  } else {
    orderId = 'Something went wrong';
  }

  res.status(statusCode).json({
    orderId,
    status,
    message,
  });
};

module.exports = { orderList, newOrder };
