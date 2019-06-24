var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create a proxy server with custom application logic
//

if(process.argv[2]){  
    var target = process.argv[2];
    var port = process.argv[3] || 5050;
    console.log("Target:",target);
    var proxy = httpProxy.createProxyServer({});
    proxy.on('proxyRes', (proxyRes, req, res) => {
        res.setHeader('access-control-allow-origin',"*");
        res.setHeader('access-control-max-age', 60 * 60 * 24 * 30);
        if (req.method === 'OPTIONS') {
            res.send(200);
            res.end();
        }
    });
    
    var server = http.createServer(function(req, res) {
        proxy.web(req, res, {
            target: target
        });
    });
    
    console.log(`listening on port ${port}`)
    server.listen(port);
}else{
    console.log("Target url is missing, set target like: node indexjs http://<targethost>:<port>");
}