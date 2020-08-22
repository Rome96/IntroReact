 let usuario = {
   name: "Turi", // key and value = clave y  valor
   lastName: "romero",
   comidaFv: "Arroz",
   city: "Barranquilla",
   country: "Colombia",
 };

 let { name, lastName, city, country, comidaFv } = usuario; // extrayendo datos del objeto que se llama usuario,

 let element = `
    hola mi nombre es ${name} ${lastName} y vivo en 
    ${city}/${country} y mi comida favorita es el ${comidaFv}
  `;

 function datosUsuario(element) {
   return `${element} y soy frontend developer`;
 }

 let root = document.getElementById("Root");

 ReactDOM.render(datosUsuario(element), root);


 
// fn = funcion

let nombre = "Laura"; // se declara una variable que se llama nombre

function setName() { // funcion que va a retornar una variable, no recibe ningun parametro
  let name2 = "Vanessa";
  return name2;
}

// console.log(nombre)

function suma(numero1, numero2) { // fn que recibe 2 parametros y retorna la sumatoria de estos dos
  return numero1 + numero2;
}

const resta = (numero1, numero2) => { // fn que recibe 2 parametros y retorna la resta de estos dos
  return numero1 - numero2;
};

let resultadoSuma = suma(8, 8); // se llama a la fn suma, se le pasan los 2 parametros y se guarda en una variable
let resultadoResta = resta(20, 8); // se llama a la fn resta, se le pasan los 2 parametros y se guarda en una variable

console.log(resultadoSuma); // mostrando por consola el resultado de la variable, que a su vez es igual al return de la fn
