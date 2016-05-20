var questions = [
	//Category 1
	[
		"Category 1",
		//100 points
		{
			question:"For how many years was Odysseus away?",
			answers:["One month", "One year", "Ten years", "Twenty years"],
			correctAnswer:3 //The correct answer is the fourth, but this is number 3 STARTING AT 0. I.e, first is "0", second is "1", third is "2", and fourth is "3"
		},
		//200 points
		{
			question:" ... ", //Question goes here
			answers:[" ... ", " ... ", " ... ", " ... "], //Four answers go here, formatted like this
			correctAnswer:0 //Number which answer is the correct one, but START WITH 0. So the first choice is "0", the second is "1", and so on
		},
		//300 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//400 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//500 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//600 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
	],
	//Category 2
	[
		"Category 2",
		//100 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//200 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//300 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//400 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//500 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
		//600 points
		{
			question:" ... ",
			answers:[" ... ", " ... ", " ... ", " ... "],
			correctAnswer:0
		},
	],
	//More categories...
];

var a = "HAI";

function getCategoryTitle(categoryNum) {
	return questions[categoryNum][0];
}

function getQuestion(categoryNum, pointVal) {
	return questions[categoryNum][pointVal/100].question;
}

function getAnswerChoice(categoryNum, pointVal, answerNum) {
	return questions[categoryNum][pointVal/100].answers[answerNum];
}

function isAnsweCorrect(categoryNum, pointVal, selectedChoice) {
	var correct = false;
	if (selectedChoice = questions[categoryNum][(pointVal/100) - 1].correctAnswer) {
		correct = true;
	}
	return correct;
}

function setHtmlDivText(text, divId) {
	document.getElementById(divID).innerHTML = text;
}