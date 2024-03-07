function forEarch(object, callback) {
    for (var i = 0; i < object.length; i++) {

    }
}
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
        password: '000000000',
    },

    length: 3
}

var printUserName = function (user) {
    console.log(user.name + ' ' + user.userName)
}

forEach(users, printUserName)