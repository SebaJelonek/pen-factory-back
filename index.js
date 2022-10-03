const express = require('express');
const cors = require('cors');
require('./mongoConnection');

const userRouter = require('./routes/userRoutes');
const penRouter = require('./routes/penRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(penRouter);
app.use(orderRouter);

app.listen(process.env.PORT || 1337, () => {
  console.log('started');
});
