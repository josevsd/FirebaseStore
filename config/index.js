import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDshnIhxC_OdZJImzGHSoyHJslCxaSavEc",
    authDomain: "test-434c0.firebaseapp.com",
    projectId: "test-434c0",
    storageBucket: "test-434c0.appspot.com",
    messagingSenderId: "748641899684",
    appId: "1:748641899684:web:d6674e2970c7a32f38c231",
    measurementId: "G-Y9ESHQB988"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

