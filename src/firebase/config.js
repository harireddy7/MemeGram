import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB3wGFF8lUUNShj3BVPRYD75TYXelCaKvs',
  authDomain: 'firegramjs.firebaseapp.com',
  databaseURL: 'https://firegramjs.firebaseio.com',
  projectId: 'firegramjs',
  storageBucket: 'firegramjs.appspot.com',
  messagingSenderId: '489896884404',
  appId: '1:489896884404:web:9c094efc9508c488d1bfe1',
  measurementId: 'G-32HGFGX45K'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
