const Movie = require("./movie.model");
const Actor = require("./actor.model");

exports.addMovie = async (movieObj) => {
    console.log("movieObj: ", movieObj);
    try {
        await Movie.sync({alter: true});
        const actor  = await Actor.findOne({where: {actor: movieObj.actor}});
        console.log("actor", Actor);
        await Movie.create({title: movieObj.title, actorId: actor.id});
        
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
        console.log(`updateMovie ${movieObj.actorId} ${movieObj.title}`);
        const actor = await Actor.findOne({where: {actor: movieObj.actor}});
        await Movie.update(
            { actorId: actor.id},
            { where: { title: movieObj.title} }
        );
        console.log(`Successfully updated actor to ${movieObj.actor} in film ${movieObj.title}`);
    } catch (error) {
        console.log(error);
    }
};

exports.addActor = async (actorObj) => {
    try {        
        await Actor.sync();
        console.log(`addActor ${actorObj.actor}`);
        await Actor.create(actorObj);
        console.log("at 2 hit");
        console.log( `created actor ${actorObj.actor}`)
    } catch (error) {
        console.log(error);
    }
};

exports.listActors = async () => {
    try {
        await Actor.sync();
        console.log(await Actor.findAll({}));
    } catch (error) {
        console.log(error);
    }
};