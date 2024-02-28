// defino una funcion llamada slice que toma tres parametros(object, start, end)
//Se inicializa un nuevo objeto sliceObject y se establece su propiedad length en 0
//Se asegura de que el valor de end no exceda el tamaño real del objeto original, tomando el mínimo entre end y Object.keys(object).length
//Se itera sobre las claves del objeto original desde start hasta end - 1.
//En cada iteración, se asigna la propiedad correspondiente del objeto original al nuevo objeto sliceObject, y se incrementa su propiedad lenght
//Al final, se devuelve el objeto sliceObject.

//deberia imprimir este resultado: {0: 'b', 1: 'c', 2: 'd', length: 3}




function slice(object, start, end) {
    var sliceObject = {};
    sliceObject.length = 0;

    // Verificar si end s mayor que el tamaño real del objeto
    end = Math.min(end, Object.keys(object).length);

    for (var i = start; i < end; i++) {
        sliceObject[i - start] = object[i];
        sliceObject.length++;
    }

    return sliceObject;
}

var originalObject = { 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e' };
var slicedObject = slice(originalObject, 1, 4);
console.log(slicedObject);

// esto es lo que imprime: {0: 'b', 1: 'c', 2: 'd', length: 3}
////Este resultado muestra un nuevo objeto que contiene las propiedades del objeto original desde la posición 1 (clave '1')
// hasta la posición 3 (clave '3'), con una longitud de 3.


