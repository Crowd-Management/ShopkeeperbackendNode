const functions = require("firebase-functions");

var admin = require("firebase-admin");

admin.initializeApp({
  apiKey: '35faee96b50a1109bf454f3d425f434750664490',
  authDomain: 'https://accounts.google.com/o/oauth2/auth',
  projectId: 'minimarket-384e9'
});

exports.db=admin.firestore();