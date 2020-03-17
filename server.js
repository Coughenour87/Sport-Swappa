// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");


// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
<<<<<<< HEAD
var PORT = process.env.PORT || 8000;
var db = require("./models");
var exphbs = require("express-handlebars");
=======
const PORT = process.env.PORT || 8000;
const db = require("./models");

>>>>>>> 0a944eda0a703a0582ff2f278d99099cb3ac02eb
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// express handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
<<<<<<< HEAD
require("./controllers/handlebar-routes.js")(app);
=======
>>>>>>> 0a944eda0a703a0582ff2f278d99099cb3ac02eb
require("./controllers/api-routes.js")(app);
require("./controllers/handlebars-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser.",
<<<<<<< HEAD
      PORT
    );
=======
      PORT,
      )
>>>>>>> 0a944eda0a703a0582ff2f278d99099cb3ac02eb
  });
});
