# CORS-Proxy

Simple nodejs proxy to help avoiding CORS massage in the Browser whyle developing a client for the API that you don't have access and you can not set the CORS headers.

This is using [node-http-proxy](https://github.com/nodejitsu/node-http-proxy)

## Installation
If you don't have nodejs on your Operating System install it first.

Clone this project:

`git clone https://github.com/shral/cors-proxy.git`

navigate to the project and install the needed packages

`cd  proxy`

`npm install`

Run the CORS-Proxy:

`node index.js http://<targethost>:PORT  LISTENINGPORT`


