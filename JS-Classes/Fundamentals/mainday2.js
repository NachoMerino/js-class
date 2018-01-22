/* FUNCTIONS
Re-usable piece of code
can hold lines of code inside

function FUNCTIONNAME (parameter1){
  
}
*/

function end (){
  console.log('========================================================');
}
function start (x){
  console.log('=-------------------=* '+ x + ' *=-------------------=');
}

console.log('hello world');
console.log('how are you today');

var weather = 'good';
if(weather === 'good'){
  console.log('good weather today');
}

//we create a function for have it until end of times
function weatherfunction(){
console.log('hello world');
console.log('how are you today');

var weather = 'good';
if(weather === 'good'){
  console.log('good weather today');
}
}
// good way to re-use the code
weatherfunction();
weatherfunction();
weatherfunction();

// upgrading the function
start('Upgraded1');
function weatherfunction(weather){


//var weather = 'bad'; // erase the parameter and then inicialicen a new one with 'bad'
if(weather === 'good'){
  console.log('good weather today');
}else {
  console.log('no good weather today');
}
}
weatherfunction('good');
weatherfunction('bad');
weatherfunction('good');
end();


//simple function
//Create a function that print P

start('Simple Q function');
function q (p){
  console.log(p);
}

q('hi');

end();
// q('hello world') ----> console prints out Hello World
// q('Dev from Scratch rules') ---> console prints Dev from Scratch rules

start('D(x) Function');
// create a function d(x) whitch prints x * 2

function d (x){
  console.log(x* 2);
}
d(7);
end();

//another example of functions
//multi parameters functions
start('multi parameters function')
function f(x,y){
  console.log('x is ' + x + ' and y is ' + y);
}
// call f using a string, string
f('HI','BYE');
// call f using a number, string
f(42, 'The mean of life');
// call f using a number, number
f(4,6);
// call f using a number, undefined
f(42,);
// call f using a string, null
f('A string',null);
// call f using undefined, string
f(undefined,'muak');
// call f using undefined, undefined
f();
f(undefined,) // first parameter need to be filled if you put comma
f(undefined,undefined);
end();



///Extend the function
//Print out Hello World only when x is greater than 1
// and y is less than 10
start('multi parameters function Extended')
function f2(x,y){
  if(x>1 && y<10){
    console.log('Hello World');
  }else{
    console.log('Change your X '+ x + ' and Y parameters '+ y);
  }
}
f2(1,4);
f2(0,10);
f2(2,9);
f2(10,20);
f2(-1,4);
f2(3,7);
f2();
end();

///extend f again and print hello world
//using q and console log
start('multi parameters function Extended and Re-Extende')

function q(x){
  console.log(x);
}

function f3(x,y){
  if(x>1 && y<10){
    q('Hello World');
  }else{
    q('Change your X '+ x + ' and Y parameters '+ y);
  }
}
f3(1,4);
f3(0,10);
f3(2,9);
f3(-1,4);
f3(3,7);
f3();
end();


/////////
start('New functions');
function getHelloWorld()
{
  return 'hello world';
}

console.log (getHelloWorld());

////upgrading it
function getHelloWorld()
{
  return 'hello world';
}
var hw = getHelloWorld();
console.log (hw);
end();

start('functions with return');
//// write a function f that takes two parameters
// and retunrs its surem using +
// and use the retunr valuce of f(2,6) and
//print it out using console.log

function f(x,y)
{
  return (x + y);
}
console.log (f(2,6));

end();

////

function calculateAge(yearOfBirth)
{
  var age = 2017 - yearOfBirth;
  return age;
}
var ageJohn = calculateAge(1984);
var ageMike = calculateAge(1973);

console.log('the age of John is: ' + ageJohn);
console.log('the age of Mike is: ' + ageMike);
end();
// calculates the years auntil somebody get retired

start('calculate the age of retirement with name');
var reAge = 67;
function untilRetirement (name,age)
{
  var retirement = reAge - age;
  return name +' can retired in ' + retirement + ' years.'
}
console.log(untilRetirement('nacho',31));
end();
/////NEW TASK
/* writte a function that generates a introductions about a person
 parameters:
  firstName, lastName, countryBorn, countryLiving, age, residentCity


  Returns : nothing

  this function creates a text
  write that text using console.log


*/
start('long functions for writing a text')
function introduction (firstName,
                      lastName,
                      countryBorn,
                      countryLiving,
                      age,
                      residentCity)
{
  console.log('-Hello my name is '+ firstName +' '+ lastName +' I was born in '+(2017 - age)+' in '+ countryBorn + ' and now I am living in ' + countryLiving + ' in the city of ' + residentCity+'.');
}

introduction('ignacio','merino','spain','germany','31','berlin');
end();


///////ARRAYS

var name0 = 'John';
var name1 = 'Mary';
var name2 = 'Bob';
var name3 = 'Peter';
var name0 = 'Francisco';

start('ARRAYS');
//first way to inicialate an arry
var names = ['John','Mary','Bob','Peter','Francisco'];
// second way
var years = (1990,1969,1948);

console.log(names);
console.log(names[2]); // numbers start with 0 not 1
console.log(names[5]);
//change de name of mary to Iris
names[1]='Iris';
console.log(names);

end();

///create an array that consist of firstName, lastName and age
start('My ARRAY')
var myInfo = ['Nacho','Merino',31];
console.log(myInfo);
//adding info into our ARRAY[push]link
myInfo.push('Berlin');
console.log(myInfo);
//adds another at the begining [unshift]
myInfo.unshift('Mr.');
console.log(myInfo);
// remove the last element [pop]
myInfo.pop();
console.log(myInfo);
// remove the first [shift]
myInfo.shift();
console.log(myInfo);
end();

//Task

start('Create a Number Array');

/*Create an array that consists
of the numbers 5 to 10
Name: numberArray
-Change the value the element with index 1 to 7
-Add an element 11 at the end
-add an element -1 at the begining
-

*/

var numberArray= [5,6,7,8,9,10];
numberArray[1] = 7;
numberArray.push(11);
numberArray.unshift(-1);
console.log(numberArray);
end();