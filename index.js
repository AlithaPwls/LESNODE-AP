const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const port = process.env.PORT || 3000;

const messagesRouter = require('./routes/v1/messages.js');

// 🔹 Middleware registreren
app.use(logger);

// 🔹 JSON parser voor POST requests
app.use(express.json());

// 🔹 Routes
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
