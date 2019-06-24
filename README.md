# CORS-Proxy

Simple nodejs proxy to help avoiding CORS massage (...No 'Access-Control-Allow-Origin' header is present on the requested resource...) in the Browser while developing a client for the API that you don't have access to and therefore you can not set the CORS headers.

## Dependencies
This is using [node-http-proxy](https://github.com/nodejitsu/node-http-proxy)

## Installation
If you don't have nodejs on your Operating System install it first.

Clone this project:

`git clone https://github.com/shral/cors-proxy.git`

Navigate to the project and install the needed packages

`cd  proxy`

`npm install`

Run the CORS-Proxy:

`node index.js http://<TARGETHOST>:<TARGETPORT>  <LISTENINGPORT>`

For Example if you run `node index.js http://apihost:9000 5050` you  can use `localhost:5050` to access `apihost:9000`


