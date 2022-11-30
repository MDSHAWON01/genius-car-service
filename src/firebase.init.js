// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBy6L_kyUYh3VwvC9-x9paSL9OcyIhCmAM",
    authDomain: "genius-car-service-bd.firebaseapp.com",
    projectId: "genius-car-service-bd",
    storageBucket: "genius-car-service-bd.appspot.com",
    messagingSenderId: "471489549469",
    appId: "1:471489549469:web:7da3deedf59f03b79e7074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;