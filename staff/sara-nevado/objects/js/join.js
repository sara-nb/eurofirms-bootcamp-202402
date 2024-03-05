//La función join() en JavaScript se utiliza para unir todos los elementos de un array en una sola cadena y devolver esta cadena resultante

function joinElement(object, separador = ',') {
    //creamos un acumulador que iniciamos como un string vacio de los valores (cajita donde armamos string)
    //recorrer objeto
    //tomar cada uno de los valores y los vamos acumulando en un string
    // ''
    // i = 0 almendro(object[i]),(separator)
    // i = 1 almendro(acumulator), olivo(object[i]),(separator)
    // i = 2 almendro, olivo, roble
    // i = 3 almendro, olivo, roble, pino
    //...i = 8 almedro, olivo, etc (en el ultimo resultado no se cierra con coma)
    //esta todo liado
}

var result = ''

for (var i = =; i < object.length; i++) {
    var element = object[i]

    //condicion para no agregar la coma al principio
    if (i !== 0) {
        //acumular ls elementos
        result = result + saparator + element
    }

    else {
        //si i es 0, insertamos el primer elemento en 0
        result = element
    }

    return result

}

console.log('FUNCTION JOIN')
console.log('CASE 1:join elements from object into an string with default separator  ')


console.log('CASE 1: join elements from object into an string with default separator ","')

var tress = {
    0: 'almendro',
    1: 'olivo',
    2: 'roble',
    3: 'pino',
    4: 'abeto',
    5: 'palmera',
    6: 'manzano',
    7: 'arucaria',
    8: 'limonero',

    length: 9

    var result2 = join(trees, '-')

    console.log(trees)
    console.log(result2)



}