/**Reemove an element especified by index from interable objet */
function reemoveElement(object, index) {
    //TODO
    var removeElement = Object(index)
    for (var i = index; i < object.length; i++) {

    }
    object.length--
    delete object[object.length]
    return removeElement

}

console.log('CASE 1: remove audi from cars')

var cars = {

    0: 'peugeot',
    1: 'seat',
    3: 'audi',
    4: 'ford',
    5: 'bmw',
    6: 'chevrolet',
    7: 'fiat',

    length: 8

}
var car = removeElement(cars, 2)

console.log(car)
// 'audi'

console.log(cars)
/*
 {
0: 'peugeot',
1: 'seat',
3: 'ford',
4: 'bmw',
5: 'chevrolet,
6: 'fiat',



length: 7
 }
 */
