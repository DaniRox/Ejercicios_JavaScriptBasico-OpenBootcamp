var misDatos = {
    nombre : "Daniela",
    apellido : "Escobar",
    edad : 36,
    altura : 1.64,
    esDesarrollador : true
}

var miEdad = misDatos.edad;

var info = [
    misDatos,
    {
        nombre : "Pablo",
        apellido : "Zaracho",
        edad : 43,
        altura : 1.84,
        eresDesarrollador : false,
    },
    {
        nombre : "Martin",
        apellido : "Escobar",
        edad : 32,
        altura : 1.86,
        esDesarrollador : false
    }
];


var menorAMayor = info.sort(function(a, b) {
    return a.edad - b.edad;
})
