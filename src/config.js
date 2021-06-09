import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBGk_BiU0dFBgUlWhXuq1VOH5Zn03YF_xs",
  authDomain: "sendto-database.firebaseapp.com",
  databaseURL: "https://sendto-database-default-rtdb.firebaseio.com",
  projectId: "sendto-database",
  storageBucket: "sendto-database.appspot.com",
  messagingSenderId: "347730350992",
  appId: "1:347730350992:web:6cd7a8f5f60f59fe705915",
  measurementId: "G-0HVWTZSX0B"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();