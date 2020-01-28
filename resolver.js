const users = [
    {id: 1, name: "Marcos", email: "marcospaulo.silva2009@gmail.com"},
    {id: 2, name: "João", email: "joão@gmail.com"}
];
module.exports = {
    Query: {
        users: () => users,
        user: () => users[1],
    },
    Mutation: {
        createUser: () => users[0]
    }
};