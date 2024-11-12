import { auth, database } from './firebase-init.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

document.getElementById('signupForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  const email = getInputVal('email');
  const password = getInputVal('password');

  // Save user credentials in Firebase Auth and Database
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      saveMessage(user.uid, email, password);

      // Show alert
      alert('User registered successfully');

      // Clear form
      document.getElementById('signupForm').reset();
    })
    .catch((error) => {
      console.error(error.message);
      alert(error.message);
    });
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase Database
function saveMessage(userId, email, password) {
  set(ref(database, 'messages/' + userId), {
    email: email,
    password: password
  });
}
