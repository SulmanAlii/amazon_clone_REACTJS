import firebase from 'firebase';

var FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWMo3DWuXDoXYaShg76NOtUcq7N58ycSQ",
    authDomain: "clone-69b72.firebaseapp.com",
    databaseURL: "https://clone-69b72.firebaseio.com",
    projectId: "clone-69b72",
    storageBucket: "clone-69b72.appspot.com",
    messagingSenderId: "147890714697",
    appId: "1:147890714697:web:365ed27f6af52e695fe798",
    measurementId: "G-3WPGS5F4EK",
});


const auth = FirebaseApp.auth();

export {auth}