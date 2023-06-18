import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCr5W6jrt2pDYfC6ohNtHGufjqS7ZW8DXY',
  authDomain: 'clone-tiktok-3ef5c.firebaseapp.com',
  projectId: 'clone-tiktok-3ef5c',
  storageBucket: 'clone-tiktok-3ef5c.appspot.com',
  messagingSenderId: '692066367088',
  appId: '1:692066367088:web:fb312d6c3267b1f9e3a6b5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
