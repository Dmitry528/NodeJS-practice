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
        let About = new AboutInfo();
        About.ShowInfo(res);

        res.end();
    }
    else if(url === `/contact`){
        res.setHeader("Content-Type", "text/html");

        res.end();
    }
    else{
        res.setHeader("Content-Type", "text/html");

        res.end();
    }
});

server.listen(3000, '127.0.0.1');