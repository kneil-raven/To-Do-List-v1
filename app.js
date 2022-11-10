const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS method to display the template for the website
app.set("view engine", "ejs");

// declare items here
const items = ["Buy", "Cook", "Eat"];
const workItems = [];

// GET method route
app.get("/", (req, res) => {
  let day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

// POST method route
app.post("/", (req, res) => {
  const item = req.body.newItem;

  // console.log(req.body);
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// GET work route
app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

// POST work route
app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);

  res.redirect("/work");
});

// about GET route
app.get("/about", (req, res) => {
  res.render("about");
});

// listen to port 3000
// app.listen(process.env.PORT || 3000, () => {
//     console.log("server running on port 3000");
//   });
app.listen(3000, () => {
  console.log("running on port 3000");
});
