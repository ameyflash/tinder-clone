//import express from 'express';
const express = require('express');
//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Cards = require('./cardSchema');
const cors = require('cors');

//App config
const app = express();
const PORT = process.env.PORT || 3001

const db_url = "mongodb://localhost:27017/Tinder";

//middleware
app.use(express.json());
app.use(cors);

//DB Config
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//API endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.post('/cards', (req, res) => {
    const card = req.body;

    Cards.create(card, (err, data) => {
        if(err) {
            res.status(500).send(err);
            //console.log(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
            //console.log(err);
        } else {
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(PORT, () => console.log("Listening at PORT :  " + PORT));