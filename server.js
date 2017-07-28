"use strict";

const express = require('express');
const hbs = require('hbs');

let app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

const PORT = 3000; // process.argv[2] || 3000

app.get("/", (req, res, next) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    currentYear: new Date().getFullYear(),
    welcomeMessage: "Hello"
  });
});

app.get('/about', (req, res, next) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res, next) => {
  res.send({
    errorMessage: "There was an error in handling the request"
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
