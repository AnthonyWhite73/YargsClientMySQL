const Movie = require("./movie.model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj)        
        return `created movie ${movieObj.title}`
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        console.log(await Movie.findAll({}));
    } catch (error) {
        console.log(error)
    }
}