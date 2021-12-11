const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");

const Actor = sequelize.define("actresses", {
    // movieId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Movie,
    //         key: Id
    //     }
    // },
    // actor_id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    // },
    
    actor: {
        type: DataTypes.STRING
    }
});

module.exports = Actor;