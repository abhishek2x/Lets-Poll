import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAQNvfN269IFiChUpqBVl-3hM6-Rm6MlGc",
  authDomain: "lets-poll-it.firebaseapp.com",
  projectId: "lets-poll-it",
  storageBucket: "lets-poll-it.appspot.com",
  messagingSenderId: "1099382305168",
  appId: "1:1099382305168:web:735dacf58ba32016190315"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = app.firestore();
const projectStorage = firebase.storage();

const providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGitHub = new firebase.auth.GithubAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, database, providerGitHub, providerGoogle, providerFacebook, projectStorage }