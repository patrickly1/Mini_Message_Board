const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");
const messages = require("./data");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/new", newRouter);
app.use("/", indexRouter);  // indexRouter should handle the root route

const PORT = process.env.PORT || 8080;  // Make the port dynamic for production

app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});