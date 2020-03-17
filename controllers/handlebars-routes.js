var db = require("../models");

module.exports = function(app) {
  app.get("/sportsswapper", (req, res) => {
    res.render("index");
  });
};
