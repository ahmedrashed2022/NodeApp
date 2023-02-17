// create the server
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

//routes

const indexRouter = require("./routes/index");
const AuthorsRouter = require("./routes/authors");

//views and layouts

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

//connect database

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ahmedrashed:hstQFYmoQBtwbdyL@cluster0.6ibador.mongodb.net/test?authMechanism=SCRAM-SHA-1",
  () => {
    console.log("Connected");
  }
);
mongoose.set("strictQuery", false);

//hanlde requests

app.use("/", indexRouter);

app.use("/authors", AuthorsRouter);

app.listen(process.env.PORT || 3000);
