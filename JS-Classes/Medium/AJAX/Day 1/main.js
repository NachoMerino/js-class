///AJAX

//ALL IS COMMENTED

/*
var sendajaxrequestObj = document.getElementById('sendajaxrequest');

sendajaxrequestObj.onclick = function(){

var xhr = new XMLHttpRequest();
//define the destination and the http method
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onload = function(){
	if (xhr.status === 200){
		var response = xhr.responseText;
		console.log(response);
	}else{
		console.log(xhr.status);
	}
}
xhr.send();

}
///Making a bit more functionality

var sendajaxrequestObj = document.getElementById('sendajaxrequest');

sendajaxrequestObj.onclick = function(){

var xhr = new XMLHttpRequest();
//define the destination and the http method
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.onload = function(){
	if (xhr.status === 200){
		console.log('success, status code is: '+ xhr.status);
		var response = xhr.responseText;
		
//PART1
		//task. print out the first 4 key and values
		var getMyStorage = JSON.parse(response);
		console.log(userInfo(getMyStorage));


		function userInfo( userObj ){
    for(var i=0;i<userObj.length;i++){
      var j=0;
      for(var key in userObj[i]) {
        if (j==4){
          break;
          }
          console.log("key= " + key + ", value= " + userObj[i][key]);
          j++;
      }
    }
  }

}else{
		console.log('Error, status code is: '+ xhr.status);
	}
}
xhr.send();

}
*/

//ALL IS COMMENTED


//PART2

function userInfo(userObj) {
    for (var i = 0; i < userObj.length; i++) {
        var j = 0;
        for (var key in userObj[i]) {
            if (j == 4) {
                break;
            }
            console.log(userObj[i][key]);
            j++;
        }
    }
}

var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');
var mainObj = document.getElementById('main');
var TRObj = document.getElementById('TR');
var TDObj = document.getElementById('TD');

///Create a table that contain the first 4 atributes ofthe user object
////https://jsonplaceholder.typicode.com/users
//"id": 1,
//"name": "Leanne Graham",
//"username": "Bret",
//"email": "Sincere@april.biz",
//// same for comments:
////https://jsonplaceholder.typicode.com/comments
userlinkObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success, status code is: ' + xhr.status);
            var response = xhr.responseText;
            var getMyStorage = JSON.parse(response);
            var fourKeys = userInfo(getMyStorage);
            console.log(fourKeys);
            var newTable = document.createElement('table');
            mainObj.appendChild(newTable);
            for (i = 0; i < 4; i++) {
                var newTR = document.createElement('tr');
                newTable.appendChild(newTR);
                for (j = 0; j < 4; j++) {
                    var newTD = document.createElement('td');
                    newTD.innerHTML = fourKeys;
                    newTR.appendChild(newTD);
                }
            }


        } else {
            console.log('Error, status code is: ' + xhr.status);
        }
    }
    xhr.send();
}

/*
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

    for(var i=0;i<basket.length;i++){
			var newgiftObj = document.createElement('li');
			newgiftObj.innerHTML = basket[i].name;
			shoppinglistObj.appendChild( newgiftObj );
		}





*/
/*
commentslinkObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success, status code is: ' + xhr.status);
            var response = xhr.responseText;
            var getMyStorage = JSON.parse(response);
            var fourKeys = userInfo(getMyStorage);
            var newTable = document.createElement('table');
            mainObj.appendChild(newTable);
            for (i = 0; i < getMyStorage.length; i++) {
                var newTR = document.createElement('tr');
                newTable.appendChild(newTR);
                for (j = 0; j < getMyStorage.length; j++) {
                    var newTD = document.createElement('td');
                    newTD.innerHTML = fourKeys;
                    newTR.appendChild(newTD);
                }
            }


        } else {
            console.log('Error, status code is: ' + xhr.status);
        }
    }
    xhr.send();
}
*/

////FINAL SOLUTION

