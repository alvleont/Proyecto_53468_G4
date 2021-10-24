let usuarios=[];

function recibirEdad() {
    let edad;
    edad = prompt("Digite su edad");
    return edad;
}

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

function promedioEdad(args) {
    
            if(args.length>1){
            tamano = args.length;
            promedio = args.reduce((total, next) => total + (next.edad/tamano));
            return 18;
            }
            else{
                return parseInt(args[0].edad);
            }


}

module.exports.recibirEdad = recibirEdad;
module.exports.ordenarEdad = ordenarEdad;
module.exports.promedioEdad = promedioEdad;