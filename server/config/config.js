const config = {
    production: {
        SECRET: process.env.SECRET,
        // mongodb+srv://asadanik:asadanik170984@bookshelf.nrsmw.mongodb.net/bookShelf?retryWrites=true&w=majority
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'SUPERSECRET',
        DATABASE: 'mongodb://localhost:27017/bookShelf'
    }
}

exports.get = function get(env){
    return config[env] || config.default;
}
