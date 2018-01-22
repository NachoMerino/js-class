///Functions as return statements


function getSayWhat() {
    return function() {
        console.log('Hello World');
    }
}

var x = getSayWhat();
console.log(x);




function getSayWhatWhat() {
    return function() {
        return function() {
            console.log('Hello World');
        }

    }
}

var y = getSayWhatWhat()()(); //you can reach the function



//TASK

//create a function interviewQuestion with one parameter job.
//interviewQuestion can return 3 functions

//If job is designer return a question (Can you please explain what is UX-Design is?)
//If job is teacher return a question (what subject do you teach?)
//Otherwise return a question (What do you do?)


function inteviewQuestion(job) {
    if (job === 'designer') {
        return function() {
            console.log('Can you please explain what is UX-Design is?');
        }
    } else if (job === 'teacher') {
        return function() {
            console.log('what subject do you teach?');
        }
    } else {
        return function() {
            console.log('What do you do?');
        }
    }
}

var inteviewDesigner = inteviewQuestion('designer');
var inteviewTeacher = inteviewQuestion('teacher');
var inteviewWorp = inteviewQuestion('worp');

inteviewWorp();
inteviewTeacher();
inteviewDesigner();
/////////////////////////////////////////////
function inteviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what is UX-Design is?');
        }
    } else if (job === 'teacher') {
        return function() {
            console.log('what subject do you teach?');
        }
    } else {
        return function() {
            console.log('What do you do?');
        }
    }
}

var inteviewDesigner = inteviewQuestion('designer');
var inteviewTeacher = inteviewQuestion('teacher');
var inteviewWorp = inteviewQuestion('worp');

inteviewWorp();
inteviewTeacher();
inteviewDesigner('Mike');

///////////////////////////////////




function inteviewQuestion(job) {
    var ty = 'Thank You.'; // we can access ty after the return
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what is UX-Design is? ' + ty);
        }
    } else if (job === 'teacher') {
        return function() {
            console.log('what subject do you teach? ' + ty);
        }
    } else {
        return function() {
            ty += '.';
            console.log('What do you do? ' + ty);
        }
    }
}

var inteviewDesigner = inteviewQuestion('designer');
var inteviewTeacher = inteviewQuestion('teacher');
var inteviewWorp = inteviewQuestion('worp');

inteviewWorp();
inteviewTeacher();
inteviewDesigner('Mike');


///create a function score that has a local variable s, an s is 0 , score returns an anonymus
//function that increments s by 1 and returns s

//Create another function keepScore() that is the result of function score


function score() {
    var s = 0;
    return function() {
        s++;
        return s;
    }
}
var keepScore = score();


// IIFE
//Inmediatetley invoked function expresions


function game() {
    var score = Math.random() * 10;
    if (score >= 5)
        console.log('You WON');
    else
        console.log('You LOSE');
}


(function() {
    var score = Math.random() * 10;
    if (score >= 5)
        console.log('You WON');
    else
        console.log('You LOSE');
})(); // automatic works when () is added to the end.

///TASK

//take a look to the IFEE above, add a parameter goodluck to it, goodluck is a number and should increase 
//the chances of winning

//if goodluck is 2 your score need to be higher than 3 to win
//Call the IFFE with goodluck =5


(function(goodluck) {
    var score = Math.random() * 10;
    if (score >= 5 - goodluck)
        console.log('You WON');
    else
        console.log('You LOSE');
})(1); //the number are the chances


(function(goodluck, name) {
    var score = Math.random() * 10;
    if (score >= 5 - goodluck)
        console.log('You WON, ' + name);
    else
        console.log('You LOSE, ' + name);
})(1, 'nacho'); //the number are the chances


//var answer = prompt('whats your name?');
//ask for something and indroduce it into the variable


/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor
*/




var objHallo = {
  hallo: '',
  sayHallo: function(p){
    this.hallo = p
  }
};

var objPlanet = {
  hola: ''
}

var objSun = {};


objHallo.sayHallo('World');
//method borrowing
objHallo.sayHallo.call(objPlanet, 'planet');//change this. for objplanet
objHallo.sayHallo.call(objSun, 'sun'); //objHallo //objPlanet
objHallo.sayHallo.call(this, 'globe'); //this.hallo



var john = {
  name: 'John',
  age: 28,
  job: 'teacher',
  presentation: function(style, timeOfDay){
    if(style === 'formal'){
      console.log( `Good ${timeOfDay} Ladies and Gentelment, my name is ${this.name}. I am ${this.age} years old. I work as a ${this.job}`);

    }else if(style === 'friendly'){
      console.log(`Hey whats up. I am ${this.name}. I am ${this.age} years old. I work as a ${this.job}. Have a great ${timeOfDay}`);
    }
  }
}

john.presentation('formal', 'morning');

var emily = {
  name: 'emily',
  age: 35,
  job: 'designer'
}

john.presentation.call(emily,'friendly','afternoon');