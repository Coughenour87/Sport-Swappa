var express = require("express");

var PORT = process.env.PORT || 7000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//var data= {
//     items:[
//         {}
//     ]
// }
const data={}
app.get("/", function(req, res) {

      // res.render("index", data);
      res.render("items", data);
  });
app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
