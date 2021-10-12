import { db, storage } from './index';
import { collection, setDoc, doc, getDocs, query, where, orderBy, startAt, endAt } from 'firebase/firestore/lite';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
/* export const student = collection(db, 'Students');
 */
function getCollection(collectionName) {
    return collection(db, collectionName);
}
export const api = {
    async postCollection(collectioName, payload) {
        try {
            await setDoc(doc(db, collectioName, payload.id), payload); /*(db, 'Students',{}) */
        } catch (e) {
            console.log(e);
        }
    },
    async getFilteredCollectionData(collectioName, field, logicalOperator, condition) {
        try {
            const collection = getCollection(collectioName);
            const q = query(collection, where(field, logicalOperator, condition));
            const data = await getDocs(q);
            const dataArray = data.docs.map((item) => {
                return item.data();
            });
            return dataArray;
        } catch (e) {
            console.log(e);
        }
    },
    async getOrderedCollectionData(collectioName, field, start, end) {
        try {
            const collection = getCollection(collectioName);
            const q = query(collection, orderBy(field), startAt(start), endAt(end));
            const data = await getDocs(q);
            const dataArray = data.docs.map((item) => {
                return item.data();
            });
            return dataArray;
        } catch (e) {
            console.log(e);
        }
    },
    async getAllCollectionData(collectioName) {
        try {
            const collection = getCollection(collectioName);
            const data = await getDocs(collection);
            return data;
        } catch (e) {
            console.log(e);
        }
    },
    async uploadImageStorage(file, id) {
        const storageChild = ref(storage, `image/${file.name}_${id}`);
        // 'file' comes from the Blob or File API
        uploadBytes(storageChild, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
        });
    },
    async downloadImageStorage(path) {
        const starsRef = ref(storage, path); /* 'image/login_bg.png' */
        const urlImg = await getDownloadURL(starsRef);

        return String(urlImg);
    }
};
