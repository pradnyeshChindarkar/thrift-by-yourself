const mongoose = require('mongoose');
const express = require('express');
const productRoute = require('./routes/product.route')
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// Routes
app.use('/api/product', productRoute);

app.get("/", (req, res) => {
    res.send("From node api")
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb connected")
        app.listen(3000, () => {
            console.log("Server is running on 3000");
        });
    }).catch(() => console.log('Connection Failed'))