
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
