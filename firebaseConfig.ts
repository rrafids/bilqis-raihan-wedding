// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration object
const firebaseConfig = {
  apiKey: 'AIzaSyDMAlqu3oO6uDly2cywwQf4cBrxQUYdbzk',
  authDomain: 'bilqis-raihan-wedding.firebaseapp.com',
  databaseURL:
    'https://bilqis-raihan-wedding-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bilqis-raihan-wedding',
  storageBucket: 'bilqis-raihan-wedding.firebasestorage.app',
  messagingSenderId: '497441219785',
  appId: '1:497441219785:web:0d2b75198a3fe22aa9d918',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export default db;
