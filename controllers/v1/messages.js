const Message = require("../../models/v1/Message");


const getAll = async (req, res) => {
    let messages = await Message.find();
    res.json({
        "status": "success",
        "data": {
            "messages": messages,
        },
    }); 
};

const getOne = (req, res)=>{ };

const create = (req, res)=>{

    let text = req.body.message.text;
    let user = req.body.message.user;

    let message = new Message({ text: text, user: user});
    message.save().then(()=>{
        res.json({
            "status": "success",
            "data": {
                "message": message,
            },
        });
    }).catch((err)=>{
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    });

};

module.exports = {
    getAll,
    getOne,
    create,
};