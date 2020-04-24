function populate() {
    if(quiz.isEnded()) {
        showScores();    
    }

    else{
        //show question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show choices
        var choices = quiz.getQuestionIndex().choices;

        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);
            element.innerHTML =choices[i];
            guess("btn" + i, choices[i]);
        }

    }
   
    showProgress();
};



function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
   var endQuizHtml = "<h1>Result</h1>";
   endQuizHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
   var element = document.getElementById("quiz");
   element.innerHTML = endQuizHtml;
}






var questions = [
    new Question("A very useful tool used during development and </br> debugging for printing content to the debugger is:", ["JavaScript", "terminal/bash", "for loops", "console log"], "console log"),
    new Question("String valus must be inclosed within _______ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("The condition in an if/else statement is enclosed within _________.", ["quotes", "curly brackets", "parentheses", "square brackets"], "curly brackets"),
    new Question("Commonly used data types DO NOT Include:", ["strings", "booleans", "alerts", "numbers"], "alerts")
];

var quiz = new Quiz(questions);

populate();

