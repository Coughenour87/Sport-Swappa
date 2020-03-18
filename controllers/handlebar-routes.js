//need to change html to handlebars.

// Requiring path to so we can use relative routes to our HTML files
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {}
    res.render("index");
  });

  app.get("/items", (req, res) => {
    db.Item.findAll().then(items => {
      console.log(items);
      res.render("items", { Item: items });
    });
  });
  app.get("/signup", (req, res) => {
    if (req.user) {
      res.render("index");
    }
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      return res.redirect("/");
    }
    res.render("login");
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/sellItems", isAuthenticated, (req, res) => {
    if (req.user) {
      res.render("sell");
    } else {
      res.render("login");
    }
  });
};
