const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false        
    },
    actor: {
        type: DataTypes.STRING
    }
});

module.exports = Movie;
