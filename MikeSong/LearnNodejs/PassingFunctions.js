function say(word) {
	console.log(word);
}

function execute(someFunction, value) {
	someFunction(value);
}

execute (say, "Hello");

// Another method:

function execute2 (someFunction, value) {
	someFunction(value);
}

execute2 (function(word) { 
	console.log(word);
});