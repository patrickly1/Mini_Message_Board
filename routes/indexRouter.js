const { Router } = require("express");
const messages = require("../data");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
})

indexRouter.get("/message/:id", (req, res) => {
    const { id } = req.params;
    const message = messages[id];
    
    if (message) {
        res.render("messageDetail", {title: `Message from ${message.user}`, message })
    } else {
        res.status(404).send("Message not found");
    }
})

module.exports = indexRouter;