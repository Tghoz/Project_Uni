// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage, ref, uploadBytes } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZg9h2v3fL1b6FqfqwdwcqSunvuGcu2L8",
    authDomain: "projec-uni.firebaseapp.com",
    projectId: "projec-uni",
    storageBucket: "projec-uni.appspot.com",
    messagingSenderId: "37331934079",
    appId: "1:37331934079:web:ecb27ed8d45feb6372184a",
    measurementId: "G-SDLZ6N9YF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

export function uploadFile(file) {
    const storageRef = ref(storage, 'ola');
    uploadBytes(storageRef, file).then(
        snapshot => {
            console.log(snapshot)
        }
    )
}