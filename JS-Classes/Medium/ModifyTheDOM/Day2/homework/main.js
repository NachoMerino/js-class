
console.log('hallo world');

//access de element by ID
var greetingObj = document.getElementById('greetings');//create the ID in HTML
//move <script> to the end
greetingObj.innerHTML = 'Hello World';


//read out the text from the textbox
var saymynameObj = document.getElementById('saymyname');
//add a function to the object
// onclick is for execute when its click



saymynameObj.onclick = function(){
  //alert('hi');
  var mynameObj = document.getElementById('myname');
  alert('text is '+ mynameObj.value);
}

//SAY MY NAME

saymynameObj.onclick = function(){
  var mynameObj = document.getElementById('myname');
 greetingObj.innerHTML = 'Hello '+ mynameObj.value;
}

///replace <p>How are you?</p> with 'Hello JAN', where JAN is the name os the textbox, with an ID="thedate"

saymynameObj.onclick = function(){
  var saymynameObj = document.getElementById('saymyname');
  var mynameObj = document.getElementById('myname');
  var thedateObj = document.getElementById('thedate');
  thedateObj.innerHTML = 'Hello '+ mynameObj.value;
}


function getDayName(){
  var days = [
  'monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  var date = new Date();
  var day = date.getDay();
  return [days[day -1],5-day];
}
console.log(getDayName());
//Add to our previous code


saymyname.onclick = function(){
var mynameObj = document.getElementById('myname');
var thedateObj = document.getElementById('thedate');
  thedateObj.innerHTML = 'Hello '+ mynameObj.value+' today is '+getDayName()[0]+' sooo '+getDayName()[1]+' days to WEEEEEEKEND!';
}
/////DAY2

//document.queryselector('div.somedivs');
console.log(document.querySelector('div.somedivs'));
console.log(document.querySelector('somedivs'));
console.log(document.querySelector('.somedivs'));
//document.querySelectorAll('div.somedivs')
console.log(document.querySelectorAll('div.somedivs'));

/*
Most used selector

*--> Select all the elements
.CLASSNAME --> Elements with the classname


*/
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('li a'));
console.log(document.querySelectorAll('li > a'));
console.log(document.querySelectorAll('li.linklist1 a'));
console.log(document.querySelectorAll('li.linklist1 > a'));
//CREATE DOM ELEMENTS

//document.createElement(tag)

var newHeading = document.createElement('H1');
newHeading.innerHTML = 'Hello World, again';
var somedivObj = document.getElementById('somediv');
somedivObj.appendChild(newHeading);

///EVENTS LIST


var addgiftObj = document.getElementById('addgift');

addgiftObj.onclick = function(){
  var newItem = document.createElement('li');
  var giftObj = document.getElementById('gift');
  newItem.innerHTML = giftObj.value;
  var shoopinglistObj = document.getElementById('shoopinglist');
  shoopinglistObj.appendChild(newItem);
}

//validate the name of the new gift with a rule, must be not empty, if is empty user should see an alert "No empty items alowed"

var addgiftObj = document.getElementById('addgift');

addgiftObj.onclick = function(){
  var newItem = document.createElement('li');
  var giftObj = document.getElementById('gift');
    if (giftObj.value.length == 0) {
    return alert('No empty items alowed');
  }
  newItem.innerHTML = giftObj.value;
  var shoopinglistObj = document.getElementById('shoopinglist');
  shoopinglistObj.appendChild(newItem);

}

//clean the textbox after an item is added
var addgiftObj = document.getElementById('addgift');

addgiftObj.onclick = function(){
  var newItem = document.createElement('li');
  var giftObj = document.getElementById('gift');
    if (giftObj.value.length == 0) {
    return alert('No empty items alowed');
  }
    if (giftObj.value == 'Mother fucker'){
      giftObj.value = '';
      return alert('Your mother!');
  }
  newItem.innerHTML = giftObj.value;
  var shoopinglistObj = document.getElementById('shoopinglist');
  shoopinglistObj.appendChild(newItem);
  giftObj.value = '';


}

//Part4 on click showbasket the user will see and alert that tells abour the current items on the basket



var showbasketObj = document.getElementById('showbasket');

