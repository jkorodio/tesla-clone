import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDxOlYR3LvRIlPbPbMykvlgSSyFAWnGvrY',
  authDomain: 'tesla-clone-1c6f6.firebaseapp.com',
  projectId: 'tesla-clone-1c6f6',
  storageBucket: 'tesla-clone-1c6f6.appspot.com',
  messagingSenderId: '1018839489904',
  appId: '1:1018839489904:web:7deb34bbc0c6cc871ec3b5'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
