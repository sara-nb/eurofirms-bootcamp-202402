
function find(object, callback) {
    //* obtener el índice del elemento que cumple la condición
    var index = Array.from({ length: object.length }, (_, i) => i).findIndex(i => callback(object[i]));

    //* verificar si se encontró un índice válido
    if (index !== -1) {
        //* devolver el índice encontrado
        return index;
    } else {
        //* si no se encontró ningún elemento que cumpla la condición, retornar -1
        return -1;
    }
}

console.log('FUNCTION FINDINDEX')

console.log('CASE 1: find index of user by username "Grillo12"')

var users = {
    '0': {
        name: 'Pepito',
        userName: 'Pepito12',
        password: '123123123'
    },
    '1': {
        name: 'Grillo',
        userName: 'Grillo12',
        password: '123123123'
    },
    '2': {
        name: 'Wendy',
        userName: 'Wendy12',
        password: '123123123'
    },
    length: 3
}

var findIndexCallback = function (user) {
    return user.userName === 'Grillo12';
}

var resultIndex = findIndex(users, findIndexCallback);

console.log(resultIndex); // 1