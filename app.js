var PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postRoutes = require("./routes/posts");

//Middlewares
app.use("/posts", postRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on the Home Page");
});

//Connect to MongoDB

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//Listening Port
app.listen(PORT);
