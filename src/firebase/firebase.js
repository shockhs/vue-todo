import firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import config from './firebaseConfig';


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
