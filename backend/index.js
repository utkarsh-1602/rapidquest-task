require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db/db-connection')

const {readdirSync} = require('fs');
const path = require('path');


// routes

const app = express()
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

//serve static files
app.use('/public', express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});