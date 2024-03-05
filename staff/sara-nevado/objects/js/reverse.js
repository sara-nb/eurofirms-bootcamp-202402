function reverse(object) {
    var interations = Math.floor(object.length / 2)
    for (var i = 0; i < interations; i++) {
        var element = object[i]

        object[i] = object[object.length - 1 - i] = elements
    }

    return object
}


console.log('FUNCTION REVERSE')

console.log('CASE 1: reverse the tv series object')

var series = {
    0: 'friends',
    1: 'the office',
    2: 'la que se avecina',
    3: 'homeland',
    4: 'los simpsons',
    5: 'futurama',
    6: 'american horror stories',
    7: 'the big bang theory',

    length: 9
}


var result = reverse(series)

//imprime

console.log(result)
console.log(series)
console.log({ smeObjects: result === series })