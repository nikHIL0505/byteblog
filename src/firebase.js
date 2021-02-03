import firebase from 'firebase/app';
import 'firebase/auth';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkHMYbv-BcmYUD85QixZgI6k6OrJsvnFQ",
    authDomain: "byteblog-3d006.firebaseapp.com",
    projectId: "byteblog-3d006",
    storageBucket: "byteblog-3d006.appspot.com",
    messagingSenderId: "78355967140",
    appId: "1:78355967140:web:f5ef530f0a149591f20a31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default const auth = firebase.auth();