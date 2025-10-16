const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "messages": messages
        },
    }); 
};

module.exports = {
    getAll,
};