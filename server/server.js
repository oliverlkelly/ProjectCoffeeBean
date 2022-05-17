const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Running on ${PORT}`);
    });
});