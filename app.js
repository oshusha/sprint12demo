const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/', router)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})