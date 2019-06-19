const express = require(`express`);
const fs = require(`fs`);
const router = express.Router();

router.use((req, res) => {
    let notFoundDB = JSON.parse(fs.readFileSync('./db/notFoundDB.txt', 'utf8'));
    res.render('NotFound', {
        title: notFoundDB.title,
        h1: notFoundDB.capture,
        p: notFoundDB.text
    });
})

module.exports = router;