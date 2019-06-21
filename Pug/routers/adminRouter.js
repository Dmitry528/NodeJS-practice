const express = require(`express`);
const fs = require(`fs`);
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/admin', (req, res) => {
    res.render('Admin');
});

router.post("/admin", urlencodedParser, function (req, res) {
    if (req.body.titlePage === "" || req.body.capture === "" || req.body.textpl === ""){
        res.render('Admin_created', {
            status: 'There is YOUR DATA',
            title: 'Not FOUND',
            h1: 'Please enter DATA in ADMIN PAGE',
            p: 'Back to Admin PAGE'
        })
    }
    else{
        //console.log(req.body);
        res.render('Admin_created', {
            status: "There is YOUR DATA",
            title: req.body.titlePage,
            h1: req.body.capture,
            p: req.body.textpl
        })
    }
});

module.exports = router;