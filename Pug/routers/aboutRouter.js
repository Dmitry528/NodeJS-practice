const express = require(`express`);
const fs = require(`fs`);
const router = express.Router();

router.get('/about', (req, res) => {
    let aboutDB = JSON.parse(fs.readFileSync('./db/aboutDB.txt', 'utf8'));
    res.render('About', {
        title: aboutDB.title,
        h1: aboutDB.capture,
        p: aboutDB.text
    });
})

module.exports = router;