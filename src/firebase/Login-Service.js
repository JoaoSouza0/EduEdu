import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const loginApi = {
    createUser(email, password) {
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
        });
    },

    signOut() {
        return signOut(auth)
            .then(() => {
                return true;
            })
            .catch((error) => {
                return error;
            });
    },

    async checkUserIsLogged(callback) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                callback();
            } else {
                callback({ path: '/non-existing' });
            }
        });
    },

    async signIn(email, password) {
        return await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return userCredential;
            })
            .catch((err) => {
                return err;
            });
    }
};
