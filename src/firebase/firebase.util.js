import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDk9v33WQc0g99_5qL1Jb8R_rryzfZs8k",
  authDomain: "roadry-cloud.firebaseapp.com",
  databaseURL: "https://roadry-cloud.firebaseio.com",
  projectId: "roadry-cloud",
  storageBucket: "roadry-cloud.appspot.com",
  messagingSenderId: "29925042270",
  appId: "1:29925042270:web:edf0a2bc785e109aa22ccf"
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const database = firebase.database();

// export const fetchAccidentReport = () => {
//   return firestore.collection("light").onSnapshot({ includeMetadataChanges: true }, (docs) => {
//     console.log(docs);
//   })
// }