function createUserTable(userArray) {
    var tableObj = document.createElement('table');
    for (var i = 0; i < userArray.length; i++) {
        var tableRowObj = document.createElement('tr');
        var j = 1;
        for (key in userArray[i]) {
            var tableCellObj = document.createElement('td');
            tableCellObj.textContent = userArray[i][key];
            tableRowObj.appendChild(tableCellObj);
            if (j === 4)
                break;
            j++;
        }
        tableObj.appendChild(tableRowObj);
    }
    return tableObj;
}

function createUserTable2(userArray) {
    var tableObj = document.createElement('table');
    for (var i = 0; i < userArray.length; i++) {
        var tableRowObj = document.createElement('tr');
        var j = 1;
        for (key in userArray[i]) {
            var tableCellObj = document.createElement('td');
            tableCellObj.textContent = userArray[i][key];
            tableRowObj.appendChild(tableCellObj);
            if (j === 5)
                break;
            j++;
        }
        tableObj.appendChild(tableRowObj);
    }
    return tableObj;
}


userlinkObj.onclick = function() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success, status code is: ' + xhr.status);
            var response = xhr.responseText;
            var userObj = JSON.parse(response);
            var userTable = createUserTable(userObj);
            console.log(userTable);
            mainObj.appendChild(userTable);
        } else {
            console.log('error, status code is: ' + xhr.status);
        }
    }
    xhr.send();
}

commentslinkObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success, status code is: ' + xhr.status);
            var response = xhr.responseText;
            var userObj = JSON.parse(response);
            var userTable = createUserTable2(userObj);
            console.log(userTable);
            mainObj.appendChild(userTable);
        } else {
            console.log('error, status code is: ' + xhr.status);
        }
    }
    xhr.send();
}

//LOCAL JOSB POST SOMETHING IN OUR SERVER



function createUserTable(userArray) {
    var tableObj = document.createElement('table');
    for (var i = 0; i < userArray.length; i++) {
        var tableRowObj = document.createElement('tr');
        var j = 1;
        for (key in userArray[i]) {
            var tableCellObj = document.createElement('td');
            tableCellObj.textContent = userArray[i][key];
            tableRowObj.appendChild(tableCellObj);
            if (j === 4)
                break;
            j++;
        }
        tableObj.appendChild(tableRowObj);
    }
    return tableObj;
}

function createUserTable2(userArray) {
    var tableObj = document.createElement('table');
    for (var i = 0; i < userArray.length; i++) {
        var tableRowObj = document.createElement('tr');
        var j = 1;
        for (key in userArray[i]) {
            var tableCellObj = document.createElement('td');
            tableCellObj.textContent = userArray[i][key];
            tableRowObj.appendChild(tableCellObj);
            if (j === 5)
                break;
            j++;
        }
        tableObj.appendChild(tableRowObj);
    }
    return tableObj;
}


userlinkObj.onclick = function() {
    mainObj.innerHTML = '';
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';
    mainObj.value = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://35.156.88.18:3050/users');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success, status code is: ' + xhr.status);
            var response = xhr.responseText;
            var userObj = JSON.parse(response);
            var userTable = createUserTable(userObj);
            console.log(userTable);
            mainObj.appendChild(userTable);
        } else {
            console.log('error, status code is: ' + xhr.status);
        }
    }
    xhr.send();
}

commentslinkObj.onclick = function() {
    mainObj.innerHTML = '';
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://35.156.88.18:3050/comments');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('success, status code is: ' + xhr.status);
            var response = xhr.responseText;
            var userObj = JSON.parse(response);
            var userTable = createUserTable2(userObj);
            console.log(userTable);
            mainObj.appendChild(userTable);
        } else {
            console.log('error, status code is: ' + xhr.status);
        }
    }
    xhr.send();
}
/*
curl \
--header "Content-type: application/json" \
--request POST \
--data '{"name": "Max", "email": "max@gmail.com", "username": "maxi"}' \
http://172.16.50.184:3050/users

curl \
--header "Content-type: application/json" \
--request POST \
--data '{"name": "Greetings from your lecturer", "email": "jan.schulz@cileria.com", "body": "Hallo there, let us do some javascript."}' \
http://172.16.50.184:3050/comments

*/
var adduserlinkObj = document.getElementById('adduserlink');

