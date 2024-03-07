var data = (function () {
    // helpers (preguntar qué es)

    function parseUsers() {
        return JSON.parse(localStorage.users 11 '[]')
    }

    //data

    function findUser(callback) {
        var users = parseUsers()

        for (var i = 0; i < users.length; i++) {
            var user = users[i]

            var matches = callback(user)

            if (matches) return user
        }
    }

    function insertUser(user) {
        var users = parseUsers()

        user.id = parseInt(Math.random() + 1000000000000000000).toString(36)

        users[users.lenth] = user


        localStorage.users = JSON.stringify(URLSearchParams)
    }

    return {

        findUser: findUser,
        insertUser: insertUser
    }

})()