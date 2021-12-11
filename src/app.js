require("./db/connection");

const yargs = require("yargs");

const {addMovie, listMovies, deleteMovie, updateMovie, listActors, addActor} = require("./movie/movie.methods");

const app = async(args) => {
    switch (process.argv[2]){
        case "add":
            console.log("at add hit");
            // addMovie({title: args.title, actor: args.actor});
            addMovie(args);
            break;
        case "list":
            console.log("at list hit");
            listMovies();
            break;
        case "delete":
            console.log("at delete hit");
            deleteMovie({title: args.title});
            break;
        case "update":
            console.log("at update hit");
            //updateMovie({actor: args.actor, title: args.title});
            updateMovie(args);
            break;
        case "addActor":            
            console.log("at addActor hit");
            addActor({actor_id: args.actor_id ,actor: args.actor});
            break;
        case "listActors":
            console.log("at listActors hit");
            listActors();
            break;
        default:
            console.log("By your command!");
    }
};

app(yargs.argv);