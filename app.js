const express = require('express');
const registerRouter = require('./delete.router.js');
const deleteRouter = require('./delete.router.js');
const cors = require('cors');
const app = express();

app.use(cors);
app.use('/register', registerRouter);
app.use('/delete', deleteRouter);

app.listen(3000, () => {
  console.log('server is running');
});
