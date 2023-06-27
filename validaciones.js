const button = document.getElementById('boton');
button.disabled = true;
function habilitarBoton(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let documento = document.getElementById('documento').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let contrasena2 = document.getElementById('contra2').value;
    let terminos = document.getElementById('terminos');
    let valorTerminos = terminos.checked;
    let des = 0;

    if(nombre == '' || apellido == '' || nacimiento == '' || documento == '' || celular == '' || email == ''){
        des++;
    }
    if( password !== contrasena2){
        des++;
        document.getElementById('mensaje-aviso').style.display = 'block';
    } else {
        document.getElementById('mensaje-aviso').style.display = 'none';
    }
    if(!valorTerminos){
        des++;
    }

   if(des===0){
    button.disabled = false;
   }else{
    button.disabled = true;
   }
}
document.getElementById('terminos').addEventListener('change',habilitarBoton);
document.getElementById('form').addEventListener('keyup',habilitarBoton);

