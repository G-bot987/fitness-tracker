const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes")
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const ApiRoutes = require("./public/api.js")
app.use(express.static("public", {extensions: ["html"]}));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use("/", redirects )// 
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
