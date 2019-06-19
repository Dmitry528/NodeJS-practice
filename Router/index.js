const express = require(`express`);
const app = express();

const HomePage = require(`./routers/homePage`);
const AboutPage = require(`./routers/aboutPage`);
const Contact = require(`./routers/contact`);
const NotFound = require(`./routers/notFound`);

app.use(HomePage);
app.use(AboutPage);
app.use(Contact);
app.use(NotFound);



console.log(`Server listen on http://localhost:3000/`);
app.listen(3000);