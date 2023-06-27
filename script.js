var startButtonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var currentQuestion = 0
var timerEl = document.querySelector("#timer");
var timer;
var timeLeft = 30;



function startQuiz() {
    var randomQuestion = Math.floor(Math.random() * Questions.length); 
    answer = Question[randomQuestion];


    // var question = localStorage.getIem("email");
    // var answer = localStorage.getItem("answer");

    // document.querySelector("#questions").textContent = quizQuestions;
    // document.querySelector("#answers").textContent = quizAnswers;
    
}


startButtonEl.addEventListener("click", function(event) {
    event.preventDefault();

    // var question = document.querySelector("#questions").value;
    // var answer = document.querySelector("#answers").value;
    // if (question === true) {
    //     displayMessage("Incorrect", "Incorrect Answer");
    // } else {
    //     displayMessage("correct", "Correct Answer!");

    //     localStorage.setItem("question", question);
    //     localStorage.setItem("answer", answer);
    // }

    // var element = event.target;
    // if (element.matches("#start")) {
    //     var state = element.getAttribute("#questions")
    //     if (state ==="#answer") {
    //         element.textContent= element.Questions;
    //         element.state = "#question"
    //     }
    // }

});


function startTimer(){
    setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

    }, 1000)
}
startTimer(); 

var Questions = [{
    question: "Commonly used data types DO NOT include: ",
    answer: [{ text: "strings", isCorrect: false },
    { text: "booleans", isCorrect: false},
    {text: "alerts", isCorrect: true},
    { text: "nubers", isCorrect: false}
    ],

    question: "The condition in an if/else statement is enclosed within ____.",
    answer: [{ text: "quotes", isCorrect: false },
    { text: "curly brackets", isCorrect: true },
    { text: "parenthesis", isCorrect: false },
    { text: "square brackets", isCorrect: false },
    ],


    question: "Arrays in JavaScript can be used to store ____.",
    answer: [{ text: "numbers and strings", isCorrect: false },
    { text: "other arrays", isCorrect: false },
    { text: "booleans", isCorrect: false },
    { text: "all of the above", isCorrect: true },
    ],

    question: "String values must be closed within ____ when being assigned to variables.",
    answers: [{ text: "commas", isCorrect: false },
    { text: "curly backets", isCorrect: false },
    { text: "quotes", isCorrect: true },
    { text: "parenthesis", isCorrect: false},
    ]
}
]


var currentQuestion = 0
var score = 0

function loadQuestion() {
    var question = document.getElementById("questions")
    var answer = document.getElementById("answers")
 
    question.textContent = Questions[currentQuestion].q;
    answer.innerHTML = ""
 
    for (let i = 0; i < Questions[currentQuestion].length; i++) {
        var choicesdiv = document.createElement("div");
        var choice = document.createElement("input");
        var choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        answer.appendChild(choicesdiv);
    }
}
 
loadQuestion();
 
function loadScore() {
    var totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQues();
    } else {
        document.getElementById("answers").remove()
        document.getElementById("questions").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    var selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currentQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}






// function loadQuestion(currentQuestion) {
//     var question = Object.keys(allQuestions)[currentQuestion];
//     questionsEl.innerHTML="";
//     questionsEl.innerHTML=question;
// }
// loadQuestion();

// function loadAnswers(currentQuestion) {
//     var answers = allQuestions[Object.keys(allQuestions)[currentQuestions]];
//     answersEl.innerHTML="";
//     for(var i = 0; i<answers.length; i+=1) {
//         var newDiv=document.createElement('div'),
//         text=document.createTextNode(answers[i]);

//         newDiv.appendChild(text);
//         newDiv.addEventListener("click", checkAnswers(i, answers));

//         answersEl.appendChild(newDiv);
//     }
// }

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score