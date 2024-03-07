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

for (var i = 0; i < object.length; i++) {
    var element = object[i]

    //condicion para no agregar la coma al principio
    if (i !== 0) {
        //acumular ls elementos
        result = result + saparator + element
    }

    else {
        //si i es 0, insertamos el primer elemento (alemendro) en resultados
        result = element


        //     condicion para no agregar la coma en el final
        //      if (i !== object.length - 1) {
        //      result = result + element + separator
        //       }
        //      else {
        //      result = result + element
        //       }

        return result
    }

    console.log('FUNCTION JOIN')
    console.log('CASE 1:join elements from object into an string with default separator  ","')


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
    }

    var result = join(trees)




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

    var result = join(trees)

    console.log(trees)
    console.log(result)

    // expected result = 'Almendro,Olivo,Roble,Pino,Abeto,Palmera,Manzano,Araucaria,Limonero'

console.log('CASE 2': Join elements from object into an string with "-" separator')

var result2 = join(tress, '-')

console.log(trees)
console.log(result2)

// expected result = 'Almendro-Olivo-Roble-Pino-Abeto-Palmera-Manzano-Araucaria-Limonero'
