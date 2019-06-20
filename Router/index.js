const express = require(`express`);
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views');

const HomePage = require(`./routers/homePage`);
const AboutPage = require(`./routers/aboutPage`);
const Contact = require(`./routers/contact`);
const NotFound = require(`./routers/notFound`);

app.get('/pug_HOME', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        h1: "Hello PUG"
    });
});

app.get('/pug_ABOUT', (req, res) => {
    res.render('about', {
        title: 'About Page',
        h1: "Hello PUG, its about page"
    });
});

app.get('/pug_CONTACT', (req, res) => {
    res.render('about', {
        title: 'CONTACT Page',
        h1: "Hello PUG, its contact page",
        img: 'img/cat.jpg'
    });
});



app.use(HomePage);
app.use(AboutPage);
app.use(Contact);
app.use(NotFound);



console.log(`Server listen on http://localhost:3000/`);
app.listen(3000);


// require css 
// pug
// ctrl alt l
// two page with cursework PUG
// fs