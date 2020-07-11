import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCg8ZuSbh0bzGCja3VmG6v6l2CULkVHwbY",
    authDomain: "ubhartaabharat.firebaseapp.com",
    databaseURL: "https://ubhartaabharat.firebaseio.com",
    projectId: "ubhartaabharat",
    storageBucket: "ubhartaabharat.appspot.com",
    messagingSenderId: "384922988978",
    appId: "1:384922988978:web:5e814dca9f18ad14df34ab",
    measurementId: "G-H6SYGH52K7"
}

firebase.initializeApp(firebaseConfig)
// firebase.firestore().settings({ timestampsInSnapshots : true })
const storage = firebase.storage()
//console.log(storage)

export {
    storage, firebase as default
} 