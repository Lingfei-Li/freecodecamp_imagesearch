

var express = require('express');
var router = express.Router();
var History = require('../models/History');

router.get('/', (req, res)=>{
    History.getAllHistory((err, data)=>{
        if(err) throw err;
        console.log(data);
        res.json(data);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    var history = req.body;
    History.addHistory(history, (err, data)=>{
        if(err) throw err;
        console.log("data:",data);
        res.send("thanks");
    });
});

router.delete('/:_id', (req, res)=>{
    var _id = req.params._id;
    History.deleteHistoryById(_id, (err) => {
        if(err) throw err;
        res.send("deleted history " + _id);
    });
});

router.delete('/', (req, res)=>{
    History.deleteAllHistory((err) => {
        if(err) throw err;
        res.send("deleted all history");
    });
});

module.exports = router;
