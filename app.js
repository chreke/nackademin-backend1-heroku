const express = require("express");

const app = express()
const PORT = process.env.PORT;

app.get("/", (_req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