adduserlinkObj.onclick = function() {
    mainObj.innerHTML = '';
    var xhr = new XMLHttpRequest();
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';
    xhr.open('POST', 'http://35.156.88.18:3050/users');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('response successfull: ' + xhr.responseText);
        } else {
            console.log('error: ' + xhr.status);
        }
    }
    var param = {
        name: 'King Dong',
        username: ' Donkey Kong',
        email: 'DK@nintendo.jp'
    };
    xhr.send(JSON.stringify(param));
}


var adduserObj = document.getElementById('adduser');
var addcommentObj = document.getElementById('addcomment');
//adduserObj.style.display = 'block';
//addcommentObj.style.display = 'block';

var addcommentlinkObj = document.getElementById('addcommentlink');

adduserlinkObj.onclick = function() {
    mainObj.innerHTML = '';
    adduserObj.style.display = 'inline-block';
    addcommentObj.style.display = 'none';
    adduserObj.style.color = 'red';
    adduserObj.style.fontSize = "xx-large";
    adduserObj.style.backgroundColor = "lightblue";
    adduserObj.style.border = "thick solid #0000FF";
}

addcommentlinkObj.onclick = function() {
    mainObj.innerHTML = '';
    addcommentObj.style.display = 'block';
    adduserObj.style.display = 'none';
    addcommentObj.style.color = 'orange';
    addcommentObj.style.fontSize = "xx-large";
    addcommentObj.style.backgroundColor = "lightgreen";
    addcommentObj.style.border = "thick solid #ddd";
}


////TASK

/*Form when add  user with 3 inputs(name username email) and 1 button(add user), when you click create a user in the server
 */

var nameObj = document.getElementById('name');
var usernameObj = document.getElementById('username');
var emailObj = document.getElementById('email');
var adduserbuttonObj = document.getElementById('adduserbutton');
var addcommentbuttonObj = document.getElementById('addcommentbutton');
var commentObj = document.getElementById('comment');
var namecommObj = document.getElementById('namecomm');
var emailcommObj = document.getElementById('emailcomm');
var mainObj = document.getElementById('main');


addcommentbuttonObj.onclick = function() {
    mainObj.innerHTML = '';
    console.log(namecommObj.value);
    console.log(emailcommObj.value);
    console.log(commentObj.value);
    var xhr = new XMLHttpRequest();
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';
    xhr.open('POST', 'http://35.156.88.18:3050/comments');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('response successfull: ' + xhr.responseText);
        } else {
            console.log('error: ' + xhr.status);
        }
    }
    var param = {
        body: commentObj.value,
        name: namecommObj.value,
        email: emailcommObj.value,
        
    };
    commentObj.value = '';
    namecommObj.value = '';
    emailcommObj.value = '';
    xhr.send(JSON.stringify(param));
}

adduserbuttonObj.onclick = function() {
    mainObj.innerHTML = '';
    console.log(nameObj.value);
    console.log(usernameObj.value);
    console.log(emailObj.value);
    var xhr = new XMLHttpRequest();
    adduserObj.style.display = 'none';
    addcommentObj.style.display = 'none';
    xhr.open('POST', 'http://35.156.88.18:3050/users');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('response successfull: ' + xhr.responseText);
        } else {
            console.log('error: ' + xhr.status);
        }
    }
    var param = {
        name: nameObj.value,
        username: usernameObj.value,
        email: emailObj.value
    };
    nameObj.value = '';
    usernameObj.value = '';
    emailObj.value = '';
    xhr.send(JSON.stringify(param));
}