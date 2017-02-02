// taking input from console and showing answer to console

var question = [
	"ques1?",
	"ques2?",
	"ques3?",
];

var answers = [];


function ask(i) {
	process.stdout.write(`\n\n\n ${question[i]}`);
	process.stdout.write("  >   ");
}

process.stdin.on('data', function(data) {
	answers.push(data.toString().trim());

	if (answers.length < question.length) {
		ask(answers.lenght);	
	} else {
		process.exit();
	}

});

process.on('exit', function() {

	process.stdout.write("Thanks for your answers");

});

ask(0);