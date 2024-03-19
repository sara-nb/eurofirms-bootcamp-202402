// usando el reduce, suma todos los numeros del array 



var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]


var initialValue = 0;

var sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
)

console.log(sumWithInitial);
//  128


//------------------------------------------------

// multiplica todos los numeros del array 

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

var res = numbers2.reduce(function (acumulador, valorActual) {
    acumulador = acumulador * valorActual;
    return acumulador;
})

console.log(res);

//res: 660441600
//------------------------------------------------

//  suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21];

var initialValue = 10;

var sumWithInitial = numbers3.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
)

console.log(sumWithInitial)

//res: 138

//------------------------------------------------

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']

var initialValue = 'hola';

var sumWithInitial = strings.reduce(
    (accumulator, currentValue) => accumulator + '-' + currentValue,
    initialValue
)

console.log(sumWithInitial)


// "hola-mundo-pepito-como-va todo"


//------------------------------------------------

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]


var usersWithPe = users.filter(user => user.name.startsWith('pe'));

console.log(usersWithPe);






//------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]
