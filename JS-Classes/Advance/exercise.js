/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){
    var question = function(question, answer1, answer2, answer3) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
}
var question1 = new question('What is the color of transparent water?', 'transparent', 'not transparent', 'its not possible');
var question2 = new question('What is the color of the white house?', 'white', 'transparent', 'green');
var question3 = new question('It is HTML a programing languaje', 'yes', 'no');
var question4 = new question('Asus makes laptops', 'yes', 'no');

var arrayQuestions = [question1, question2, question3, question4];

function randomQuestion(arr) {
    var number = Math.floor((Math.random() * arr.length));
    return arr[number];
}


function questionMaker(randomQuestion) {
    if (randomQuestion.answer3 != undefined) {
        var theAnswerHere = prompt(`  ${randomQuestion.question} 
        Answer 1:  ${randomQuestion.answer1}
        Answer 2:  ${randomQuestion.answer2}
        Answer 3:  ${randomQuestion.answer3}`);
        switch (theAnswerHere) {
            case randomQuestion.answer1:
                text = `Yes, "${randomQuestion.answer1}", is the correct answer`;
                alert(text);
                break;
            case randomQuestion.answer2:
                text = 'No, no, no, no....try again';
                alert(text);
                questionMaker(randomQuestion);
                break;
            case randomQuestion.answer3:
                text = 'Not even close my friend, recheck it.';
                alert(text);
                questionMaker(randomQuestion);
                break;
            default:
                text = 'Write the answer like it is written';
                alert(text);
                questionMaker(randomQuestion);
                break;

        }
        return 'The game its over';
    } else {
        var theAnswerHere = prompt(`  ${randomQuestion.question} 
        Answer 1:  ${randomQuestion.answer1}
        Answer 2:  ${randomQuestion.answer2}`);
        switch (theAnswerHere) {
            case randomQuestion.answer1:
                text = `Yes, "${randomQuestion.answer1}", is the correct answer`;
                alert(text);
                break;
            case randomQuestion.answer2:
                text = 'No, no, no, no....try again';
                alert(text);
                questionMaker(randomQuestion);
                break;
            default:
                text = 'Write the answer like it is written';
                alert(text);
                questionMaker(randomQuestion);
                break;

        }
    }
}

questionMaker(randomQuestion(arrayQuestions));
});



////The best one


(function(){

var Question = function (question,answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

this.showPossibleAnswers = function(){
    console.log(this.question + '\n');
    for(var i=0;i <this.answers.length;i++){
        console.log(i+ ' : '+ this.answers[i]);
    }
}

var q1 = new Question('Is the beamer from epson?',['yes','no'],0);
var q2 = new Question('Is FRITZS a router company?',['no','yes'],1);
var q3 = new Question('Is RONALDO a football player?',['yes','no'],0);
var q4 = new Question('Is the WATER transparent?',['yes','no'],0);
var q5 = new Question('Is HP a company?',['yes','no','yes,with a ps4'],0);
var q6 = new Question('Is HTML5 a programming languaje?',['yes','no','could be'],1);

var questions = [q1,q2,q3,q4,q5,q6];
var randomNumber = Math.floor((Math.random() * questions.length));

questions[randomNumber].showPossibleAnswers();

var answer = prompt(questions[randomNumber].question);
if (answer == questions[randomNumber].correctAnswer){
    console.log('yes, you are right');
}else{
    console.log('Nope');
}

})();
