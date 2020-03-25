const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessagesSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    completed: Boolean,
})
const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;