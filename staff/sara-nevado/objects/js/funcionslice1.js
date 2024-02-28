// Comentarios:
// Esta función toma un objeto y devuelve una porción de ese objeto desde el índice de inicio hasta el índice de fin, 
// inclusivo del índice de inicio pero no del índice de fin.

function slice(object, indexStart, indexEnd) {
    var result = {}; // Se inicializa un nuevo objeto para almacenar los elementos seleccionados.

    // Se itera a través del objeto desde el índice de inicio hasta el índice de fin.
    for (var i = indexStart; i < indexEnd; i++) {
        var resultIndex = i - indexStart; // Se calcula el índice para el resultado.
        result[resultIndex] = object[i]; // Se asigna el elemento del objeto al resultado en el índice correspondiente.
    }

    result.length = indexEnd - indexStart; // Se establece la propiedad length del resultado para representar la longitud de la porción seleccionada.

    return result; // Se devuelve la porción seleccionada del objeto.
}

console.log('FUNCTION SLICE');
console.log('CASE 1: extract from object the values between index 2 and 6');
var superHeroes = {
    0: 'batman',
    1: 'superman',
    2: 'flash',
    3: 'spiderman',
    4: 'hulk', // Se corrige el símbolo de coma (,) en lugar de punto y coma (;).
    5: 'the ring',
    6: 'wonder woman',
    7: 'iron man',
    8: 'arrow'
};

var slicedSuperHeroes = slice(superHeroes, 2, 6); // Se llama a la función slice para obtener la porción de superHeroes.

console.log(superHeroes); // Se imprime el objeto original.
console.log(slicedSuperHeroes); // Se imprime la porción seleccionada del objeto.


console.log('CASE 2: extract from object the values between index 0 and 3');
var villains = {
    0: 'joker',
    1: 'lex luthor',
    2: 'green goblin',
    3: 'doctor octopus',
    4: 'thanos',
    5: 'harley quinn',
    6: 'kingpin'
};

var slicedVillains = slice(villains, 0, 3);

console.log(villains);
console.log(slicedVillains);

//En este caso, estamos extrayendo una porción del objeto villains desde el índice 0 hasta el índice 3, inclusive. El resultado esperado sería:


{ '0': 'joker', '1': 'lex luthor', '2': 'green goblin', '3': 'doctor octopus', '4': 'thanos', '5': 'harley quinn', '6': 'kingpin' }
{ '0': 'joker', '1': 'lex luthor', '2': 'green goblin', length: 3 }

//imprime los villanos originales y la porción seleccionada del objeto, mostrando solo los primeros tres villanos.