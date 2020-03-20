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
  app.get("/items/football", (req, res) => {
    db.Item.findAll({ where: { sport_name: "Football" } })
      .then(footballItems => {
        res.render("items", { Item: footballItems });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/items/basketball", (req, res) => {
    db.Item.findAll({ where: { sport_name: "Basketball" } })
      .then(bballItems => {
        res.render("items", { Item: bballItems });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/items/baseball", (req, res) => {
    db.Item.findAll({ where: { sport_name: "Baseball" } })
      .then(baseballItems => {
        res.render("items", { Item: baseballItems });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/items/soccer", (req, res) => {
    db.Item.findAll({ where: { sport_name: "Soccer" } })
      .then(items => {
        console.log(items);
        res.render("items", { Item: items });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });
};
