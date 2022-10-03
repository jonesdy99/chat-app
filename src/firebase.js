import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcUEqvglrbv9vJ7ZVYWfgkk5bqI-viJJs",
  authDomain: "chat-app-9a90f.firebaseapp.com",
  projectId: "chat-app-9a90f",
  storageBucket: "chat-app-9a90f.appspot.com",
  messagingSenderId: "886724786033",
  appId: "1:886724786033:web:d7287c3d6b28802d64a8d0",
  measurementId: "G-GZXD54QM1R"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export{
  db,
  auth,
}