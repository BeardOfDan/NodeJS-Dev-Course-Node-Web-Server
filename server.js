"use strict";

const express = require('express');

let app = express();

app.use(express.static(__dirname + "/public"));

const port = 3000; // process.argv[2] || 3000

app.get("/", (req, res, next) => {
  // res.send("<h1>Hello Express</h1>");
  res.send({
    name: "Dan",
    likes: [
      "software", "Shadow"
    ]
  });
});

app.get('/about', (req, res, next) => {
  res.send("About Page");
});

app.get("/bad", (req, res, next) => {
  res.send({
    errorMessage: "There was an error in handling the request"
  });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
