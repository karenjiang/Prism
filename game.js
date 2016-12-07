var scores = [1000];

var finalWager = 0;
var timeoutId;

var currentCategory;
var currentValue;

var finalQuestionNum = Math.floor(Math.random() * 4);
var finalQuestion = finalQuestions[finalQuestionNum];

var questionsLeft = 0;

for (numCategories = 0; numCategories < questions.length; numCategories++) {
    for (numQuestions = 0; numQuestions < questions[numCategories].length; numQuestions++) {
        questionsLeft++;
    }
}

var topValForFinishingGame = questionsLeft;

function initScores() {
    var numberTeams;
    while (true) {
        numberTeams = prompt("How many teams do you want?", "");
        if (!isNumber(finalWager)) {
            alert("That wasn't a number... \nTry again.");
        } else {
            numberTeams = Number(numberTeams);
            if (numberTeams > 5) {
                alert("Too many teams... \nTry less than 5.");
            } else if (numberTeams <= 0) {
                alert("Um... wut?\n" + numberTeams + " teams?\nTry again.");
            } else {
                break;
            }
        }
    }

    //Starts at 1 because scores already contains a value for one team
    for (a = 1; a < numberTeams; a++) {
        scores.push(1000);
    }
}

function isNumber(str) {
    var noFloatingPoint = true;
    for(iter = 0; iter < str.length; iter++) {
        if ((str.charCodeAt(iter) >= 48 && str.charCodeAt(iter) <= 57) || (str.charAt(iter) == '.' && noFloatingPoint) || (str.charAt(iter) == '-' && iter == 0)) {
            if (str.charAt(iter) == '.') {
                noFloatingPoint = false;
            }
            continue;
        }
        return false;
    }
    return true;
}

function getCategoryTitle(categoryNum) {
    return questions[categoryNum][0];
}

function getQuestion(categoryNum, pointVal) {
    return questions[categoryNum][pointVal/100].question;
}

function getAnswerChoice(categoryNum, pointVal, answerNum) {
    return questions[categoryNum][pointVal/100].answers[answerNum];
}

function getCorrectAnswer(categoryNum, pointVal) {
    return questions[categoryNum][pointVal/100].correctAnswer;
}

function isAnsweCorrect(categoryNum, pointVal, selectedChoice) {
    var correct = false;
    if (selectedChoice = questions[categoryNum][(pointVal/100) - 1].correctAnswer) {
        correct = true;
    }
    return correct;
}

function getFinalQuestion() {
    return finalQuestion.question;
}

function getFinalAnswerChoice(answerNum) {
    return finalQuestion.answers[answerNum];
}

function getFinalCorrectAnswer() {
    return finalQuestion.correctAnswer;
}

function isFinalAnsweCorrect(selectedChoice) {
    var correct = false;
    if (selectedChoice = finalQuestion.correctAnswer) {
        correct = true;
    }
    return correct;
}

function setHtmlDivText(text, divId) {
    document.getElementById(divId).innerHTML = text;
}

function hidePage(pageToBeHidden) {
    document.getElementById(pageToBeHidden).style.display='none';
}

function showPage(pageToBeShown) {
    document.getElementById(pageToBeShown).style.display='block';
}

function hideAndShow(pageToBeHidden, pageToBeShown) {
    hidePage(pageToBeHidden);
    showPage(pageToBeShown);

    if (pageToBeHidden == "questionPage") { //Resets the question page
        document.getElementById("answer0").className = "col-md-6 alert alert-info";
        document.getElementById("answer1").className = "col-md-6 alert alert-info";
        document.getElementById("answer2").className = "col-md-6 alert alert-info";
        document.getElementById("answer3").className = "col-md-6 alert alert-info";
    }

    if (pageToBeShown == "chooseQuestionPage") { //Sets the answered question as completed
        for (categoryIt = 0; categoryIt < questions.length; categoryIt++) {
            for (valueIt = 1; valueIt < questions[categoryIt].length; valueIt++) {
                if (questions[categoryIt][valueIt].taken) {
                    var divId = "" + (categoryIt) + "." + (valueIt * 100);
                    var element = document.getElementById(divId);
                    console.log(divId);
                    element.innerHTML = "<p>" + (valueIt * 100) + "</p>";
                    if (questions[categoryIt][valueIt].correct) {
                        element.className = "alert alert-success";
                    } else {
                        element.className = "alert alert-danger";
                    }
                }
            }
        }
    }

    //Chance of going to final question:
    var chanceForFinale = Math.floor((topValForFinishingGame - 3) * Math.random());
    console.log("Will move on if semi-random number is greater than number of remaining questions.\nsemi-random number: " + chanceForFinale + "\nRemaining questions: " + questionsLeft);
    if (questionsLeft == 0) {
        showFinalQuestionPage();
    }
    else if (chanceForFinale >= questionsLeft) {
        if (confirm("Are you ready for the final question?")) {
            showFinalQuestionPage();
        } else {
            topValForFinishingGame *= .5;
        }
    }
}

