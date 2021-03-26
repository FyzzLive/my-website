var http = require("http");
var url = require("url");
var fs = require("fs");
const PORT = process.env.PORT || 5000;


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(filename == './') {filename = './index';}

    filename = filename + ".html";

    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Conent-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Conent-Type': 'text/html'});
        res.write(data);
        console.log("...Incomming request "+ req.url);
        return res.end();
    });
}).listen(PORT);


console.log("Server Listening On port " + PORT + "...");


