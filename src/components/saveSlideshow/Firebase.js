import firebase from 'firebase/app'; 
import 'firebase/database'; 

const firebaseConfig = {
     // Firebase configuration
   apiKey: "AIzaSyDMWwuhxDSJ88p3su_Ze7e4lK86A1ihpQA",
   authDomain: "daily-positivity.firebaseapp.com",
   databaseURL: "https://daily-positivity.firebaseio.com",
   projectId: "daily-positivity",
   storageBucket: "daily-positivity.appspot.com",
   messagingSenderId: "613121903609",
   appId: "1:613121903609:web:7715fe00bff05cd0574b28"
 };
 // Initialize Firebase


firebase.initializeApp(firebaseConfig);