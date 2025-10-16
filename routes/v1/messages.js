const express = require('express');
const messagesController = require('../../conrtollers/v1/messages');

const router = express.Router();

let messages = [  "Hello ALITHAAAAA", "Hello AMINAAAAA", "Hello Once More"];


router.get("/", messagesController.getAll);

router.get("/:id",  (req, res)=>{ 
    let id = req.params.id;
    if(id >= messages.length){
        res.json({
            "status": "error",
            "message": "This message does not exist"
        });
    }

    else{
        res.json(messages[id]);
    }
});

router.post("/", (req, res)=>{
    let message = req.body.message;
    messages.push(message);
    res.send("POST /messages");

});

module.exports = router;
