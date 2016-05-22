
				// var score = 1000;

				// var finalWager = 0;
				// var finalQuestionNum;
				// var timeoutId;

				// var currentCategory;
				// var currentValue;

				// var finalQuestions = [
				// 	{
				// 		question:"Final question 1",
				// 		answers:["A", "B", "C", "D"],
				// 		correctAnswer:0,
				// 	},
				// 	{
				// 		question:"Final question 2",
				// 		answers:["A", "B", "C", "D"],
				// 		correctAnswer:1,
				// 	},
				// 	{
				// 		question:"Final question 3",
				// 		answers:["A", "B", "C", "D"],
				// 		correctAnswer:2,
				// 	},
				// 	{
				// 		question:"Final question 4",
				// 		answers:["A", "B", "C", "D"],
				// 		correctAnswer:3,
				// 	},
				// ]

				// var questions = [
				// 	//Category 1
				// 	[
				// 		"Plot",
				// 		//100 points
				// 		{
				// 			question:"For how many years was Odysseus away?",
				// 			answers:["One month", "One year", "Ten years", "Twenty years"],
				// 			correctAnswer:3, //The correct answer is the fourth, but this is number 3 STARTING AT 0. I.e, first is "0", second is "1", third is "2", and fourth is "3"
				// 			value:100,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//200 points
				// 		{
				// 			question:"What do the suitors do when hearing of Telemachus’ journey?",
				// 			answers:["Try poisoning his drink", "Plan a naval ambush", "Compete more urgently for Penelope’s hand", "Flee the royal palace"],
				// 			correctAnswer:1,
				// 			value:200,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//300 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//400 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//500 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//600 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 	],
				// 	//Category 2
				// 	[
				// 		"Characters",
				// 		//100 points
				// 		{
				// 			question:"Which god assists Odysseus and later Telemachus many times throughout their journeys?",
				// 			answers:["Athena", "Artemis", "Poseidon", "Zeus"],
				// 			correctAnswer:0,
				// 			value:100,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//200 points
				// 		{
				// 			question:"Under which disguise did Odysseus test Eumaeus?",
				// 			answers:["A soldier", "A beggar", "Zeus", "He had no disguise"],
				// 			correctAnswer:1,
				// 			value:200,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//300 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//400 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//500 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//600 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 	],
				// 	//More categories...
				// 	//Category 3
				// 	[
				// 		"Category 3",
				// 		//100 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0,
				// 			value:100,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//200 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0,
				// 			value:200,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//300 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//400 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//500 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//600 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 	],
				// 	//Category 4
				// 	[
				// 		"Category 4",
				// 		//100 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0,
				// 			value:100,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//200 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0,
				// 			value:200,
				// 			taken:false,
				// 			correct:undefined,
				// 		},
				// 		//300 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//400 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//500 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 		//600 points
				// 		{
				// 			question:" ... ",
				// 			answers:[" ... ", " ... ", " ... ", " ... "],
				// 			correctAnswer:0
				// 		},
				// 	],
				// ];

				// var questionsLeft = 0;

				// for (numCategories = 0; numCategories < questions.length; numCategories++) {
				// 	for (numQuestions = 0; numQuestions < questions[numCategories].length; numQuestions++) {
				// 		questionsLeft++;
				// 	}
				// }

				// const totalQuestions = questionsLeft;

				// function getCategoryTitle(categoryNum) {
				// 	return questions[categoryNum][0];
				// }

				// function getQuestion(categoryNum, pointVal) {
				// 	return questions[categoryNum][pointVal/100].question;
				// }

				// function getAnswerChoice(categoryNum, pointVal, answerNum) {
				// 	return questions[categoryNum][pointVal/100].answers[answerNum];
				// }

				// function getCorrectAnswer(categoryNum, pointVal) {
				// 	return questions[categoryNum][pointVal/100].correctAnswer;
				// }

				// function isAnsweCorrect(categoryNum, pointVal, selectedChoice) {
				// 	var correct = false;
				// 	if (selectedChoice = questions[categoryNum][(pointVal/100) - 1].correctAnswer) {
				// 		correct = true;
				// 	}
				// 	return correct;
				// }

				// function getFinalQuestion(questionNum) {
				// 	return finalQuestions[questionNum].question;
				// } 

				// function getFinalAnswerChoice(questionNum, answerNum) {
				// 	return finalQuestions[finalQuestionNum].answers[answerNum];
				// }

				// function getFinalCorrectAnswer(questionNum) {
				// 	return finalQuestions[questionNum].correctAnswer;
				// }

				// function isFinalAnsweCorrect(questionNum, selectedChoice) {
				// 	var correct = false;
				// 	if (selectedChoice = finalQuestions[questionNum].correctAnswer) {
				// 		correct = true;
				// 	}
				// 	return correct;
				// }

				// function setHtmlDivText(text, divId) {
				// 	document.getElementById(divId).innerHTML = text;
				// }

				// function hidePage(pageToBeHidden) {
				// 	document.getElementById(pageToBeHidden).style.display='none'; 
				// }

				// function showPage(pageToBeShown) {
				// 	document.getElementById(pageToBeShown).style.display='block';
				// }

				// function hideAndShow(pageToBeHidden, pageToBeShown) {
				// 	hidePage(pageToBeHidden);
				// 	showPage(pageToBeShown);

				// 	if (pageToBeHidden == "questionPage") { //Resets the question page
				// 		document.getElementById("answer0").className = "col-md-6 alert alert-info";
				// 		document.getElementById("answer1").className = "col-md-6 alert alert-info";
				// 		document.getElementById("answer2").className = "col-md-6 alert alert-info";
				// 		document.getElementById("answer3").className = "col-md-6 alert alert-info";
				// 	}

				// 	if (pageToBeShown == "chooseQuestionPage") { //Sets the answered question as completed
				// 		for (categoryIt = 0; categoryIt < questions.length; categoryIt++) {
				// 			for (valueIt = 1; valueIt < questions[categoryIt].length; valueIt++) {
				// 				if (questions[categoryIt][valueIt].taken) {
				// 					var divId = "" + (categoryIt) + "." + (valueIt * 100);
				// 					var element = document.getElementById(divId);
				// 					element.innerHTML = "<p>" + (valueIt * 100) + "</p>";
				// 					if (questions[categoryIt][valueIt].correct) {
				// 						element.className = "alert alert-success";
				// 					} else {
				// 						element.className = "alert alert-danger";
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}

				// 	//Chance of going to final question:
				// 	var chanceForFinale = Math.floor((totalQuestions - 3) * Math.random());
				// 	console.log("Will move on if semi-random number is greater than number of remaining questions.\nsemi-random number: " + chanceForFinale + "\nRemaining questions: " + questionsLeft);
				// 	if (chanceForFinale >= questionsLeft) {
				// 		showFinalQuestionPage('questionPage', 'chooseQuestionPage');
				// 	}
				// }

				// function showFinalQuestionPage(pageToBeShown, pageToBeHidden) {
				// 	document.getElementById(pageToBeShown).style.display='block';
				// 	document.getElementById(pageToBeHidden).style.display='none';
				// 	while (true) {
				// 		if (score > 0) {
				// 			finalWager = prompt("Final Question: How much would you like to wager?", "");
				// 			finalWager = Number(finalWager);
				// 			if (finalWager == NaN) {
				// 				alert("That wasn't a number... \nTry again.");
				// 			} else if (finalWager > score) {
				// 				alert("You don't have that much money... \nTry again.")
				// 			} else if (finalWager < 0) {
				// 				alert("Uhh, that's negative... \nTry again.")
				// 			} else {
				// 				break;
				// 			}
				// 		} else if (score < 0) {
				// 			finalWager = prompt("Final Question: You have negative money. You can bet up to the absolute value of your total.\nHow much would you like to wager?", "");
				// 			finalWager = Number(finalWager);
				// 			if (finalWager == NaN) {
				// 				alert("That wasn't a number... \nTry again.");
				// 			} else if (finalWager > -score) {
				// 				alert("You don't have that much money... \nTry again.")
				// 			} else if (finalWager < 0) {
				// 				alert("Please input a positive number... \nTry again.")
				// 			} else {
				// 				break;
				// 			}
				// 		}
				// 	}

				// 	finalQuestionNum = Math.floor(Math.random() * finalQuestions.length);

				// 	setHtmlDivText("<b>Final question: </b>" + getFinalQuestion(finalQuestionNum), "question");
				// 	setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer0\"),0)'>" + getFinalAnswerChoice(finalQuestionNum, 0) + "</a>", "answer0");
				// 	setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer1\"),1)'>" + getFinalAnswerChoice(finalQuestionNum, 1) + "</a>", "answer1");
				// 	setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer2\"),2)'>" + getFinalAnswerChoice(finalQuestionNum, 2) + "</a>", "answer2");
				// 	setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer3\"),3)'>" + getFinalAnswerChoice(finalQuestionNum, 3) + "</a>", "answer3");
				// 	setHtmlDivText("", "return");
				// }

				// function showQuestionPage(pageToBeShown, pageToBeHidden, setCategory, setValue) {
				// 	document.getElementById(pageToBeShown).style.display='block';
				// 	document.getElementById(pageToBeHidden).style.display='none';
				// 	currentCategory = setCategory;
				// 	currentValue = setValue;
				// 	setHtmlDivText(getQuestion(currentCategory, currentValue), "question");
				// 	setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer0\"),0)'>" + getAnswerChoice(currentCategory, currentValue, 0) + "</a>", "answer0");
				// 	setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer1\"),1)'>" + getAnswerChoice(currentCategory, currentValue, 1) + "</a>", "answer1");
				// 	setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer2\"),2)'>" + getAnswerChoice(currentCategory, currentValue, 2) + "</a>", "answer2");
				// 	setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer3\"),3)'>" + getAnswerChoice(currentCategory, currentValue, 3) + "</a>", "answer3");
				// 	setHtmlDivText("", "return");
				// }

				// function submitQuestion(div, selectedChoice) {
				// 	var correctAnswer = getCorrectAnswer(currentCategory, currentValue);
				// 	questions[currentCategory][currentValue/100].taken = true;
				// 	if (selectedChoice != correctAnswer) {
				// 		div.className = "col-md-6 alert alert-danger";
				// 		score -= (.5 * currentValue);
				// 		questions[currentCategory][currentValue/100].correct = false;
				// 		setHtmlDivText('<div class="alert alert-danger" role="alert">Incorrect! You lost ' + (.5 * currentValue) + ' points. Your new score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
				// 		timeoutId = setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
				// 	} else {
				// 		score += currentValue;
				// 		questions[currentCategory][currentValue/100].correct = true;
				// 		setHtmlDivText('<div class="alert alert-success" role="alert">Correct! You got ' + currentValue + ' points. Your new score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
				// 		timeoutId = setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
				// 	}
				// 	var correctDivId = "answer" + correctAnswer;
				// 	document.getElementById(correctDivId).className = "col-md-6 alert alert-success";

				// 	setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 0) + "</p>", "answer0");
				// 	setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 1) + "</p>", "answer1");
				// 	setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 2) + "</p>", "answer2");
				// 	setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 3) + "</p>", "answer3");
				// 	setHtmlDivText("<button type='button' class='btn btn-primary' onclick='hideAndShow(\"questionPage\", \"chooseQuestionPage\")'>Return</button>", "return");
				// 	updateScore();

				// 	questionsLeft--;
				// }

				// function submitFinalQuestion(div, selectedChoice) {
				// 	var correctAnswer = getFinalCorrectAnswer(finalQuestionNum);
				// 	//finalQuestions[finalQuestionNum].taken = true;

				// 	clearTimeout(timeoutId);
				// 	setTimeout(function() { setHtmlDivText('','alert'); }, 7500);

				// 	if (selectedChoice != correctAnswer) {
				// 		div.className = "col-md-6 alert alert-danger";
				// 		score -= finalWager;
				// 		//questions[currentCategory][currentValue/100].correct = false;
				// 		setHtmlDivText('<div class="alert alert-danger" role="alert">Incorrect! You lost ' + finalWager + ' points. Your final score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
				// 		//setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
				// 	} else {
				// 		score += finalWager;
				// 		//questions[currentCategory][currentValue/100].correct = true;
				// 		setHtmlDivText('<div class="alert alert-success" role="alert">Correct! You got ' + finalWager + ' points. Your final score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
				// 		//setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
				// 	}
				// 	var correctDivId = "answer" + correctAnswer;
				// 	document.getElementById(correctDivId).className = "col-md-6 alert alert-success";

				// 	updateScore();

				// 	var body = document.getElementById("body");
					
				// 	var imageName;
				// 	var imageNum = Math.floor(Math.random() * 3);

				// 	imageNum = 2;

				// 	if (imageNum == 0) {
				// 		imageName = "url('images/stones.jpg')";
				// 	} else if (imageNum == 1) {
				// 		imageName = "url('images/temple_ruins.jpg')";
				// 	} else if (imageNum == 2) {
				// 		imageName = "url('images/sea_ruins.jpg')";
				// 	} 

				// 	body.style.background = imageName;
				// 	body.style.backgroundSize = "100%";

				// 	hidePage("questionPage");

				// 	setHtmlDivText('<div class="jumbotron fixed-bottom" style="position:fixed; bottom:0; width: 100%; background: rgba(244, 246, 236, 0.75);"><div class="container"><h1>Final score: ' + score + '</h1><h3>Thanks for playing!</h3><p><a class="btn btn-primary btn-lg" href="index.html" role="button">Home</a></p></div></div>','finalResult');
				// }

				// function updateScore() {
				// 	document.getElementById('score').innerHTML = 'Current score: ' + score;
				// }