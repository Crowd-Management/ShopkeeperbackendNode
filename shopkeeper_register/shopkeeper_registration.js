var express = require("express");
var router = express.Router();

var db_connect = require("../firebase_connect/firebase_connect.js");
var db = db_connect.db;

router.post("/registershopkeeper", (req, res, next) => {
	try {
		db.collection("shopkeepers")
			.doc(req.body.uid)
			.set({
				first: req.body.first,
				middle: req.body.middle,
				last: req.body.last,
				born: req.body.born,
				uid: req.body.uid,
			})
			.then((docRef) => {
				console.log("Document written with ID: ", req.body.uid);
				res.status(201).json({
					message: `Document written with ID:${req.body.uid}`,
					error: false,
				});
			});
	} catch (error) {
		console.error("Error adding user: ", error);
		res.status(409).json({
			message: `Error adding user: ${error}`,
			error: true,
		});
	}
});

router.post("/isshopkeeper", (req, res, next) => {
	try {
		var docRef = db.collection("shopkeepers").doc(req.body.uid);

		docRef.get().then((doc) => {
			if (doc.exists) {
				console.log("Shopkeeper exists");
				res.status(201).json({
					message: `Shopkeeper exists`,
					exist: true,
					error: false,
				});
			} else {
				console.log("No such Shopkeeper!");
				res.status(201).json({
					message: `Shopkeeper does not exists`,
					exist: false,
					error: false,
				});
			}
		});
	} catch (error) {
		console.error("Error: ", error);
		res.status(409).json({
			message: `Error: ${error}`,
			error: true,
		});
	}
});

module.exports = router;
