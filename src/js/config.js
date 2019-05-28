import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyCitpU2z3a4k77znhWA7SuzBFnLIAJGrwQ",
  authDomain: "fir-photo-230f1.firebaseapp.com",
  databaseURL: "https://fir-photo-230f1.firebaseio.com",
  projectId: "fir-photo-230f1",
  storageBucket: "fir-photo-230f1.appspot.com",
  messagingSenderId: "866590238634",
  appId: "1:866590238634:web:407696f55ac6b5a0"
}

const init = () => firebase.initializeApp(config)

init()
