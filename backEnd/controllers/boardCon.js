const {Post} = require("../models");

exports.getPost = async (req, res) => {
    try {
        const data = await Post.findAll();
        res.json(data);

    } catch (error) {
        console.log(error);
    }
};

exports.addPost = async (req, res) => {
    console.log(req.sessionID);
    try {
        await Post.create({
            title : req.params.ti,
            detail : req.params.de,
            writer : req.params.id,
            date : req.params.da
        });

        res.json("succeed")
    } catch (error) {
        console.log(error);
    }
}

exports.moveToEdit = async (req, res) => {
    const {id} = req.params;

    try {
        const data = await Post.findOne({where : {id}});
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.editPost = async (req, res) => {
    const {id, ti, de} = req.params;

    try {
        await Post.update({
            title : ti,
            detail : de
        }, {where : {id}});

        res.json("succeed");
    } catch (error) {
        console.log(error);
    }
}

exports.deletePost = async (req, res) => {
    const {id} = req.params;

    try {
        await Post.destroy({where : {id}});
    } catch (error) {
        console.log(error);
    }
}
