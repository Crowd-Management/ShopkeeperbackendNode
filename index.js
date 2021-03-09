const functions = require("firebase-functions");
const express = require('express')
const app = express()
const port = 3000

var admin = require("firebase-admin");

admin.initializeApp({
  apiKey: '35faee96b50a1109bf454f3d425f434750664490',
  authDomain: 'https://accounts.google.com/o/oauth2/auth',
  projectId: 'minimarket-384e9'
});

let db=admin.firestore();
let a=db.collection('users')

app.get('/', async (req, res) => {
	db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
	res.send('done');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})