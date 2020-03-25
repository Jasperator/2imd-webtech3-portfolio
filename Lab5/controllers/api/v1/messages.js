const Message = require('../../../models/messages');


const getAll = (req, res) => {
    Message.find({"user": "Jasper"}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "message": docs
                }
            });
        }
    });


}

const create = (req, res, next) => {

    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
    message.completed = req.body.completed;
    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save this message"
            })
        }
        if(!err) {
            res.json({
                "status": "succes",
                "data": {
                    "message": doc
                }

            });
        }
    })


}


module.exports.getAll = getAll;
module.exports.create = create;