var http = require ('http');	// How we require modules / include libraries

http.createServer(function(requrest, response) { 
	response.writeHead(200);	// Status code in header
	response.write("Dog is running");	// Response body
	setTimeout(function() {		// Represent long running process
		response.write("Dog is done");
		response.end();
	}, 5000);	// 5000ms = 5s
}).listen(8080);	// Listen to connections on this port

// ---------------- Notes ------------------ //

// Two events:
// 		1. Request event: createServer(function(request, response) {callback});
//		2. Timeout event: setTimeout(function(){callback});

// Timeline - Send two requests into server:
// 		1. Request 1 comes in, triggers request event
//		2. Request 1 callback executes
//		3. setTimeout registered -> waits 5 seconds
//		MEANWHILE:
//		4. Request 2 comes in, triggers request event
//		5. Request 2 callback exectures
//		6. setTimeout registered -> waits 5 seconds
//		WHEN 3. HAS COMPLETED:
//		7. Trigger setTimeout event
//		8. setTimeout callback executes
//		WHEN 6. HAS COMPLETED:
//		9. Trigger setTimeout event
//		10. setTimeout callback executes