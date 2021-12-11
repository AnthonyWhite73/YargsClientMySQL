const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");

// const Movie = sequelize.define("movies", {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false        
//     },
//     actor: {
//         type: DataTypes.STRING
//     }
// });

const Movie = sequelize.define("movies", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actorId: {
        type: DataTypes.INTEGER
    }
});

module.exports = Movie;
