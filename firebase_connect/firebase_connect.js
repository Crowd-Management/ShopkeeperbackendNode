const functions = require("firebase-functions");

var admin = require("firebase-admin");



const serviceAccount = require("../minimarket-384e9-firebase-adminsdk-87v6h-35faee96b5.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: '35faee96b50a1109bf454f3d425f434750664490',
  authDomain: 'https://accounts.google.com/o/oauth2/auth',
  projectId: 'minimarket-384e9'
});

exports.db=admin.firestore();