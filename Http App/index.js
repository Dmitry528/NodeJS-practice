const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === `/`){
        res.setHeader("Content-Type", "text/html");
        
        const HomeInfo = require("./modules/home");
        let Home = new HomeInfo;
        Home.ShowInfo(res);
        
        res.end();
    }
    else if(url === `/about`){
        res.setHeader("Content-Type", "text/html");
        
        const AboutInfo = require("./modules/about");
        let About = new AboutInfo;
        About.ShowInfo(res);

        res.end();
    }
    else if(url === `/contact`){
        res.setHeader("Content-Type", "text/html");
        const AboutContact = require(`./modules/contact`);
        let contact = new AboutContact;
        contact.ShowInfo(res);

        res.end();
    }
    else{
        res.setHeader("Content-Type", "text/html");
        const notFound = require(`./modules/notFound`);
        let notfound = new notFound;
        notfound.ShowInfo(res);
        res.end();
    }
});

server.listen(3000, '127.0.0.1');