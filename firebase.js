import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAW15tfu2fe7lamLSAqPonTJt90KWyS_A7',
    authDomain: 'instagram-clone.firebaseapp.com',
    projectId: 'instagram',
    storageBucket: 'instagram-clone.appspot.com',
    messagingSenderId: '377685478866',
    appId: '1:377685478866:web:d20139a9a4c3a05b75cc0b',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() 

export default firebase