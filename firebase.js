 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
 import { getDatabase, ref, push, update, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
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

 export const registrar = (email, password) => {
    createUserWithEmailAndPassword(auth,nombre, apellido, fechaNacimiento, dni, celular, email, password)
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
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    // Listener de cambios en el estado del token de identificación
    onIdTokenChanged(auth, (user) => {
      if (user) {
        user.getIdTokenResult()
          .then((idTokenResult) => {
            const emailVerified = idTokenResult.claims.email_verified;
            // Guardar el estado de verificación en la base de datos
            const userRef = ref(db, `Usuarios/${user.uid}`);
            update(userRef, {  
              Verificado: emailVerified,
              Email: email,            
              Nombre: nombre,
              Apellido: apellido,
              Nacimiento: fechaNacimiento,
              Dni: dni,
              Celular: celular,
            })
              .then(() => {
                console.log('Estado de verificación actualizado en la base de datos');
              })
              .catch((error) => {
                console.log('Error al actualizar el estado de verificación en la base de datos:', error);
              });
          })
          .catch((error) => {
            console.log('Error al obtener el estado de verificación del correo electrónico:', error);
          });
      }
    });
  };