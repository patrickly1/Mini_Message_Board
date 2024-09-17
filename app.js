const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");
const links = [
    { href: "/", text: "Home"}, 
    { href: "/new", text: "New Message"},
];
const messages = require("./data")
//const users = ["Rose", "Cake", "Biff"];
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));
app.use("/new", newRouter);
app.use("/", indexRouter);


app.use((req, res, next) => {
    next();
});

app.get("/", (req, res) => {
    console.log("Root route accessed");
    res.render("index", { title: "Mini Messageboard", messages: messages }) //,users: users });
});

const PORT = 3000;
app.listen(PORT, () => 
    {console.log(`My first Express app - listening on port ${PORT}!`)
});