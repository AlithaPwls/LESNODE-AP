const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const port = 3000;
const messagesRouter = require('./routes/v1/messages.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/messages');

app.use(logger);

app.use(express.json());

app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
