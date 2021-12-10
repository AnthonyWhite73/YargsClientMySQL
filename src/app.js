require("./db/connection");

const yargs = require("yargs");

const {addMovie, listMovies, deleteMovie, updateMovie} = require("./movie/movie.methods");

const app = async(args) => {
    switch (process.argv[2]){
        case "add":
            console.log("at add hit");
            addMovie({title: args.title, actor: args.actor});
            break;
        case "list":
            console.log("at list hit");
            listMovies();
            break;
        case "delete":
            console.log("at delete hit");
            deleteMovie({actor: args.actor, title: args.title});
            break;
        case "update":
            console.log("at update hit");
            updateMovie({actor: args.actor, title: args.title});
            break;
        default:
            console.log("Incorrect command");
    }
};

app(yargs.argv);