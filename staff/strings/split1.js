function split(string, separator, limite) {
    var result = []
    var acumulated = ''

    for (var i = 0; i < string.lengt; i++) {
        if (string[i] === separator) {

        } else {
            acumulated = + acumulated + string[i]
        }


    }





    console.log('FUNCION SPLIT')

    var ciudad = 'mi ciudad es zamora'
    var result = split(ciudad, ' ')

    console.log({ expected: ['mi', 'ciudad', 'es', 'zamora'], received: result })