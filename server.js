"use strict";

const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase();
});

const PORT = 3000; // process.argv[2] || 3000

app.get("/", (req, res, next) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Hello"
  });
});

app.get('/about', (req, res, next) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
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
