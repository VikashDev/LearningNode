// globle processargv function takes arugment to start the app 
// showing output from user input

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1 ? null : process.argv[index+1]);

}

var greeting = grab('--greeting');
var user = grab('--user');


if (!user || !greeting) {
	console.log("You Blew It!!");
} else {
	console.log(`welcome ${user}, ${greeting}`);
}