showbasketObj.onclick = function(){

  var myObject = document.querySelectorAll('ul#shoopinglist li')
  var array = [];
  if(myObject.length === 0){
     return alert('The list is empty');
  }else{
    for(i=0;i<myObject.length;i++){
    array.push(myObject[i].textContent);
  }
  }
  
  var newHeading = document.createElement('h5');
  newHeading.innerHTML = '--> Your shopping list until now: ' +array.join(', ')+'.<--';
  var somedivObj = document.getElementById('somediv');
  somedivObj.appendChild(newHeading);
}


///part5 Crear un boton que remueva el ultimo item

var removelastObj = document.getElementById('removelast');

removelastObj.onclick = function(){
  var myObject = document.querySelectorAll('ul#shoopinglist li');
  var myLastItem = document.querySelector('ul#shoopinglist li:last-child');
    if(myObject.length === 0){
     return ;
  }else{
    myLastItem.remove();
  }
}
var removefirstObj = document.getElementById('removefirst');

removefirstObj.onclick = function(){
  var myObject = document.querySelectorAll('ul#shoopinglist li');
  var myFirstItem = document.querySelector('ul#shoopinglist li:first-child');
    if(myObject.length === 0){
     return ;
  }else{
    myFirstItem.remove();
  }
}


////when user write a text the itel will be deleted if can not be found then an alert appear 'item + innerHTML was not found' if txbox is empty an error will appear


var removeItemObj = document.getElementById('removeitem');

removeItemObj.onclick = function(){

  var myObject = document.querySelectorAll('ul#shoopinglist li');
  var giftObj = document.getElementById('gift');
  if(giftObj.value ==''){
    return alert('Fill your text box');
  }
  var array =[];
  for(i=0;i<myObject.length;i++){
    array.push(myObject[i].textContent);
  }
  var whereIsIt = 1 + array.indexOf(giftObj.value);
  if (whereIsIt == 0){
    alert('item "'+ giftObj.value+'" was not found.');
    return giftObj.value = '';
  }else{
  var myItem = document.querySelector('ul#shoopinglist li:nth-child('+whereIsIt+')');
  myItem.remove();
  giftObj.value = '';
  }
}


//homework


var createtableObj = document.getElementById('createtable');

createtableObj.onclick = function(){
  var TRObj = document.getElementById('TR');
  var TDObj = document.getElementById('TD');
  var newTable = document.createElement('table');
  var newTD = document.createElement('td');
  var tableHWObj = document.getElementById('tableHW');
  tableHWObj.appendChild(newTable);
  for(i=0;i<TRObj.value;i++){
    var newTR = document.createElement('tr');
    newTable.appendChild(newTR);
      for(j=0;j<TDObj.value;j++){
      var newTD = document.createElement('td');
      newTD.innerHTML = '0';
      newTR.appendChild(newTD); 
      } 
  }
}
/*
function generateZeroTable( rows, columns ){
var TRObj = document.getElementById('TR');
  var TDObj = document.getElementById('TD');
  var newTable = document.createElement('table');
  var newTD = document.createElement('td');
  var tableHWObj = document.getElementById('tableHW');
  tableHWObj.appendChild(newTable);
  for(i=0;i<rows;i++){
    var newTR = document.createElement('tr');
      for(j=0;j<columns;j++){
      var newTD = document.createElement('td');
      newTD.innerHTML = '0';
      newTR.appendChild(newTD); 
      }
    newTable.appendChild(newTR);
  }
return;


}

*/


statistic = [
['2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-06', '2016-01-07', '2016-01-08', '2016-01-09'],
[ 1304, 1604, 1483, 1903, 1712, 2034, 1515, 1812, 1020 ]
];


function generateDataTable( array ){

  
  var TDObj = document.getElementById('TD');
  var newTable = document.createElement('table');


  if (array[0].length !== array[1].length )

  var newTD = document.createElement('td');
  var tableHWObj = document.getElementById('tableHW');
  tableHWObj.appendChild(newTable);
  for(i=0;i<array[0].length;i++){
    var TRObj = document.getElementById('tr');
    newTR.innerHTML = array[0][i];
    newTable.appendChild(newTR);
  }
  for(j=0;j<array[1];j++){
      var newTR = document.createElement('tr');
      newTR.innerHTML = array[1][j];
      newTR.appendChild(newTD); 
      }
}
function generateDataTable2( array ){




}




console.log(statistic[0][5]);