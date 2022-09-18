const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(userRouter);

app.listen(process.env.PORT || 1337, () => {
  console.log('started');
});
