const express = require("express");

let app = express();

app.get("/", (request, response) => {
  let findDate = new Date();
  response.send(
    `${findDate.getDate()}-${findDate.getMonth() + 1}-${findDate.getFullYear()}`
  );
});

module.exports = app;
