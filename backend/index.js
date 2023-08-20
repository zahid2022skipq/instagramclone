const express = require('express')
require('dotenv').config();
const { initializeApp } = require("firebase/app");
const userController  = require('./controller/userController');

const app_express = express()
const PORT = 5000

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebase_api,
  authDomain: process.env.firebase_domain,
  projectId: process.env.project_id,
  storageBucket: process.env.storage_bucket,
  messagingSenderId: process.env.messaging_sender_id,
  appId: process.env.app_id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app_express.get('/', (req, res) => {
    res.send(userController.registerUserController())
})



  
app_express.listen(PORT,() =>
{
    console.log("App listening on http://localhost:5000/")
})