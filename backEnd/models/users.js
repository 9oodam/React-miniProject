const Sequelize = require("sequelize");

class User extends Sequelize.Model{
    static init(seq) {
        return super.init({
            id : {
                type : Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true
            },
            user_id : {
                type : Sequelize.STRING(20),
                allowNull : false
            },
            user_pw : {
                type : Sequelize.STRING(200),
                allowNull : false
            }
        },{
            sequelize : seq,
            timestamps : true,
            modelName : "User",
            tableName : "users",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    // static associate(db) {
    //     db.User.hasMany(db.Post, {foreignKey : "user_id", sourceKey : "id"});
    // }
}

module.exports = User;