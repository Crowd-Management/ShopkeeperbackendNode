var db_connect = require('../firebase_connect/firebase_connect.js')
var db = db_connect.db;

exports.test_func = (req, res) => {
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
};