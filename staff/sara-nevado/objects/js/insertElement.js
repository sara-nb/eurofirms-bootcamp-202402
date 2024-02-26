function insertElement(object, index, value) {

    //mover la lista a partir del indice marcado
    //(seria el index)
    for (var i = 0; i < object.length; i++) {



    }

    //tenemos que poner mandarina (value) en la posicion 2 (index)
    //ajustar la longitud del objeto 
    //0: 'manzana',
    //1: 'piña',
    //2: 'mandarina'
    //3: 'fresa',
    //4: 'tomate',
    //5: 'naranja',
    //6: 'plantano',
    //7: 'pomelo',
    //length: 8

}
console.log('CASE 1: insert mandarina in index 2')
var fruits = {

    0: 'manzana',
    1: 'piña',
    2: 'fresa',
    3: 'tomate',
    4: 'naranja',
    5: 'plantano',
    6: 'pomelo',

    length: 7
}
insertElement(fruits, 2, 'mandarina')
console.log(fruits)

console.log('CASE 2: insert 40 in index 5')

var nums = {

    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    5: 60,
    6: 70,
    7: 80;

    length: 7
}

insertElement(nums, 5, 40)

console.log(nums)