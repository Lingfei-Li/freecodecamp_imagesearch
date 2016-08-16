
var mongoose = require('mongoose');

var historySchema = mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    created: { 
        type: Date, 
        default: Date.now 
    }
});

var History = module.exports = mongoose.model('history', historySchema);

module.exports.getAllHistory = (callback)=>{
    History.find(callback);
};

module.exports.addHistory = (history, callback) => {
    History.create(history, callback);
};

module.exports.deleteHistoryById = (_id, callback) => {
    History.find({_id}).remove(callback);
};

module.exports.deleteAllHistory = (callback) => {
    History.find().remove(callback);
};
