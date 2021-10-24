function validar_nombre(string) {
       var valido = true;
    if (string.length > 4 && string.length <= 30) {
        var iChars = "@!_-/0123456789";
        for (var i = 0; i < string.length; i++) {

            if (iChars.indexOf(string.charAt(i)) != -1) {
                valido = false;
            }

        }
    }
    else{
        valido = false;
    }

    return valido;

}

function validar_contrasenas(string1,string2) {

    var valido = true;
    if(string1.valueOf() != string2.valueOf())
    {
        valido = false;
    }

    return valido;

}

module.exports.validar_nombre = validar_nombre;
module.exports.validar_contrasenas = validar_contrasenas;