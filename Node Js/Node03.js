const http = require('http');

function rqListener(req,res){
    console.log(req);
    process.exit()
}

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>>👋Hello</title></head>');
        res.write('<body><form action= "/message" method="POST"><input type= "text" name="message"><button type = "submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>👋Hello</title></head>');
    res.write('<body><p>Hello</p></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);


