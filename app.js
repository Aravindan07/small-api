var PORT_NO = process.env.PORT || 8080;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoutes = require("./routes/posts");

//Middlewares
app.use("/", postRoutes);

//ROUTES
// app.get("/", (req, res) => {
//   res.send("We are on the Home Page");
// });

//Connect to MongoDB

mongoose.connect(
  process.env.MONGODB_URI || process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//Listening Port
app.listen(PORT_NO);
