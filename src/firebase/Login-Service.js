import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const loginApi = {
    register(email, password) {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        });
    },

    signOut() {
        signOut(auth)
            .then(() => {
                this.$route.push({ name: '/' });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    
    checkUserIsLoggerd(callBack) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('you Are Logged', user);
                callBack();
            } else {
                callBack({ name: 'NotFound' });
            }
        });
    },

    signIn(email, password) {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('Voce Logou: ', userCredential);
            // ...
        });
    }
};
