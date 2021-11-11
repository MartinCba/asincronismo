// traemos nuestra funcion que llamara a la API
const fetchData = require("../utils/fetchData");
// el link de la API
const API = "https://rickandmortyapi.com/api/character/";

// nuestra funcion asíncrona, le devemos pasar la api
const anotherFunction = async (url_api) => {
  // el TryCatch, para que se maneje de manera sincrónica
  try {
    // esperamos que se aga la primera llamada
    const data = await fetchData(url_api);

    // esperamos que se aga la segunda llamada
    const character = await fetchData(`${API}${data.results[0].id}`);

    // esperamos que se aga la tercera llamada
    const origin = await fetchData(character.origin.url);

    // imprimimos las datos de la api
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    // si hay algun error lo mostramos
    console.error(error);
  }
};

console.log("before");
// mandamos a llamar nuestra api
anotherFunction(API);
console.log("After");

//-------CONCLUSIONES--------------//
/*------Callback------
---ventaja

Nos permite garantizar que una funcion recibe otra funcion y se cargara sin nigun problema
Es fácil de implementar
Son universales (corren en cualquier navegador) desventaja
---Desventaja

Flujo poco intuitivo
Manejo de errores tedioso por no poder manejar excepciones

-----------Promesas---------------

---Ventaja

facilmente enlasable
es poderoso, nos permite una gran capacidad de trabajar con asincronismo
---Desventaja

no maneja excepciones, sino que tiene un atch al final para capturar el error
propenso a errores si no retornamos el siguiente llamado requiere un polyfill (hay que transpilar el cdiogo para que sea funional en todos los navegadores)

--------Async y await-----------

---Ventajas

podemos usar excepciones (try/catch)
son más fáciles de leer y de comprender
se puede esperar hasta que algo suceda
---Desventajas

tenemos que esperar por cada uno de los llamado
requerimos de un polyfill por lo que infla nuestra construcción */
