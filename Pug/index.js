const express = require(`express`);
const path = require(`path`);
const fs = require(`fs`);
const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.set('view engine', 'pug');


const HomeRout = require('./routers/homeRouter');
app.use(HomeRout);

const AboutRout = require('./routers/aboutRouter');
app.use(AboutRout);

const ContactRout = require('./routers/contactRouter');
app.use(ContactRout);

// admin post in new db
const Admin = require('./routers/adminRouter');
app.use(Admin);

// admin get in new page pug

const NotFound = require('./routers/notFoundRouter');
app.use(NotFound);


app.listen(3000);
console.log('Server created on http://localhost:3000');