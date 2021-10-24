let usuarios = [];
function ordenarEdad(edad) {

    let objeto = {
        'nombre':document.getElementById('campoNombre').value,
        'contrasena':document.getElementById('campoContrasena').value,
        'correo':document.getElementById('campoCorreo').value,
        'confirmacioncontrasena': document.getElementById('campoconfirmarContrasena').value,
        'telefono': document.getElementById('campoTelefono').value,
        'edad':parseInt(edad)
    };
   
    usuarios.push(objeto);
   
   
    let ordenados = usuarios.sort(function(a, b){return a.edad - b.edad});
   
   
   
       return ordenados;
   }

   function verificarInicioSesion4(correo,contrasena,arreglo){

    resultado = arreglo.find( usuario => usuario.correo === correo );
    if(resultado && resultado.contrasena === contrasena) return true;
    else{
        return false;
    }

   }
   function verificarCaptcha4(respuesta){

    if(respuesta==1819){
        return true; //
    }
    else{
        return false;
    }

   }


module.exports.ordenarEdad = ordenarEdad;
module.exports.verificarInicioSesion4 = verificarInicioSesion4;
module.exports.verificarCaptcha4 = verificarCaptcha4;