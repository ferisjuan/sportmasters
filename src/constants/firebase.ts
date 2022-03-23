export const FIREBASE_CONFIG = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
    projectId: import.meta.env.VITE_CLOUD_FIRESTORE_PROJECT_ID || '',
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET || '',
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || '',
    appId: import.meta.env.VITE_APP_ID || '',
    measurementId: import.meta.env.VITE_MEASUREMENT_ID || '',
}
