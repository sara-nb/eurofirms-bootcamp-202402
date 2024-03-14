


var numbers = [10, 20, 30, 40, 50];
var numbersx2 = numbers.map(function (x) {
    return x * 2;
})
console.log(numbersx2)
//[20, 40, 60, 80, 100]

//usando el map, crea un nevo array, con cada uno de los numeros multiplicando por 2

//____________________________________________________________________________


var strings = ['hola', 'mundo', 'a', 'todos'];
var stringsx2 = strings.map(function (x) {
    return stringsx2;
})
console.log(stringsx2)


//['holahola', 'mundomundo', 'aa', 'todostodos']


//_______________________________________________________________________________

//crea un nuevo array, con la longitud de cada uno de los strings ?????

var numbers2 = [12, 40, 6, 7, 24]

//_____________________________________________________

//crea un nuevo array que contenga los emails de los usuarios como string


var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@wendy.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pinocho@ocho.com' }
]

var emailLengths = users.map(function (user) {
    return user.email.length;
})


console.log(emailLengths)

//[17, 14, 13, 15]



//_______________________________________________________________

//crea un nuevo array que contenga la ciudad de los usuarios como string

var city = users2.map(function (user) {
    return user.information.city;
})

console.log(city)


var users2 = [
    {
        name: 'pepito', information: {
            city: 'Madrid',
            number: '11111111'
        }
    },
    {
        name: 'wendy', information: {
            city: 'Barcelona',
            number: '22222222'
        }
    },
    {
        name: 'peter', information: {
            city: 'Sevilla',
            number: '33333333'
        }
    },
    {
        name: 'pinocho', information: {
            city: 'valencia',
            number: '44444444'

        }
    }

]
