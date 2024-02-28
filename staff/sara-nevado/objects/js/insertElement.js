//Este código define una función insertElement que inserta un elemento en un objeto iterable en la posición especificada. 
//Luego, se usa esta función para insertar 'mandarina' en el índice 2 del objeto fruits y para insertar 40 en el índice 5 
//del objeto nums. Finalmente, se imprime el objeto actualizado en ambos casos.

function insertElement(object, index, value) {
    // Mover la lista a partir del índice marcado
    for (var i = object.length; i > index; i--) {
        object[i] = object[i - 1];
    }

    // Insertar el nuevo valor en la posición especificada
    object[index] = value;

    // Ajustar la longitud del objeto
    object.length++;

    return object;
}

console.log('CASO 1: insertar mandarina en el índice 2');
var fruits = {
    0: 'manzana',
    1: 'piña',
    2: 'fresa',
    3: 'tomate',
    4: 'naranja',
    5: 'plátano',
    6: 'pomelo',
    length: 7
};
insertElement(fruits, 2, 'mandarina');
console.log(fruits);

console.log('CASO 2: insertar 40 en el índice 5');

var nums = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    5: 60,
    6: 70,
    7: 80,
    length: 8
};

insertElement(nums, 5, 40);

console.log(nums);
