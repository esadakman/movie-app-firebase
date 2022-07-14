import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7ddLh-26U04GhkVJQw-Li8WBxvtOo9Xw",
  authDomain: "movie-app-a2739.firebaseapp.com",
  projectId: "movie-app-a2739",
  storageBucket: "movie-app-a2739.appspot.com",
  messagingSenderId: "1028417067895",
  appId: "1:1028417067895:web:6cf95d1aa288acbe09df72",
  measurementId: "G-Z08PHP8WFN",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
