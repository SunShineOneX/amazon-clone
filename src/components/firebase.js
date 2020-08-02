import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC5GjPuyKbJhPRw4ebMIDI6CLzKuqc6pa4",
        authDomain: "clone-5b653.firebaseapp.com",
        databaseURL: "https://clone-5b653.firebaseio.com",
        projectId: "clone-5b653",
        storageBucket: "clone-5b653.appspot.com",
        messagingSenderId: "390863077296",
        appId: "1:390863077296:web:ff71a711cdb2bf3750e075",
        measurementId: "G-CYD4D989SE"
});

const auth = firebase.auth();

export { auth };