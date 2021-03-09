const express = require('express')
const app = express()
const port = 3000

var db_connect = require('./firebase_connect/firebase_connect.js');

var customer_register = require('./customer_register/customer_registration.js');

var db = db_connect.db;

app.get('/', customer_register.test_func)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})