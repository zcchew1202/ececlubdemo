var http = require ('http');	// How we require modules / include libraries

http.createServer(function(requrest, response) { 
	response.writeHead(200);	// Status code in header
	response.write("Hello, this is dog");	// Response body
	response.end()	// Close the connection
}).listen(8080);	// Listen to connections on this port

console.log('Listening on port 8080');	// Make sure port is listening
	
// 'node hello.js' will run the server and output: Listening on port 8080
// 'curl http://localhost:808' will output: Hello, this is dog 
