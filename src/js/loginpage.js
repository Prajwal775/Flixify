// Import Firebase app and auth modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDmBobL8vGwF8U--AKfsGDMrqcWAlpTL9c",
  authDomain: "signinpage-2ad48.firebaseapp.com",
  databaseURL: "https://signinpage-2ad48-default-rtdb.firebaseio.com",
  projectId: "signinpage-2ad48",
  storageBucket: "signinpage-2ad48.appspot.com",
  messagingSenderId: "66187653642",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener to login form
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get user input
  const email = e.target.email.value;
  const password = e.target.password.value;

  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      alert("Login successful!");
      window.location.href = 'main_page.html';  // Redirect to main page
    })
    .catch((error) => {
      // Handle errors
      console.error(error.message);
      alert(error.message);
    });
});
