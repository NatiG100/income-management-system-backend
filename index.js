//express import
const express = require('express');
const app = express();
const session = require('express-session');
//session import

//parser import
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

//db import
const mongoose = require('mongoose');
const router = require('./routes/router.js');

//cors import
var cors = require('cors');

require('dotenv').config();

const port = process.env.PORT;

//////////////////session config///////////////////
const sessionMiddleware = session({
    name: 'qid',
    secret: process.env.SESSION_SECRETE,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: false,
        sameSite: false,
    },
})
app.use(
    sessionMiddleware
);

//////////////////DB/////////////////////////////
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_DB)
}

//////////////////app/////////////////////

//use cors
var corsOption = {
    credentials: true,
    origin: 'http://localhost:3000'
};
app.use(cors(corsOption));
//parsing application/json
app.use(bodyParser.json());

//parsing multipart/form-data
app.use(upload.array());

//router
app.use('/api/v1.0.0/', router);
app.use('', (req, res) => {
    res.status(404).json({ err: "The API end point you requested doesn't exist." })
})
//static file serve
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});