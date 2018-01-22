
/*
var obj = { firstname: 'John', age: 20 };
for(var key in obj) {
console.log("key= " + key + ", value=" + obj[key]);
}
*/

var users = [ { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz",
"address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }, "phone": "1-770-736-8031 x56442",
"website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" } }, { "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "address": { "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771", "geo": { "lat": "-43.9509", "lng": "-34.4618" } }, "phone": "010-692-6593 x09125", "website": "anastasia.net",
"company": { "name": "Deckow-Crist", "catchPhrase": "Proactive didactic contingency", "bs":
"synergize scalable supply-chains" } }
];

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
userInfo(users);

function userInfo2( userObj ){
  for(var key in userObj)
    for(var key2 in userObj[key]) {
      console.log("user: " +key + ",key= "+ key2+", value="+ userObj[key][key2]);
        if (key2 === "email"){
          break;
        } 
    }



}
userInfo2(users);