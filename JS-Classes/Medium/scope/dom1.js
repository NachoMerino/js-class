function end (){
    console.log(' ');
  console.log('========================================================');
}
function start (x){
  console.log('=--------------------=* '+ x + ' *=--------------------=');
  console.log('');
}
function print (x){
  console.log(x);
}
start('Global Scope');

var a = 'a';
first();
function first(){
  var b = 'b';
  second();
  function second(){
    var c = 'c';
    console.log('var a = '+a+', var b = '+b+', var c = '+c);
  }
}


end();
/*
var a = 'a';
first();
function first(){
  var b = 'b';
  second();
  function second(){
    var c = 'c';
    third();
  }
}
function third(){
  var d = 'd';
      console.log('var a = '+a+', var b = '+b+', var c = '+c+', var d = '+d);
}
end();
*/

start('This Variable');


calculateAge(1985);

function calculateAge(year){
  console.log(2017-year);
}


var john = {
    name: 'Juan',
    yearOfBirth: 1990,
    calculateAge: function(){
      console.log(2017 - this.yearOfBirth);//this is the main part of the container
    }

}


john.calculateAge();

var julia = {
  name: 'Julia',
  yearOfBirth: 1988
}
//function borrowing
julia.calculateAge = john.calculateAge;
julia.calculateAge();

end();
start('Hoisting');

function hoist1(){
  window.a = 20;
  var b = 100; //if we set var a then a is inside
}
hoist1();
console.log(a);
//console.log(b);

end();
start('hoisting 2');
function hoist2(){
  console.log(mesage);
  var mesage = 'this is hoisting';
  //console.log(mesage);
}

hoist2();

end();
start('scope');

if(true){
  var name = 'hammad';
}

console.log(name);

for(var i=0;i<10;i++){
  console.log('i is '+i);
}

console.log('at the end i is: '+i);

//variable just for the part

if(true){
  let name = 'hamd';//now its outside the window and can not be access from outside
  console.log(name);//just from inside
}
console.log(name);

//scope2

if(true){
  var name = 'Nass';
  let age = 30;
}
console.log(name);
//console.log(age);



//EXERCISE

start('Execise');

/*
var alice = {
  name: 'Alice',
  yearBirth: 1990,
  city: 'Berlin',
  cityBorn: 'London',
  friends: ['Hammad', 'John'],
  helloText: 
         'Hello my name is %NAME. \n'
      +  'I live in %CITY and I was \n'
      +  'born in %CITYBORN in the year \n'
      +  '%YEARBORN, so I am %AGE years old.\n'
      +  'I have %NUMFRIENDS friends. Their \n'
      +  'names are %FRIENDSNAMES. \n'

}

// 1. Attach a method calculateAge() to Alice prints out the age of Alice
// 2. Attach a method introduce() that generates an introduction text 
//    based on helloText. Find proper replacements for the template tags.
// 3. Create similar objects for the friends Hammad and John. 
//    
//    John, born 1987 in New York, lives in Hamburg
//    Hammad, born 1982 in Glasgow, lives in Berlin
//
// 4. For John and Hammad, attach calculateAge() and introduce() 
//    without copy-pasting it.

*/

var alice = {
  name: 'Alice',
  yearBirth: 1990,
  calculateAge: function(){
    return (2017 - this.yearBirth);
  },
  city: 'Berlin',
  cityBorn: 'London',
  friends: ['Hammad', 'John'],
  helloText: 
         'Hello my name is %NAME. \n'
      +  'I live in %CITY and I was \n'
      +  'born in %CITYBORN in the year \n'
      +  '%YEARBORN, so I am %AGE years old.\n'
      +  'I have %NUMFRIENDS friends. Their \n'
      +  'names are %FRIENDSNAMES. \n',
  introduce: function(){
    console.log(this.helloText.replace('%NAME',this.name)
                          .replace('%CITY',this.city)
                          .replace('%CITYBORN',this.cityBorn)
                          .replace('%YEARBORN',this.yearBirth)
                          .replace('%AGE',this.calculateAge())
                          .replace('%NUMFRIENDS',this.friends.length)
                          .replace('%FRIENDSNAMES',this.friends.join(', ')));
  }

}
console.log(alice.calculateAge());
alice.introduce();

//OUTSIDE FORM

var hammad = {
  name: 'Hammad',
  yearBirth: 1982,
  city: 'Berlin',
  cityBorn: 'Glasgow',
  friends: ['Hammad', 'Alice', 'juan', 'Doe', 'Gru', 'Tres'],
}
hammad.helloText = alice.helloText;

hammad.calculateAge = function calculateAge(){
    return (2017 - this.yearBirth);
  }

hammad.introduce = function introduce(){
    console.log(this.helloText.replace('%NAME',this.name)
                          .replace('%CITY',this.city)
                          .replace('%CITYBORN',this.cityBorn)
                          .replace('%YEARBORN',this.yearBirth)
                          .replace('%AGE',this.calculateAge())
                          .replace('%NUMFRIENDS',this.friends.length)
                          .replace('%FRIENDSNAMES',this.friends.join(', ')));
  }

console.log(hammad.calculateAge());
hammad.introduce();




var john = {
  name: 'John',
  yearBirth: 1987,
  city: 'Harmburg',
  cityBorn: 'New York',
  friends: ['Alice', 'John'],
  helloText: 
         'Hello my name is %NAME. \n'
      +  'I live in %CITY and I was \n'
      +  'born in %CITYBORN in the year \n'
      +  '%YEARBORN, so I am %AGE years old.\n'
      +  'I have %NUMFRIENDS friends. Their \n'
      +  'names are %FRIENDSNAMES. \n',

}

john.calculateAge = alice.calculateAge;
console.log(john.calculateAge());
john.introduce = alice.introduce;
john.introduce();
//SECOND FORM
john.calculateAge = hammad.calculateAge;
console.log(john.calculateAge());
john.introduce = hammad.introduce;
john.introduce();