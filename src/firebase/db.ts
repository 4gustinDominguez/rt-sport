import { db, firestore } from './firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

// User API
export const doCreateUser = (id: string, username: string, email: string) =>
  db.ref(`users/${id}`).set({
    email,
    username,
  });

export const onceGetUsers = () => db.ref('users').once('value');

export const listTournaments = () => useCollection(firestore.collection('tournaments'), {
  snapshotListenOptions: { includeMetadataChanges: true },
});;

//export const listTournaments = (callback: (snaphost: any) => void) => firestore.collection('tournaments').onSnapshot(callback);
