const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { Cards } from '../types/index';

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const addMusic = async (FormData: Omit<Cards, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'music'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getMusic = async () => {
	const querySnapshot = await getDocs(collection(db, 'music'));
	const Arraysongs: Array<Cards> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs; }