import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_NAME_APIKEY,
  authDomain: import.meta.env.VITE_NAME_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_NAME_PROJECT_ID,
  storageBucket: import.meta.env.VITE_NAME_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_NAME_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_NAME_APPID,
}

export const firebaseApp = initializeApp(firebaseConfig)