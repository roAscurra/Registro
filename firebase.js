 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
 import { getDatabase, ref, push, update, get, set, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
 import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, onIdTokenChanged} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAl9ykuf5dTd-PqvbAziwI8kHKYpoxvm6M",
   authDomain: "auth-b1cc8.firebaseapp.com",
   projectId: "auth-b1cc8",
   storageBucket: "auth-b1cc8.appspot.com",
   messagingSenderId: "969609438622",
   appId: "1:969609438622:web:68329fc25ad159f950a28f",
   measurementId: "G-39J1H4HTWP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 const auth = getAuth(app);

 export const registrar = (email, password, nombre, apellido, fechaNacimiento, dni, celular ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario registrado!', auth);
        const user = userCredential.user;
        // Enviar el correo electrónico de verificación
        sendEmailVerification(user)
          .then(() => {
            console.log('Correo de verificación enviado');
          })
          .catch((error) => {
            console.log('Error al enviar el correo de verificación:', error);
          });
          const emailVerified = false; // Establecer inicialmente como no verificado
          const fechaCreacion = new Date().toLocaleString(); // Obtener la fecha y hora actual en formato de fecha y hora
          // Guardar los datos en la base de datos
          const userRef = ref(db, `Usuarios/${user.uid}`);
          set(userRef, {
            email: email,
            Verificado: emailVerified,
            Nombre: nombre,
            Apellido: apellido,
            Nacimiento: fechaNacimiento,
            Dni: dni,
            Celular: celular,
            Contraseña: password,
            Fecha: fechaCreacion,
          })
            .then(() => {
              console.log('Datos guardados en la base de datos');
            })
            .catch((error) => {
              console.log('Error al guardar los datos en la base de datos:', error);
            });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
      
  };