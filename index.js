const express = require('express');
const app = express();
const logger = require('./middelware/logger');
const port = 3000;
const messagesRouter = require('./routes/v1/messages.js');

app.use("/api/v1/messages", messagesRouter);
app.use(express.json()); //api's hebben een manier nodig om tussen fronted en backend te praten, browser kent html css js)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
