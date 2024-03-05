//Este código implementa una función includes que busca un valor en un objeto similar a como lo hace el método Array.includes(). Luego,
//el código crea un objeto cities que representa una lista de ciudades y ejecuta la función includes para buscar la ciudad "Zamora".


function includes(object, value, fromIndex) {

}

//aqui va un bucle


var cities = {
    0: 'Madrid',
    1: ' Barcelona',
    2: 'Zamora',
    3: 'Caceres',
    4: 'Valencia',
    5: 'Santander',
    6: 'Bilbao',
    7: 'Sevilla',




    length: 8
}


//qué función estamos ejecutando
console.log('FUNCTION INCLUDES')

//describimos el caso 
console.log('CASE 1: return true when search for zamora on de object')


//guardamos el resultado en una variablae
var result = includes(cities, 'zamora')


//pintamos en consola el resultado
console.log({ result })

//repetir pasos anteriores
// Describimos el caso 2
console.log('CASE 2: return false when search for Tokyo on the object');

// Guardamos el resultado en una variable
var result2 = includes(cities, 'Tokyo')

// Pintamos en consola el resultado
console.log({ result2 })

// Describimos el caso 3
console.log('CASE 3: return true when search for Barcelona starting from index 1');

// Guardamos el resultado en una variable
var result3 = includes(cities, 'Barcelona', 1);

// Pintamos en consola el resultado
console.log({ result3 });


