import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import settings from '../firebase'

firebase.initializeApp(settings.config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const defaultSettings = {timestampsInSnapshots: true};
db.settings(defaultSettings);

// firebase collections
const doorsCollection = db.collection('doors');

export {
    db,
    auth,
    currentUser,
    doorsCollection,
}
