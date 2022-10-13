const express = require('express');
const cors = require('cors');
const assert = require('assert');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
require('dotenv').config();
require('express-async-errors')


// express
const app = express()

// route
const authRoute = require('./route/authRoute')


// configuration
app.use(cors());
app.use(cookieParser(process.env.REF_TOKEN_SECRET));
app.use(helmet());


// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JSON.stringify(), JSON.parse()

// primary routes
app.use(`/api/v1/auth`, authRoute)


// server listener
const PORT = process.env.PORT || 7000;
const connectDB = require('./db')

const start = async () => {
    try {
        // db connection
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`server is listening on port http://localhost:${PORT}`)
        })
    } catch (err) {
        throw err;
    }
}

start()