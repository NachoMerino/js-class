function end (){
    console.log(' ');
  console.log('========================================================');

}
function start (x){
  console.log(' ');
  console.log('=--------------------=* '+ x + ' *=--------------------=');
  console.log('');
}
function print (x){
  console.log(x);
}


start('3.Arrays')
/*
var yearBorn = [1984,1982,1957,1930,2001,1996];
var emptyArray =[];
for (var i=0; i < yearBorn.length;i++){
  emptyArray.push(2017-yearBorn[i]);
}

print(emptyArray);

for (var i=0; i<emptyArray.length; i++){
  if(emptyArray[i]>=18){
    console.log('The person with '+emptyArray[i]+ ' years is adult');
  }else {
    console.log('The person with '+emptyArray[i]+ ' years is NOT adult');
  }
}
*/


var yearBorn = [1984,1982,1957,1930,2001,1996];
var yearBorn2 = [1944,2013,1984,2005,2008,1936];
var emptyArray =[];

function printFullAge (x){
  var emptyArray =[];
for (var i=0; i < x.length;i++){
  emptyArray.push(2017-x[i]);
}

print(emptyArray);
var trueFalse =[];
for (var i=0; i<emptyArray.length; i++){
  if(emptyArray[i]>=18){
    trueFalse.push(true);
  }else {
    trueFalse.push(false);
  }
}
console.log(trueFalse);
}

printFullAge(yearBorn2);
printFullAge(yearBorn);



////TEACHER
start('teacher');
var yearsBorn = [1999,1985,2008,2001];
var emptyArray = [];

for(var i=0;i<yearsBorn.length; i++){
  var age = 2017 - yearsBorn[i];
  emptyArray.push(age);
}
console.log(emptyArray);

for(i=0; i<emptyArray.length; i++){
  if (emptyArray[i]<18){
    console.log('Age is '+ emptyArray[i]+ '. The person is minor' );
  }else{
    console.log('Age is '+emptyArray[i]+ '. The person is adult');
  }
}

function printFullAge2(arrayYears){
  var returnArray = [];
  for (var i=0; i < arrayYears.length; i++){
    returnArray.push(2017- arrayYears[i]);
  }
  for(i=0; i<returnArray.length; i++){
  if (returnArray[i]<18){
    returnArray[i] = false;
  }else{
    returnArray[i]=true;
  }
}
return returnArray;
}

var full_1 = printFullAge2([1965,1998,2014]);
var full_2 = printFullAge2([1945, 2015, 1992]);

print(full_1);
print(full_2);



end();

start('4. Arrays and Nested Loops');

function numberTable(rows,columns ){
var array=[];
var array2=[];
for (i=0;i<rows;i++){
    array.push(array2);
      for (j=0;j<columns;j++){
    array.push(0);
}
}
print(array);
}

numberTable(5,4);

///Teacher
start('teacher');
function numberTable2(rows,columns ){
  var returnArray = [];
  for(var i=0;i<rows;i++){
    var subArray=[];
    for(var j=0;j<columns;j++){
        subArray.push(0);
    }
    returnArray.push(subArray);
  }
  return returnArray;
}

console.log(numberTable2(3,3))

///Modify the code so that instead of all items of the inner arrays being 0,
///they should have an ascending number from 0 to columns.


function numberTable3(rows,columns ){
  var returnArray = [];
  for(var i=0;i<rows;i++){
    var subArray=[];
    for(var j=0;j<columns;j++){
        subArray.push(j+1);
    }
    returnArray.push(subArray);
  }
  return returnArray;
}

console.log(numberTable3(4,4))

///Modify the code so that numberTable(3, 4) would return
//[ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ];

function numberTable4(rows,columns ){
  var returnArray = [];
  for(var i=0;i<rows;i++){
    var subArray=[];
    for(var j=0;j<columns;j++){
        subArray.push((j+1)+(i*columns));
    }
    returnArray.push(subArray);
  }
  return returnArray;
}

console.log(numberTable4(8,9));