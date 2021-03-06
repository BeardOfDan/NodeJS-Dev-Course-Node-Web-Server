"use strict";

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// logger
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile("server.log", log + "\n", (err) => {
    if (err) {
      console.log("Unable to append to 'server.log'.");
    }
  });

  next();
});

// maintenance mode
// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
//   // no call to next
// });

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase();
});

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

app.get('/projects', (req, res, next) => {
  res.render("projects.hbs", {
    pageTitle: "Projects Page",
    welcomeMessage: "This is a portfolio page"
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
