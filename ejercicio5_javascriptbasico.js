var listaDeCompras = ["leche", "azucar", "harina", "huevos", "manteca"];

listaDeCompras.push("Aceite de Girasol");

listaDeCompras.pop();

var  misPelis  =  [
    {
        titulo : "Kung Fu Panda" ,
        director : "John Stevenson" ,
        fecha : 2008 ,
    } ,
    {
        titulo : "El Sobreviviente" ,
        director : "Peter Berg" ,
        fecha : 2014 ,
    } ,
    {
        titulo : "La Cabaña" ,
        director : "Stuart Hazeldine" ,
        fecha : 2017 ,
    } ,
];

var pelisActuales = misPelis.filter(peli => peli.fecha > 2009);

var pelisDirectores = misPelis.map(peli => peli.director);

var pelisTitulo = misPelis.map(peli => peli.titulo);

var directorTitulo = pelisDirectores.concat(pelisTitulo);

var directorTitulo2 = [...pelisDirectores, ...pelisTitulo];