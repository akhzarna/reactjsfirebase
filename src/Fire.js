import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDBjRFNgXDLNKNe0Qe9BFrTlJPSQGrsbRI",
     authDomain: "onlinelectures-467b3.firebaseapp.com",
     databaseURL: "https://onlinelectures-467b3.firebaseio.com",
     projectId: "onlinelectures-467b3",
     storageBucket: "onlinelectures-467b3.appspot.com",
     messagingSenderId: "834472329929",
     appId: "1:834472329929:web:4009b965eb89268cf68318",
     measurementId: "G-Z01VV69364"
 };

 // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 const facebookProvider = new firebase.auth.FacebookAuthProvider();

 export {fire,facebookProvider};
