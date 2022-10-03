const { Router } = require('express');

const { orderList, newOrder } = require('../controller/orderController');

const orderRouter = Router();

orderRouter.post('/api/order/list', orderList);
orderRouter.post('/api/order/new', newOrder);
//
module.exports = orderRouter;
