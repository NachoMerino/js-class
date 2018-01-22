function end (){
    console.log(' ');
  console.log('========================================================');
}
function start (x){
  console.log('=-------------------=* '+ x + ' *=-------------------=');
  console.log('');
}
function print (x){
  console.log(x);
}


start('DAY3');


start('Diferent array functions')

// https://www.w3schools.com/jsref/jsref_indexof_array.asp

start('Find the position of Bob using "indexOf()"');
var names = ['hulk', 'thor', 'tony', 'stuart','bob'];
var pos = names.indexOf('bob');
console.log('the indexOf is the position ' +pos);
end();
start('Join two arrays in one with "concat()"');

var names1 = ['hulk', 'thor', 'tony', 'stuart','bob'];
console.log(names1);
var names2 = ['boris', 'juan','antonio','yo'];
console.log(names2);
var together = names1.concat(names2);
console.log(together);
end();

/*
Advanced Task:

(1)

Define a function isPrime(p) with one parameter p.
This functions returns true if p is a prime number
or false if that number is not. A number N
is a prime number if it is only divisible by 1 or N.

Hint: Include for-loops and mod();
*/
start('Advanced task PRIME NUMBERS CHECKER');


function isPrime(p){
var n = p;
var array = [];
for (i=2; i<=n; i++)
{
  array.push(n % i);
}
console.log(array);
function getOccurrence(array, value) {
    value=0;
    return array.filter((v) => (v === value)).length;
}
numberTimes = getOccurrence(array, n);
print(numberTimes);
if(numberTimes === 1){
  print('The number '+n+' is prime');
}else{
  print('The number '+n+' is NOT prime');
}
}

isPrime(17);
end();


/*Write a function that salutes you based on the time
of the day. I.e. "Good Morning", "Good Noon", "Good Afternoon" or "Good Evening". 
*/
start('Advanced task SALUTES');

var d = new Date(); // for now
var time = d.getHours();
var hour = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();

function between(x, min, max){
  return x>= min && x <= max;
}

if(between(time,6,11)){
  print('It is '+hour+' and I wish you a Good Morning');
}else if(between(time,12,16)){
  print('It is '+hour+' and I wish you a Good Noon');
}else if(between(time,17,19)){
  print('It is '+hour+' and I wish you a Good Afternoon');
}else if(between(time,20,21)){
  print('It is '+hour+' and I wish you a Good Evening');
}else(print('It is '+hour+' and I wish you a Good Night'))

end();

// write a function ShiftPop that has one parameter  which is an array. This functions perform pop() on an array
//and afterwards a shift() and then returns the shorter array
start('popshift')


function ShiftPop (p){
p.pop();
p.shift();
return p;
}
print(ShiftPop(['one','two','three','four']));
end();




start('Store Data on OBJECTS');
//objects
var info = {
  firstName: 'Nacho',
  lastName: 'Merino',
  born: 'Spain',
  age: 30
};
print(info);
//Array

var arrayInfo= [];
arrayInfo[0] ='Nacho';
arrayInfo[1] ='Merino';
arrayInfo[2] ='Spain';
arrayInfo[3] =30;
print(arrayInfo);


//lastname in arrray
print(arrayInfo[1]);

//lastaname in object
print(info.lastName);


start('objects can also have functions');


var info = {
  firstName: 'Nacho',
  lastName: 'Merino',
  born: 'Spain',
  age: 30,
  retiresIn: function(){
    return (65 - info.age)
  }
};
print(info.firstName + ' retires in ' + info.retiresIn()+ ' years.');
end();


start('objects can also have arrays');

var info = {
  firstName: 'Nacho',
  lastName: 'Merino',
  born: 'Spain',
  age: 30,
  favouriteFruits: ['apple','banana', 'lemon']
};
print(info.firstName + '\'s likes ' + info.favouriteFruits[1]);
print(info.firstName + ' likes ' + info.favouriteFruits);
print('https://media.giphy.com/media/YAlhwn67KT76E/giphy.gif')
end();

start('Create a Presentation with an Object')



function introductionObject (obj)
{
  console.log('My name is '+ obj.firstName +' '+ obj.lastName+'. I was born in ' + obj.born +'. I live in '+ obj.countryLiving+'. I am '+obj.age+' years old. I live in '+obj.residenceCity+'.')
}

var personal ={
  firstName: 'Naxxcho',
  lastName: 'Merino',
  born: 'Spain',
  countryLiving: 'Germany',
  residenceCity:'Berlin',
  age: 30};
var personal2 ={
  firstName: 'boris',
  lastName: 'Schweiz',
  born: 'USA',
  countryLiving: 'Germany',
  residenceCity:'Berlin',
  age: 90};
  

introductionObject(personal);
introductionObject(personal2);


///other way



function introductionObj(x,y,z,a,b,c){
  var personal ={
  firstName: x,
  lastName: y,
  born: z,
  countryLiving: a,
  residenceCity:b,
  age: c}
  print('My name is '+ personal.firstName +' '+ personal.lastName+'. I was born in ' + personal.born +'. I live in '+ personal.countryLiving+'. I am '+personal.age+' years old. I live in '+personal.residenceCity+'.')
}
introductionObj('Nascho','Merino','Spain','Germany','Berlin',30)
end();