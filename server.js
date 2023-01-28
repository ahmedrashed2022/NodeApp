// create the server
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//connect database

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ahmedrashed:admin@cluster0.6ibador.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Connected");
  }
);
mongoose.set("strictQuery", false);

//routes
const indexRouter = require("./routes/index");

//views and layouts
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

//hanlde requests

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
