//La función indexOf() en JavaScript se utiliza para buscar la primera aparición de un elemento dentro de un array y devuelve el índice de esa aparición. 
//Si el elemento no se encuentra en el array, la función devuelve -1.



function indexOf(cityname, cityarray)
return cityArray.indexOf(cityName); {
}

var cities = {
    0: 'Madrid',
    1: 'Barcelona',
    2: 'Zamora',
    3: 'Caceres',
    4: 'Valencia',
    5: 'Santander',
    6: 'Bilbao',
    7: 'Sevilla',


    var index1 = indexOf('Valencia', cities),
    console.log(index1); // Output: 4


    var index2 = indexOf('Tokio', cities);
    console.log(index2); // Output: -1

//La función indexOf toma dos argumentos: cityName y cityArray. Devuelve el índice del cityName en el cityArray usando el método indexOf.
//Se define un array llamado cities con nombres de ciudades.
//Luego, se llama a la función indexOf dos veces con diferentes argumentos ('Valencia' y 'Tokio') y se imprime el resultado en la consola.
