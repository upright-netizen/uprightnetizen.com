// Using node static - https://github.com/cloudhead/node-static
var Static = require('node-static'),
    file = new Static.Server(),
    port = 3002;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    });
}).listen(port);

console.log("Listening on http://localhost:"+port+"/");

