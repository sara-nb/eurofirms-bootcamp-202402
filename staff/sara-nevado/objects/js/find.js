function find(object, callback)
//recorrer objeto
//pasar a la callback cada uno de los elementos y guardar su respuesta en una variable
//evaluar respuesta de la callback para saber si el elemento pasa o no el test
//en el caso de cumplirse, devolver ese elemeto
//en el caso de que ningun eleme to cumpla la condicion, retornamos undefined

for (var i = 0; <object.length; i++) {
    var callbackResult = callback(objectk[i])

    if (callbackResult) {
        return object[i]
    }
}

}

console.log(FUNCTION FIND')
console.log('CASE 1: find user by username "Grillito"')

var users = {
    '0': {
        name: 'Pepito',
        userName: 'Grillo',
        password: '000000000',
    },

    '2': {
        name: 'Wendy',
        userName: 'Lin',
        password: '000000000',
    },

    '3': {
        name: 'Grillo',
        userName: 'grillito',
        password: 000000000,
    },

    length: 3

}

var result = find(users, findCallback) 

console log(result)

// {
// name: 'Wendy',
// userName: 'Lin',
// password: '000000000',
// }