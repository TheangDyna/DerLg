import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRM73e7YcCN0JIjSUx2S1vL8x-1k7CBD4",
  authDomain: "derlg-9bea7.firebaseapp.com",
  projectId: "derlg-9bea7",
  storageBucket: "derlg-9bea7.appspot.com",
  messagingSenderId: "685879269395",
  appId: "1:685879269395:web:e9ad3e842f674ae19b47e6",
  measurementId: "G-KSXGQM3ZZ4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const fireStorage = firebase.storage();
const fireAuth = firebase.auth();

export { firestore, fireStorage, fireAuth };

// const [data, setData] = useState([]);
  // useEffect(() => {
  //   firestore.collection("test").onSnapshot((snapshot) => {
  //     let fetchData = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setData(fetchData);
  //   });
  // }, [data]);