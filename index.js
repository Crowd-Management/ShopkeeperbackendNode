const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

var shopkeeper_register = require("./shopkeeper_register/shopkeeper_registration.js");
app.use("/", shopkeeper_register);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
