function removeElement(object, index) {
    var removedElement = object[index]; // Guarda el elemento que se va a eliminar
    for (var i = index; i < object.length - 1; i++) {
        // Mueve cada elemento hacia la izquierda para llenar el espacio del elemento eliminado
        object[i] = object[i + 1];
    }
    object.length--; // Reduce la longitud del objeto en 1
    delete object[object.length]; // Elimina la última posición, ya que se movió al índice anterior
    return removedElement; // Retorna el elemento eliminado
}

console.log('CASE 1: remove cyan from colours')

var colours = {
    0: 'orange',
    1: 'blue',
    2: 'cyan',
    3: 'yellow',
    4: 'red',
    5: 'purple',
    6: 'coral',
    7: 'magenta',

    length: 8
}

var colours = removeElement(colours, 2);



console.log(colours)
/*
0: 'orange',
1: 'blue',
2: 'yellow',
3: 'red',
4: 'purple',
5: 'coral',
6: 'magenta',

length: 7
 }