const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const cors = require("cors")
const app = express();
app.use(cors());
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log("server is ruuning"));