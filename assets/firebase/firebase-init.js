import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmBobL8vGwF8U--AKfsGDMrqcWAlpTL9c",
  authDomain: "signinpage-2ad48.firebaseapp.com",
  databaseURL: "https://signinpage-2ad48-default-rtdb.firebaseio.com",
  projectId: "signinpage-2ad48",
  storageBucket: "signinpage-2ad48.appspot.com",
  messagingSenderId: "66187653642",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
