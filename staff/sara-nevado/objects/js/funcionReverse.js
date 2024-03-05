function Reverse(object) {
    var objectCopu = { ...object }

    for (var i = 0; < object.length; i++) {
        object[i] = objectCopy[object.length - 1 - i]

    }

    return object

}

console.log('FUNCION REVERSE')

console.log('CASE 1: reverse the tv series object')


var series = {
    0: 'friends',
    1: 'the office',
    2: 'la que se avecina',
    3: 'homeland',
    4: 'los simpson',
    5: 'futurama',
    6: 'samerican horror stories',
    7: 'a',


    length 8






}

var result = Reverse(series)
console.log(result)
console.log(series)
console.log({ sameObjects: Result === series })


var nums = { 0: 10, 1: 20, 2: 30 }
var nums2 = { 0: 10, 1: 20, 3: 30 }