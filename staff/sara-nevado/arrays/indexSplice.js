var numbers = [1, 4, 7, 9, 3, 5, 2, 3, 6, 8]

users.splice(index, 3)
//borra la posición

var index = numbers.indexOf(5)
//devuelve el índice (5)


//________________________________________
// usando el indexOf, encuenta el numero 30
// ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60]

var index = numbers.indexOf(30)
if (index !== -1)
    numbers.splice(index, 1)

console.log(numbers)

//--------------------------------------------------

// usando el findIndex encuenta al usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var indexUser = users.findIndex(user => user.id === 'g48ge5g');
if (indexUser !== -1) {
    users.splice(indexUser, 1);
}

console.log(users)
//--------------------------------------------------

// borra todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

var index = numbers2.indexOf()

// borra todos los usuarios cuyo nombre empiece con 'pe'

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var filteredUsers = users.filter(function (user) {
    return !user.name.startsWith('pe');
});

console.log(filteredUsers);



