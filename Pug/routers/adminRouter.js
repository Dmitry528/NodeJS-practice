const express = require(`express`);
const fs = require(`fs`);
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/admin', (req, res) => {
    res.render('Admin');
});

router.post("/admin", urlencodedParser, function (req, res) {
    if(req.body === ""){
        res.send('Not Found');
    }
    else{
        //console.log(req.body);
        res.render('Admin_created', {
            title: req.body.titlePage,
            h1: req.body.capture,
            p: req.body.textpl
        })
    }
});

module.exports = router;