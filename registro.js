import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC_I3bIIk0nfGvuDSK0nZ_JcI7ywTP_Rd8",
  authDomain: "talentchek-t.firebaseapp.com",
  projectId: "talentchek-t",
  storageBucket: "talentchek-t.firebasestorage.app",
  messagingSenderId: "546382065526",
  appId: "1:546382065526:web:249deb0e90ff9b358bd457",
  measurementId: "G-WCG5D1N4ZJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registro.addEventListener('click', (e) => {
  var email = document.getElementById('emailreg').value;
  var password = document.getElementById('passwordreg').value;

  createUserWithEmailAndPassword(auth, email, password).then(cred =>{
    alert("Usuario Creado");
    auth.signOut(); 
    sendEmailVerification(auth.currentUser).then(() =>{
      alert('Se ha enviado un correo de verificación');
    });
  }).catch(error => {
    const errorCode = error.code;

    if (errorCode == 'auth/email-already-in-use') 
      alert('El correo ya está en uso');
    else if(errorCode == 'auth/invalid-email')
      alert('El correo no es válido');
    else if(errorCode == 'auth/weak-password')
      alert('La contraseña debe tener al menos 6 caracteres');
  });
});
