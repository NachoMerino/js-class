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


start('LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS LOOPS');

//loops
  print('Hello World');
  print('Hello World');
  print('Hello World');
  print('Hello World');
  print('Hello World');
  print('Hello World');
end();
  for (var i=0; i<5; i = i+1){ // until i is not true
    print('Hello World');

  }
  end();

    for (var i=0; i<5; i = i+1){ // until i is not true
        print('i = '+i);
    print('Hello World');

  }
  end();

    for (var i=0; i<=5; i = i+1){ // until i is not true
        print('i = '+i);
    print('Hello World');

  }

start('print in looop')
  var names=[
  'john',
  'jane',
  'mary',
  'bob',
  'mark',
  'juan',
  'rodolfo',
  'maincra',
  'revolt'
  ];



for (var i=0; i<(names.length); i = i+1){ // until i is not true
        print(names[i]);}

end();

for (var i=0; i<(names.length); i = i+1){ // until i is not true
        print(names.reverse()[i]);}

end();

start('applessss')

// object excercise apples
var apple1 = {
  color: 'green',
  size: 'small'
}

var apple2 = {
  color: 'red',
  size: 'big'
}

var apples = [
  apple1,
  apple2
  ];


var apple3 = {
  color: 'yellow',
  size: 'medium'
}

apples.push(apple3);




for (var i=0; i<3; i = i+1){ // until i is not true
        print(apples[i].size);}

end();

start('function numArray')
// takes two parameters a & b
// return false if a > b or a < 0 or b < 0
// otherwise it returns an array of all numbers between a and b including a and b
// example:
//a =12 and b=16 return [12,13,14,15,16]



function numArray (a,b){
  if (a > b || b < 0 || a < 0){
    return false;
  }
  //else is not necesary
    var reArray = [];
    for (var i=a; i<=b; i++){
    reArray.push(i);
  }
      return reArray;
}
print(numArray(10,15));
end();


start('Multiple loops');



var star0 = '*';
var star1 = '*';
var star2 = '*';
var star3 = '*';


var stars = star0 + star1 + star2 + star3;
print(stars);
 end();

var stars = '*';
for(var j=1; j<=10; j++){
  stars = stars +'*';
}
print(stars);

end();


var stars = '*';
 for (var i =1; i<10; i++){
  stars= '*';
  for(var j=1; j<=i; j++){
    stars = stars +'*';
  }
print(stars);
 }


start('Print a loop');

var numbers = [
    5,6,10,3,9,10
    ];
print('numbers has ' + numbers.length +' items');

numbers.push(130);
numbers.push(-1);

print('numbers now has '+numbers.length +' items');

//write a for loop that prints out all numbers no matter how big the array is

for (var i=0; i<(numbers.length); i++){
print('numbers has: '+numbers[i]);
}
end();
for (var i=0; i<(numbers.length); i++){
print('numbers has: '+numbers.reverse()[i]);
}

start('while LOOPSSSS');


var i = 0;
while (i < 5){
  console.log('i is smaller than 5 because i is ' + i);
  i = i+1;
}
end();
for (var i=0;i<5; i = i+1){
  console.log('i is smaller than 5 because i is ' + i)
}


start('nested loop');

for(var i=0; i<5; i++){
  console.log('i='+i);

  for(var j=0; j<4; j++){
  console.log('    j='+j);

    for(var k=0; k<3; k++){
  console.log('          k='+k);
      for(var h=0; h<2; h++){
      console.log('              h='+h);
        for(var g=0; g<1; g++){
      console.log('                   g='+g);
        }
      }
    }
  }
}






end();


start('TASKKKKKK')
//task output the elements of the numbers array using while loop and numbers.length
var numbers=[3,62,6,33,7,-1,32,32,344,554,54352,34534,5345,34,534,534,53,453,45,2,31,234,5,657,56765,7567,567];
print('the '+numbers.length+' numbers inside numbers are: ')
var i = 0;
while (i < numbers.length){
  console.log(numbers[i]);
  i++;
}
end();



/*
(3) IP-Checker with JQuery

Create a basic website with a textbox, a button and a div. When the
user clicks the button, an JQuery AJAX Get request will be sent to
http://freegeoip.net/json/$IPADDRESS and you have to replace
$IPADDRESS with an IP address from your textbox. Print out
the country_name and city in the div.

Example: Take a look at: http://freegeoip.net/json/74.125.225.231
Hints: Use JQuery, $ajax.get() and JSON.parse();
*/
start('IP-Checker with JQuery')

// $(selector).load(URL,data,callback);

end();
/*

(4) Recursive Fibonacci 

Write a function fibonacci(n) that recursively computes the 
fibonacci of n.
*/
start('fibonacci(n) function')


function fibonacci (n){
    var array = [0,1];
    
  for (i=3; i<=n; i++)
{
  var result = array[0] + array[1];
  array.push(result);
  array.shift();
}
print('The fibonacci recursive is: '+result);
}

fibonacci(7);



function fibonacci (n){
    var array = [0,1];
    print('The fibonacci recursive is:');
    print(array[0]);
    print(array[1]);
  for (i=3; i<=n; i++)
{
  var result = array[0] + array[1];
  array.push(result);
  array.shift();
  print(result);
}
}

fibonacci(3);

end();


/*(5) Reverse String

Write a function reverse(s) that return the reverse string of s.
Example: reverse('hallo welt') would return 'tlew ollah'.
*/
start('Reverse String');

function reverse(s){
  var toReverse =[s]
  toReverse.reverse(s);
  print(s);
}

reverse('iamgoingtobereverse');

