const express = require('express')
const app = express()
const port = 3000

var db_connect = require('./firebase_connect/firebase_connect.js');

var shopkeeper_register = require('./shopkeeper_register/shopkeeper_registration.js');

var db = db_connect.db;

app.get('/', shopkeeper_register.test_func)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})