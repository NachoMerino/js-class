//DAY1

//ALL are objects OOP(Objects Oriente Programming)
//We tape lots,for individuals, but can be made all in one generic.
//And the individuals are instances of the generic(constructor).
//John, Jane, Paco are the instances of the Generic Object

//Inheritance

//PRototype --> Every object has an atribute called prototype

var john = { name: 'john', yearOfBirth: 1990, job: 'teacher' };

//New way, fuction constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
var john = new Person('John', 1990, 'teacher');
//new is related with .this and refer to the object not to the global scope


//FOR CHECKING!
//var ages = arrayCalc(years, calculateAge);

//TASK create 2 other objects jane(1991, designer) and mark(1948, retired)
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function() {
        console.log(2017 - this.yearOfBirth);
    }
}
var jane = new Person('Jane', 1991, 'designer');
var mark = new Person('Mark', 1948, 'retired');

console.log(mark);
console.log(jane);

jane.calculateAge();
mark.calculateAge();

//Prototype just exist ONCE in the memory, so we save lots of memory

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} //outside of the function, inside can not work
Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
}

var jane = new Person('Jane', 1991, 'designer');
var mark = new Person('Mark', 1948, 'retired');
console.log(mark);
console.log(jane);
jane.calculateAge();
mark.calculateAge();

Person.prototype.lastname = 'Smith';

console.log(john.hasOwnProperty('job'));
console.log(john.hasOwnProperty('lastname'));


console.log(jane instanceof Person);



var x = [2, 5, 7];
console.log(x.length);
console.log(x.pop());



//2nd way
// first create the prototype and then instance via Object.create()

var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
}

var sandra = Object.create(personProto);
sandra.yearOfBirth = 1980;
sandra.job = 'designer';

console.log(sandra);
sandra.calculateAge();


//PRimitives vs objects

var a = 23;
var b = a;

console.log('a is: ' + a);
console.log('b is: ' + b);

//Task

//Create un object obj1(classic one), atributes john and 26 age

//Create another object obj2 and set it to obj1.

//Analyse the obj2

//change obj1 to 30
//Check obj2 again

//what happend?

var obj1 = { name: 'John', age: 26 };
var obj2 = obj1;
console.log(obj2);
obj1.age = 30
//var obj1 = {name:'John',age:30};
//var obj2 = obj1;
console.log(obj2);


var age = 32;
var obj = {
    name: 'nacho',
    city: 'berlin'
}

function change(a, b) {
    a = 30;
    b.city = 'new york';
}

change(age, obj);

console.log('age is ' + age);
console.log('city is ' + obj.city);


//function as arguments

var years = [1998, 1965, 1937, 2005, 1998, 1985, 1991];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(yearOfBirth) {
    return 2017 - yearOfBirth
}

var ages = arrayCalc(years, calculateAge)
console.log(ages);


///TASK

//Create an array fullAges which consists of booleansbased on the array ages is true if
//is grater or equal to 18
//Use arrayCalc for this

var years = [1998, 1965, 1937, 2005, 1998, 1985, 1991];

function calculateAge2(yearOfBirth) {
    if (2017 - yearOfBirth > 17 ) {
        return true
    } else {
        return false
    }
    return bolean;
}


function arrayCalc2(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

console.log(arrayCalc2(years, calculateAge2));

///MORE EXAMPLES


function sayWhat (fn){
  console.log(fn());
}
function sayHelloWorld(){
  return 'Hallo world';
}

sayWhat(sayHelloWorld);

function sayHelloPlanet(){
  return 'Hello Planet';
}

sayWhat (sayHelloPlanet);



///Repeat it
var age =1986

function nachoAge(){
  return 'The Age of nacho is: '+ howMany(age);
}

function repeatIt (times, fn){
  for (var i=0;i<times;i++){
    console.log(fn());
  }
}
repeatIt(howMany(age),nachoAge);


function howMany(years){
  return 2017 - years
}


///task
///create a funcion maxHeartRate() with one parameter age
/// it returns Math.round(206.9 - (0.67 * age)) if the person is between 18 and 81
/// Otherwise returns -1

/// Apply this method with arrayCalc()



function maxHeartRate(age){
  var x = 2017 - age;
  if (x > 18 && x < 81)
    return Math.round(206.9 - (0.67 * x));
  else
    return -1;
  
  
}


function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

console.log(arrayCalc(years,maxHeartRate));