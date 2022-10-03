const { Router } = require('express');

const {
  penList,
  newPen,
  deletePen,
  addPenAmount,
} = require('../controller/penController');

const penRouter = Router();

penRouter.post('/api/pen/new', newPen);
penRouter.get('/api/pen/list', penList);
penRouter.post('/api/pen/delete', deletePen);
penRouter.post('/api/pen/add', addPenAmount);

module.exports = penRouter;
