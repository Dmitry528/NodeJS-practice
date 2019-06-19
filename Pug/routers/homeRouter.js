const express = require(`express`);
const fs = require(`fs`);
const router = express.Router();

router.get('/', (req, res) => {
    let homeDB = JSON.parse(fs.readFileSync('./db/homeDB.txt', 'utf8'));
    res.render('Home', {
        title: homeDB.title,
        h1: homeDB.capture,
        p: homeDB.text
    });
})

module.exports = router;