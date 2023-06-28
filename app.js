import { registrar, verificarUsuarioEnUso  } from "./firebase.js";
const button = document.getElementById('boton');
const modal = document.getElementById('ventana');
const modal2 = document.getElementById('ventana2');
const cerrarModal2 = document.getElementById('cerrarVentana2');
const cerrarModal = document.getElementById('cerrarVentana');
const form = document.getElementById('form');
window.addEventListener('DOMContentLoaded',()=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let nacimiento = document.getElementById('nacimiento').value;
        let documento = document.getElementById('documento').value;
        let celular = document.getElementById('celular').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
            // Verificar si el usuario ya está en uso
        verificarUsuarioEnUso(email)
        .then((usuarioEnUso) => {
        if (usuarioEnUso) {
            // El usuario ya está en uso, muestra un aviso o realiza alguna acción
            console.log('El usuario ya está en uso');
            document.getElementById('aviso-correo').style.display = 'block';
        } else {
            document.getElementById('aviso-correo').style.display = 'none';
            // El usuario no está en uso, procede con el registro
            registrar(email, password, nombre, apellido, nacimiento, documento, celular);
            modal.showModal();
            cerrarModal.addEventListener("click",()=>{
                modal.close();
                modal2.showModal()
                cerrarModal2.addEventListener("click", () => {
                    button.disabled = true;
                    modal2.close();
                })
            })
            form.reset();
        }
        })
        .catch((error) => {
        console.log('Error al verificar el usuario:', error);
        });
    })
})