//This function is the one that starts the final question segment
function showFinalQuestionPage() {
    var finalQuestionCategory = Math.floor(Math.random() * questions.length);
    var finalQuestionValue = Math.floor(Math.random() * (questions[finalQuestionCategory].length - 1));
    finalQuestionValue++; //This way it won't be the category name
    if (!questions[finalQuestionCategory][finalQuestionValue].taken) { //If the chosen question isn't taken, the final question can be that one. Otherwise, it's one of four special questions
        finalQuestion = questions[finalQuestionCategory][finalQuestionValue];
    }

    while (true) {
        if (score > 0) {
            finalWager = prompt("Final Question: How much would you like to wager?", "");
            if (!isNumber(finalWager)) {
                alert("That wasn't a number... \nTry again.");
            } else {
                finalWager = Number(finalWager);

                if (finalWager > score) {
                    alert("You don't have that much money... \nTry again.")
                } else if (finalWager < 0) {
                    alert("Uhh, that's negative... \nTry again.")
                } else {
                    break;
                }
            }
        } else if (score < 0) {
            finalWager = prompt("Final Question: You have negative money. You can bet up to the absolute value of your total.\nHow much would you like to wager?", "");
            if (!isNumber(finalWager)) {
                alert("That wasn't a number... \nTry again.");
            } else {
                finalWager = Number(finalWager);

                if (finalWager > score) {
                    alert("You don't have that much money... \nTry again.")
                } else if (finalWager < 0) {
                    alert("Uhh, that's negative... \nTry again.")
                } else {
                    break;
                }
            }
        }
    }

    document.getElementById('questionPage').style.display='block';
    document.getElementById('chooseQuestionPage').style.display='none';
    setHtmlDivText('','alert');

    setHtmlDivText("<b>Final question: </b>" + getFinalQuestion(), "question");
    setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer0\"),0)'>" + getFinalAnswerChoice(0) + "</a>", "answer0");
    setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer1\"),1)'>" + getFinalAnswerChoice(1) + "</a>", "answer1");
    setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer2\"),2)'>" + getFinalAnswerChoice(2) + "</a>", "answer2");
    setHtmlDivText("<a href='#' onclick='submitFinalQuestion(document.getElementById(\"answer3\"),3)'>" + getFinalAnswerChoice(3) + "</a>", "answer3");
    setHtmlDivText("", "return");
}

function showQuestionPage(setCategory, setValue) {
    document.getElementById('questionPage').style.display='block';
    document.getElementById('chooseQuestionPage').style.display='none';
    setHtmlDivText('','alert');
    currentCategory = setCategory;
    currentValue = setValue;
    setHtmlDivText(getQuestion(currentCategory, currentValue), "question");

    for (a = 0; a < 4; a++) {
        var text = getAnswerChoice(currentCategory, currentValue, a);
        text += "<br><a href='#' onclick='submitQuestion(document.getElementById(\"answer0\"),0)'>" + getAnswerChoice(currentCategory, currentValue, 0) + "</a>", "answer0"
    }

    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer0\"),0)'>" + getAnswerChoice(currentCategory, currentValue, 0) + "</a>", "answer0");
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer1\"),1)'>" + getAnswerChoice(currentCategory, currentValue, 1) + "</a>", "answer1");
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer2\"),2)'>" + getAnswerChoice(currentCategory, currentValue, 2) + "</a>", "answer2");
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer3\"),3)'>" + getAnswerChoice(currentCategory, currentValue, 3) + "</a>", "answer3");
    setHtmlDivText("", "return");

    /*
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer0\"),0)'>" + getAnswerChoice(currentCategory, currentValue, 0) + "</a>", "answer0");
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer1\"),1)'>" + getAnswerChoice(currentCategory, currentValue, 1) + "</a>", "answer1");
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer2\"),2)'>" + getAnswerChoice(currentCategory, currentValue, 2) + "</a>", "answer2");
    setHtmlDivText("<a href='#' onclick='submitQuestion(document.getElementById(\"answer3\"),3)'>" + getAnswerChoice(currentCategory, currentValue, 3) + "</a>", "answer3");
    setHtmlDivText("", "return");
    */
}

