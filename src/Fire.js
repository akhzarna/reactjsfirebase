import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDFaOCoCQqmcu0RC4hf04AZ1RjHSpJpXfI",
  authDomain: "newtest-a5ac9.firebaseapp.com",
  databaseURL: "https://newtest-a5ac9.firebaseio.com",
  projectId: "newtest-a5ac9",
  storageBucket: "newtest-a5ac9.appspot.com",
  messagingSenderId: "831439537626",
  appId: "1:831439537626:web:6b4db232f78d825c92ace3",
  measurementId: "G-J2CF4J9FT5"
 };
 // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;
