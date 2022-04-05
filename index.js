const express = require('express');
const app = express();
const router = require('./routes/router.js');
const port = 4000;

//static file serve
app.use(express.static('public'));

app.use('/', router);

module.exports = app;
app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});