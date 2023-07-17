const Sequelize = require("sequelize");

class Post extends Sequelize.Model{
    static init(seq) {
        return super.init({
            id : {
                type : Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true
            },
            title : {
                type : Sequelize.STRING(30),
                allowNull : false
            },
            detail : {
                type : Sequelize.TEXT,
                allowNull : false
            },
            writer : {
                type : Sequelize.STRING(30)
            },
            date : {
                type : Sequelize.STRING(30)
            }
        },{
            sequelize : seq,
            timestamps : true,
            modelName : "Post",
            tableName : "posts",
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    // static associate(db) {
    //     db.Post.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
    // }
}

module.exports = Post;