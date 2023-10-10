const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");

const app = express();

app.get("/", (req, res)=> {
    res.send("API is running");
})
app.get("/api/chats", (req, res)=> {
    res.send(chats);
})
app.get("/api/chats/:id", (req, res)=> {
    const singleChat = chats.find((chat)=> 
        chat._id === req.params.id 
    )
    res.send(singleChat);
})
app.listen(8080, console.log("server is ruuning"));