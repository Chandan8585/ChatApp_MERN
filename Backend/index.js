const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const chatRouter = require('./routes/chatRouter');
const chats = require('./data/data');


dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

app.get('/api/chats/:id', (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});

app.use('/api/auth', authRouter); 
app.use("/api/user" , userRouter); 
app.use('/api/chat',  chatRouter);
const PORT = 8080;



mongoose.connection.once('open', () => {
    console.log('Connected to DB'); 

 
    app.listen(process.env.PORT ||PORT, () => {
        console.log('Server is running');
    });
});
