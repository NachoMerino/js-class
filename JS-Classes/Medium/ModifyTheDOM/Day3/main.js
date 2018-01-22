
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


/////DAY 3///
//add an object to the basket array with the following structure. {name: 'apple', price:89} price is 
//random from the function randomNumber()
function randomNumber(max){
  return Math.round(Math.random()*max,0);
}
var basket = [];

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
    var newObject = {name:giftObj.value,price: randomNumber(100) }
    basket.push(newObject);
    console.log(basket); 
    giftObj.value = '';
}


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
  basket.splice(whereIsIt-1, 1);
  giftObj.value = '';
  }
}

var removelastObj = document.getElementById('removelast');

removelastObj.onclick = function(){
  var myObject = document.querySelectorAll('ul#shoopinglist li');
  var myLastItem = document.querySelector('ul#shoopinglist li:last-child');
    if(myObject.length === 0){
     return ;
  }else{
    myLastItem.remove();
     basket.pop();
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
    basket.shift();
  }
}
//create an event that alert the total basket value to the user


var showtotalObj = document.getElementById('showtotal');

showtotalObj.onclick = function(){
  var finalprice = 0;
  for(i=0;i<basket.length;i++){
    finalprice += basket[i].price
  }
  return alert('the final price is: '+ finalprice+ ' Euros.');

}


//JSON, java script object notation.


var obj = {firstname:'nacho', lastname:'merino', city:'berlin',age:31};
console.log(obj);
var objJSON = JSON.stringify(obj);
console.log(objJSON);
var objJS = JSON.parse(objJSON);
console.log(objJS);
///https://jsonplaceholder.typicode.com/users
///http://jsonviewer.stack.hu/

//sesion storage until browser is closed 5m
//local storage will never removed until we clean it 10m


sessionStorage.setItem('weather','cold');

sessionStorage.getItem('weather');

//Extend the evnt of the button saymyname by persistenly save the name to the local storage via setItem


var storageMyName = localStorage.getItem('myname');
if( storageMyName !==  null) {
  var thedateObj = document.getElementById('thedate');
  thedateObj.innerHTML = 'Hello ' + storageMyName;
}

saymynameObj.onclick = function() {
  var mynameObj = document.getElementById('myname');
  var thedateObj = document.getElementById('thedate');
  
  thedateObj.innerHTML =    'Hello ' + mynameObj.value
              + '.Today is ' + getDayName()[0] + '.'
              + 'Only ' + getDayName()[1] + ' days left '
              + 'until the weekend';

localStorage.setItem ( 'myname', mynameObj.value);
}

////

var obj = {firstname:'nacho',lastname:'merino'};
localStorage.setItem ( 'contact',obj);
localStorage.getItem('contact');
var objJSON = JSON.stringify(obj); //convert into an string
console.log(objJSON);
localStorage.setItem('contact',objJSON);
localStorage.getItem('contact');

var x = localStorage.getItem('contact');
console.log(x);
var xOBJ = JSON.parse(x);
console.log(xOBJ);