function submitQuestion(div, selectedChoice) {
    var correctAnswer = getCorrectAnswer(currentCategory, currentValue);
    questions[currentCategory][currentValue/100].taken = true;
    if (selectedChoice != correctAnswer) {
        div.className = "col-md-6 alert alert-danger";
        score -= (.5 * currentValue);
        questions[currentCategory][currentValue/100].correct = false;
        setHtmlDivText('<div class="alert alert-danger" role="alert">Incorrect! You lost ' + (.5 * currentValue) + ' points. Your new score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
        //timeoutId = setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
    } else {
        score += currentValue;
        questions[currentCategory][currentValue/100].correct = true;
        setHtmlDivText('<div class="alert alert-success" role="alert">Correct! You got ' + currentValue + ' points. Your new score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
        //timeoutId = setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
    }
    var correctDivId = "answer" + correctAnswer;
    document.getElementById(correctDivId).className = "col-md-6 alert alert-success";

    setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 0) + "</p>", "answer0");
    setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 1) + "</p>", "answer1");
    setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 2) + "</p>", "answer2");
    setHtmlDivText("<p>" + getAnswerChoice(currentCategory, currentValue, 3) + "</p>", "answer3");

    setHtmlDivText("<button type='button' class='btn btn-primary' onclick='hideAndShow(\"questionPage\", \"chooseQuestionPage\")'>Return</button>", "return");
    updateScores();

    questionsLeft--;
}

function submitFinalQuestion(div, selectedChoice) {
    var correctAnswer = getFinalCorrectAnswer();

    //clearTimeout(timeoutId);
    setTimeout(function() { setHtmlDivText('','alert'); }, 7500);

    if (selectedChoice != correctAnswer) {
        div.className = "col-md-6 alert alert-danger";
        score -= finalWager;
        //questions[currentCategory][currentValue/100].correct = false;
        setHtmlDivText('<div class="alert alert-danger" role="alert">Incorrect! You lost ' + finalWager + ' points. Your final score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
        //setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
    } else {
        score += finalWager;
        //questions[currentCategory][currentValue/100].correct = true;
        setHtmlDivText('<div class="alert alert-success" role="alert">Correct! You got ' + finalWager + ' points. Your final score is <b>' + score + '</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>', 'alert');
        //setTimeout(function() { setHtmlDivText('','alert'); }, 5000);
    }
    var correctDivId = "answer" + correctAnswer;
    document.getElementById(correctDivId).className = "col-md-6 alert alert-success";

    updateScores();

    var body = document.getElementById("body");

    var imageName;
    var imageNum = Math.floor(Math.random() * 3);

    if (imageNum == 0) {
        imageName = "url('images/stones.jpg')";
    } else if (imageNum == 1) {
        imageName = "url('images/temple_ruins.jpg')";
    } else if (imageNum == 2) {
        imageName = "url('images/sea_ruins.jpg')";
    }

    body.style.background = imageName;
    body.style.backgroundSize = "100%";

    hidePage("questionPage");

    setHtmlDivText('<div class="jumbotron fixed-bottom" style="position:fixed; bottom:0; width: 100%; background: rgba(244, 246, 236, 0.75);"><div class="container"><h1>Final ' + getScoreText() + '</h1><h3>Thanks for playing!</h3><p><a class="btn btn-primary btn-lg" href="index.html" role="button">Home</a></p></div></div>','finalResult');
}

function changeScore(player, value) {
    scores[player] += value;
}

function getScoreText() {
    var text = scores.length > 1 ? "scores:&nbsp&nbsp&nbsp&nbsp" : "Current score:&nbsp&nbsp&nbsp&nbsp";
    for (a = 0; a < scores.length; a++) {
        text += "(" + (a + 1) + "): " + scores[a];
        if (a != scores.length - 1) text += ",&nbsp&nbsp&nbsp&nbsp";
    }
    return text;
}

function updateScores() {
    setHtmlDivText("Current " + getScoreText(), "score");
}
