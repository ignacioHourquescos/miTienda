import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
      {
            apiKey: "AIzaSyA96-BTt-TjfjR28_lWV_BLoLAyFFdTofQ",
            authDomain: "mitiendapersonal-5c138.firebaseapp.com",
            projectId: "mitiendapersonal-5c138",
            storageBucket: "mitiendapersonal-5c138.appspot.com",
            messagingSenderId: "832944926302",
            appId: "1:832944926302:web:48f4efab0330e4d159cecf",
            measurementId: "G-GC9MVJ56GF"
      }
)

export const getFirebase =()=>{
      return app;
}

export const getFirestore =() =>{
      return firebase.firestore();
}