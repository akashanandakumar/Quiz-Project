var questionBank= [
    {
        question : 'HTML stands for ',
        option : [ 'HighText Machine Language',
            'HyperText and links Markup Language',
            'HyperText Markup Language',
            'None of these'
            ],
        answer : 'HyperText Markup Language'
    },
    {
        question : 'CSS stands for ',
        option : [ 'Cascade style sheets',
            'Color and style sheets',
            'Cascading style sheets',
            'None of the above'],
        answer :'Cascade style sheets'
    },
    {
        question : ' The property in CSS used to change the background color of an element is ',
        option : [ 'bgcolor',
            'color',
            'background-color',
            'All of the above'],
        answer : 'background-color'
    },
    {
        question : 'Which type of JavaScript language is',
        option : [ 'Object-Oriented',
            'Object-Based',
            'Assembly-language',
            'High-level'],
        answer : 'Object-Based'
    },
    {
        question : ' In JavaScript, what is a block of statement',
        option : [ 'Conditional block',
            'block that combines a number of statements into a single compound statement',
            'both conditional block and a single statement',
            'block that contains a single statement'],
        answer : 'block that combines a number of statements into a single compound statement'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= questionBank[i].question + ' ' + '?';
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length) 
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}


displayQuestion();