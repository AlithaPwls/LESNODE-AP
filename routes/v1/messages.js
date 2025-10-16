const express = require('express');
const messagesController = require('../../controllers/v1/messages');

const router = express.Router();

let messages = [  "Hello ALITHAAAAA", "Hello AMINAAAAA", "Hello Once More"];

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getOne);
router.post("/", messagesController.create);




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


module.exports = router;
