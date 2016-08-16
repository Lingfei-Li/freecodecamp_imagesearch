

var express = require('express');
var router = express.Router();

router.get('/history', (req, res)=>{
    History.getAllHistory((err, data)=>{
        if(err) throw err;
        console.log(data);
        res.json(data);
    });
});

router.post('/history', (req, res) => {
    console.log(req.body);
    var history = req.body;
    History.addHistory(history, (err, data)=>{
        if(err) throw err;
        console.log("data:",data);
        res.send("thanks");
    });
});

module.exports = router;
