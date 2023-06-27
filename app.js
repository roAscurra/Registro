import { registrar  } from "./firebase.js";

const button = document.getElementById('boton');
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
        registrar(email, password, nombre, apellido, nacimiento, documento, celular);
    })
})