// Using node static - https://github.com/cloudhead/node-static
var Static = require('node-static'),
    file = new Static.Server(),
    port = 3002,
    log = console.log,
    green="\033[1;32m",
    stop="\033[0m";

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    });
}).listen(port);

log("\n\n");
log(green + "Upright Netizen" + stop + "\n");
log("Patiently listening on http://localhost:"+port+"/");
log("press Ctrl + C to stop");
