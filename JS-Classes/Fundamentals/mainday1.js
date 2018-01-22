var name = 'John'; //string
var lastName = 'Cena' //string

//coment

console.log(name);
console.log(lastName);

var age = 26; //number
console.log(age);

var job, married;

job = 'teacher'; //string
married = false; //bolean

console.log(name +' '+ lastName+ ' is a ' + age + ' years old, his job is ' 
+ job + '. Is he married? ' + 'That is ' + married +'.');

// John Cena is a 36 years old, his job is teacher. Is he married? That is false.

console.log(name + ' is ' + age + ' years old and is married: ' + married +'.');


//operators

var now = 2017;
var birthYear = now - age;
console.log(birthYear);

//variable mutation

birthYear = now - 26 *2;
console.log(birthYear);



var ageJohn = 30;
var ageMark = 30;

ageJohn = (3 + 5) * 4 -6;
console.log(ageJohn);
ageJohn = 3 + 5 * 4 -6;
console.log(ageJohn);


//birthday happend...

ageJohn = ageJohn  + 1;
console.log(ageJohn);
ageJohn++;
console.log(ageJohn);

//multiplied
ageJohn *= 2;
console.log(ageJohn);
ageJohn = ageJohn *2;
console.log(ageJohn);


/*This
is
a COWWWWWmentary
    ^__^
   (oo)\_______
  (__)\       )\/\
      ||----w |
      ||     ||
*/



var name = 'Nacho';
var age = 31;
var married = 'yes';

//multiple options
if(married === 'yes'){
  console.log(name + ' is married')
}else{
  console.log(name + ' is not married yet...')
}
//Two options

if(married === 'yes'){
  console.log(name + ' is married')
}else if(married === 'no'){
  console.log(name + ' is not married yet...')
}
//now with boolean type
married = false;
if(married === true){
  console.log(name + ' is married')
}else if (married ===  false){
  console.log(name + ' is not married yet...')
}

//anoher form for booleans

if(true){
  console.log('true is always true');
}

// == (value) vs === (value + datatype)
 if(23 == '23'){
  console.log('hi world');
 }

 if(23 === '23'){
  console.log('hi world');
 }else{
  console.log('make it equal plis');
 }


// = for asign a value
var x;
if(x = 1){
  console.log('hello world');
}
console.log('x is: ' + x);

//another combination

var x = 0;
if(x === 1){
  console.log('hallo welt');
}
console.log('x is: ' + x);


//boolean logic
// x >= y; greater or equal y:true
// x > y; greater y:true
// x <= y; less or equal y: true
// x < y; smaller than y:true

var age = 20;
if(age < 30) {
  console.log('John is teenager');
}else{
  console.log('John is adult');
}

//updated
// AND(&&) --> TRUE if ALL are true
// OR(||)  --> TRUE if ONE is true
// NOT(!)  --> inverts true/false values
var age = 20;
if(age < 20) {
  console.log('John is teenager');
}else if(age >= 20 && age < 30){
  console.log('John is a young man');
}else{
  console.log('John is adult');
}

//Extended exercise:
//60-70 john is a pre-grampa
// greater 70 is a grampa
// les than 0 is not born
// from 0 to 20 is a child
// more than 100 could be death

var age = 101;
if(age < 0){
  console.log('John is not born');
}else if(age > 0 && age <= 10){
  console.log('john is a child');
}else if(age < 20) {
  console.log('John is teenager');
}else if(age >= 20 && age < 30){
  console.log('John is a young man');
}else if (age >= 60 && age < 70){
  console.log('john is a pre-grampa');
}else if(age >= 70 && age<100){
  console.log('john is a grampa');
}else if(age >=100){
  console.log('John is probably death');
}else{
  console.log('John is adult');
}

///Check if the trafficlight is ON

var trafficLight = 'green';

// 'green', 'red', 'yellow'

if (trafficLight === 'green' || 
  trafficLight === 'red' || 
  trafficLight === 'yellow'){
  console.log('The traffic light is running');
}else{
  console.log('It is turn off');
}

///condition switch
//without a break; JS will go on and check next case, because think that both statements are a OR

var job = 'teacher'
switch( job ) {
  case 'teacher':
    console.log('he teach students.')
  break;
  case 'driver':
    console.log('he drives a cab in berlin.')
  break;
  case 'cop':
    console.log('he helps fight crime')
  break;
  default:
  console.log('he does something else')
}


/////Coding chalenge
/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)


*/

var johnHeight = 183 ;
var friendHeight = 183;
var johnAge = 26;
var friendAge = 26;
var resultJohn, resultFriend;

resultJohn = johnHeight + (5*johnAge);
console.log(resultJohn);

resultFriend = friendHeight + (5*friendAge);
console.log(resultFriend);

if (resultJohn > resultFriend){
  console.log('John wins with ' + resultJohn + ' points.');
}else if(resultJohn === resultFriend){
  console.log('Both have the same result with ' + resultJohn + ' points.');
}else{
  console.log('Friend wins with ' + resultFriend + ' points.');
}

///EXTRA 4 case

var johnHeight = 187 ;
var friendHeight = 187;
var extraFriendHeight = 183;
var johnAge = 26;
var friendAge = 26;
var extraFriendAge = 26;
var resultJohn, resultFriend, resultExtraFriend;

resultJohn = johnHeight + (5*johnAge);
console.log(resultJohn);

resultFriend = friendHeight + (5*friendAge);
console.log(resultFriend);

resultExtraFriend = extraFriendHeight + (5*extraFriendAge);
console.log(resultExtraFriend);

if (resultJohn > resultFriend && resultJohn > resultExtraFriend){
  console.log('John wins with ' + resultJohn + ' points.');
}else if(resultJohn === resultFriend && resultFriend=== resultExtraFriend){
  console.log('All have the same result with ' + resultJohn + ' points.');
}else if(resultFriend > resultJohn && resultFriend > resultExtraFriend){
  console.log('Friend wins with ' + resultFriend + ' points.');
}else if(resultExtraFriend> resultJohn && resultExtraFriend > resultFriend){
  console.log('Extra Friend wins with ' + resultExtraFriend + ' points.');
}else if(resultFriend > resultJohn && resultFriend > resultJohn){
  console.log('Friend wins with ' + resultFriend + ' points.');
}else if(resultJohn > resultFriend && resultJohn === resultExtraFriend){
  console.log('John and ExtraFriend have the same points: ' + resultJohn);
}else if(resultFriend > resultJohn  && resultFriend === resultExtraFriend){
  console.log('Friend and ExtraFriend have the same points: ' + resultFriend);
}else if(resultExtraFriend < resultJohn && resultJohn === resultFriend)
  console.log('Friend and John have the same points: ' + resultFriend);
else{
  console.log('Umm one lost and two win with the same result');
}




