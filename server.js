'use strict';
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
    var baseDir = './';
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
   
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
        console.log('favicon requested');
        return;
      }

    try {
        var requestUrl = url.parse(req.url);
        var fsPath = baseDir + path.normalize(requestUrl.pathname);

        var fileStream = fs.createReadStream(fsPath) ;
        fileStream.pipe(res)
        fileStream.on('open', () => {
            res.writeHead(200);
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
