/**Eliminar un elemento por su índice de un objeto iterable */



function removeElement(object, index) {
    var removeElement = object[index];
    for (var i = index; i < object.length - 1; i++) {
        object[i] = object[i + 1];
    }


    delete object[object.length - 1];
    object.length--;
    return removeElement;
}

console.log('CASE 1: remove audi from cars');

var cars = {
    0: 'peugeot',
    1: 'seat',
    2: 'audi',
    3: 'ford',
    4: 'bmw',
    5: 'chevrolet',
    6: 'fiat',
    length: 7
};

var car = removeElement(cars, 2);

console.log(car); // 'audi'

console.log(cars);

//imprime esto:
/*
{
    0: 'peugeot',
    1: 'seat',
    2: 'ford',
    3: 'bmw',
    4: 'chevrolet',
    5: 'fiat',
    length: 6
}
*/

