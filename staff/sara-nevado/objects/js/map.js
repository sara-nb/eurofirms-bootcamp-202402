
function map(object, callback) {

    //recorrer el objeto
    //llamo a mi callback con cada uno de los elementos  del array
    //armar un nuevo array con el valor que me retorne mi callback
    //modificar la longitud
    //retornar el nuevo array

    var result = {}
    for (var i = 0; i < object.length; i++) {
        result[i] = callback(object[i])
    }

    result.length = object.length

    return result
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
        password: 000000000,
    },

    length: 3

}

var UserNames = map(users, function (user) {

})

console.log(UserNames)
// {
// '0': Grillo
// '1': Lin
// '2': Grillito
// length: 3
//}

// var userNames = {}
// for (var i = 0; i < users.length; i++) {
//     userNames[i] = users[i].userName

//     userNames.length++
// }

// users.map(function (user){
//     return <div>
//         <h1>{user.name}</h1>
//         <h2>{user.userName}</h2>
//     </div>
// })














