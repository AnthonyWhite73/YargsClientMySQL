const Movie = require("./movie.model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj);
        return `created movie ${movieObj.title}`
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        await Movie.sync();
        console.log(await Movie.findAll({}));
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        console.log("deleteMovie");
        console.log(`deleteMovie ${movieObj.actor} ${movieObj.title}`);
        await Movie.destroy(
            { where: { title: movieObj.title} }
        );
        console.log(`Successfully deleted ${movieObj.actor} from film ${movieObj.title}`);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try{
        console.log("updateMovie");        
        console.log(`updateMovie ${movieObj.actor} ${movieObj.title}`);
        await Movie.update(
            { actor: movieObj.actor},
            { where: { title: movieObj.title} }
        );
        console.log(`Successfully updated actor to ${movieObj.actor} in film ${movieObj.title}`);
    } catch (error) {
        console.log(error);
    }
};