import { initializeApp } from 'firebase/app';

import { getFirestore, collection } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyDNsdnqSnW81ldumoEmsWyG5WvBHF494aQ',
    authDomain: 'eduedu-17192.firebaseapp.com',
    projectId: 'eduedu-17192',
    storageBucket: 'eduedu-17192.appspot.com',
    messagingSenderId: '330939258543',
    appId: '1:330939258543:web:f94cd796f1e5615c88a65a',
    measurementId: 'G-9GJ4DK0CGZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const student = collection(db, 'Students');
