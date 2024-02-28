//Función mergeSort(arr):función principal del algoritmo de ordenamiento Merge Sort.
//Toma un array arr como entrada.
//Verifica si la longitud del array es menor que 2. Si es así, el array ya está ordenado y se devuelve tal como está.
//Divide el array en dos partes aproximadamente iguales, utilizando Math.floor(arr.length / 2).
//Llama recursivamente a mergeSort para ordenar cada mitad del array.
//Finalmente, llama a la función merge para combinar las dos mitades ordenadas.
//Función merge(left, right):

//sta función toma dos arrays ordenados, left y right, como entrada.
//Inicializa un array vacío result para almacenar el resultado de combinar los dos arrays.
//Inicializa dos índices, il y ir, que rastrean la posición actual en los arrays left y right respectivamente.
//En un bucle while, compara los elementos en las posiciones il e ir de los arrays left y right.
//Si el elemento en left[il] es menor que el elemento en right[ir], lo añade a result y aumenta il. De lo contrario, añade el elemento de right[ir] a result y aumenta ir.
//Cuando se alcanza el final de uno de los arrays, añade los elementos restantes del otro array a result.
//Retorna result, que es el array combinado y ordenado.
//Llamada y prueba:

//Se define un array arr con algunos valores desordenados.
//Se llama a la función mergeSort(arr) para ordenar el array.
//El resultado ordenado se imprime en la consola usando console.log.
//En resumen, el código divide recursivamente el array original en mitades más pequeñas, ordena esas mitades y luego las combina de manera ordenada para producir el resultado final, utilizando el algoritmo de Merge Sort.











function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var middle = Math.floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

var arr = [1, 5, 2, 7];
console.log(mergeSort(arr));
