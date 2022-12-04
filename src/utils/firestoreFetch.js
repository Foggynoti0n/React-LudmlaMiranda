import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (id) => {
    let info;
    if (id) {
        info = query(collection(db, "Data"), where('categoria', '==', id));
    } else {
        info = query(collection(db, "Data"), orderBy('title'));
    }
    const querySnapshot = await getDocs(info);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "Data", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      
      console.log("No such document!");
    }
}