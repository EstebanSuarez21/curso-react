import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBrYyF-1VJcgy70eSrEwea1d4RXyLBEYIA",
    authDomain: "gamer-zone-b5960.firebaseapp.com",
    projectId: "gamer-zone-b5960",
    storageBucket: "gamer-zone-b5960.appspot.com",
    messagingSenderId: "627625343027",
    appId: "1:627625343027:web:189f14679b496d328a0b46"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)