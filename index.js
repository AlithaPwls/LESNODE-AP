const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();
const logger = require('./middleware/logger');
const port = 3000;
const messagesRouter = require('./routes/v1/messages.js');
const mongoose = require('mongoose');


//Read Mongodb connection string from configuration (default vs production)
const dbUri = config.get('db.uri');
console.log(dbUri);
mongoose
.connect(dbUri)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));




app.use(logger);

app.use(express.json());

app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
