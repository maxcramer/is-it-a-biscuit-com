import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBnBPH616540swNCOqcMEcabFvmkE9cxlA",
    authDomain: "isitabiscuit-f224f.firebaseapp.com",
    databaseURL: "https://isitabiscuit-f224f.firebaseio.com",
    projectId: "isitabiscuit-f224f",
    storageBucket: "isitabiscuit-f224f.appspot.com",
    messagingSenderId: "841307155576",
    appId: "1:841307155576:web:df32e29a049cca4701118d",
    measurementId: "G-BCZPX166NF"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getBiscuits = async () => {
    const {docs} = await db
    .collection('biscuits')
    .get();
    const biscuits = docs.map(doc => {
        return {
            ...doc.data(),
            _id: doc.id
        }
    })
    return biscuits
}