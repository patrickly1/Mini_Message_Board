const { Router } = require("express");
const newRouter = Router();
const messages = require("../data");

newRouter.get("/", (req, res) => {
    res.render("forms", { title: "Create a New Message" });
});

newRouter.get(":/newId", (req, res) => {
    const { newId } = req.params;
    res.send(`New ID: ${newId}`);
})

newRouter.post("", (req, res) => {
    const { message_text, author_name } = req.body;
    messages.push({ text: message_text, user: author_name, added: new Date() });
    res.redirect("/");
})

module.exports = newRouter;