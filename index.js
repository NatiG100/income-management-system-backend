const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const mongoose = require('mongoose');
const router = require('./routes/router.js');

require('dotenv').config();

const port = process.env.PORT;

//////////////////DB/////////////////////////////
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_DB)
}

//////////////////app/////////////////////
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