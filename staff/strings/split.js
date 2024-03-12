function split(strin, separator, limit = Infinity) {

    var result = []
    var acumulatedString = ''


    for (var i = 0; < string.length && result.length < limit; i++) {


        if (character === separator) {
            result[result.length] = acumulatedString

            acumulatedString = ''
        }



        else {
            acumulatedString += character
        }

    }

    if (result.length < limit) {
        result[result.length] = acumulatedString
    }

    return result


}

console.log('FUNCION SPLIT')

console.log('CASE 1: split the string with " " separator')

var hello = 'Hello world to the people'

var result = split(hello, ' ', 2)

console.log({ expected: ['Hello', 'world'], received: result })