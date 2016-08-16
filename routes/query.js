

var express = require('express');
var router = express.Router();
var History = require('../models/History');
var Bing = require('node-bing-api')({ accKey: "Fc5TeTWhKvbp9rohi1fwUVmwHJBXgOZ4rKHFamJ7ihg" });

router.get('/:queryStr', (req, res)=>{
    var query = req.params.queryStr;
    var history = { query };
    var page = parseInt(req.query.offset || '1')-1;
    console.log('page:', page);
    History.addHistory(history, (err, data)=>{
        if(err) throw err;
    });
    Bing.images(query, {top:10, skip:10*page}, function(error, results, body){
        res.json(body);
    });
});


module.exports = router;
