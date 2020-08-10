'use strict';
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
    var baseDir = './';
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    try {
        var requestUrl = url.parse(req.url); if (requestUrl.path = '/') {
            requestUrl.pathname = '/index.html'
            requestUrl.path = '/index.html'
            requestUrl.href = '/index.html'
        };
        var fsPath = baseDir + path.normalize(requestUrl.pathname);

        var fileStream = fs.createReadStream(fsPath) ;
        fileStream.pipe(res)
        fileStream.on('open', () => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end
            });
        fileStream.on('err', (err) => {
            res.writehead(404)
            res.end()
            });
    } catch (err) {
        res.writehead(500)
        res.end
        console.log(err.stack)
    };
}).listen(port);
    console.log(`Running on port ${port}`);
