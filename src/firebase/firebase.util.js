import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBTqLeU5ZCWaLgFpRDlf09afCM8RGiKHCE",
  authDomain: "envyuser-f1981.firebaseapp.com",
  databaseURL: "https://envyuser-f1981.firebaseio.com",
  projectId: "envyuser-f1981",
  storageBucket: "envyuser-f1981.appspot.com",
  messagingSenderId: "534607337907",
  appId: "1:534607337907:web:c72e81d90da358496753c6"
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();

export const fetchAccidentReport = () => {
  return firestore.collection("light").onSnapshot({ includeMetadataChanges: true }, (docs) => {
    console.log(docs);
  })
}
