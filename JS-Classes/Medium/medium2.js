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


start('Email account creating welcome');

/*
1.
//    Create an array of 3 user objects.
//    Each user has an username, an email, an account_balance and
//    an activation code.
//
//    users:
//    John, john@gmail.com,   0, 2w3e4r5t
//    Mary, mary@hotmail.com, 0, 90ungnvx
//    Bob, bob@gmail.com,     0, 7fnkd9xj

//    2.
//    Create a function attachMailTexts() that accepts one
//    parameter users which looks like 1.
//    attachMailTexts() returns an array of user objects
//    with a new key mailText whose value is based on the 
//    following template string:

var mailTemplate = 
    "Hallo $USERNAME, \n"
    + "Thank you for your registration at MyService.com! \n"
    + "Your Account Balance is $ACCOUNT_BALANCE. \n"
    + "Please hit the activation link in order to \n"
    + "complete your registration: \n"
    + "https://myservice.com/activation/$ACTIVATIONCODE \n"
    + "\n"
    */

    var userData = [
    user0 = {USERNAME:'John',EMAIL:'john@gmail.com',ACCOUNT_BALANCE:0,ACTIVATIONCODE:'2w3e4r5t'},
    user1 = {USERNAME:'Mary',EMAIL:'mary@hotmail.com',ACCOUNT_BALANCE:0,ACTIVATIONCODE:'90ungnvx'},
    user2 = {USERNAME:'Bob',EMAIL:'bob@gmail.com',ACCOUNT_BALANCE:0,ACTIVATIONCODE:'7fnkd9xj'},
    user3 = {USERNAME:'Barbara',EMAIL:'barbara@gmail.com',ACCOUNT_BALANCE:0,ACTIVATIONCODE:'7f4ks9xj'},
    user4 = {USERNAME:'Aramand',EMAIL:'fresd@gmail.com',ACCOUNT_BALANCE:0,ACTIVATIONCODE:'7hnld9xj'},
    user5 = {USERNAME:'Nacho',EMAIL:'nacho@merino.com',ACCOUNT_BALANCE:0,ACTIVATIONCODE:'7f4kh9xl'}
    ];
      

      for(i=0;i<userData.length;i++){
        function attachMailTexts(users){
      var mailTemplate = "Hallo "+users.USERNAME+", \n"
      + "Thank you for your registration at MyService.com! \n"
      + "With your email: "+users.EMAIL+ "\n"
      + "Your Account Balance is "+ users.ACCOUNT_BALANCE +". \n"
      + "Please hit the activation link in order to \n"
      + "complete your registration: \n"
      + "https://myservice.com/activation/"+users.ACTIVATIONCODE+" \n"+ "\n"
      return mailTemplate;
    }//end function    
    print(attachMailTexts(userData[i]));
  }//end of FOR
    end();

    ///real solution

start('real solution')
      


          var mailTemplate = 
            "Hallo $USERNAME, \n"
            + "Thank you for your registration at MyService.com! \n"
            + "Your Account Balance is $ACCOUNT_BALANCE. \n"
            + "Please hit the activation link in order to \n"
            + "complete your registration: \n"
            + "https://myservice.com/activation/$ACTIVATIONCODE \n"
            + "\n"
            function attachMailTexts2(users){
              for(i=0;i<users.length;i++){
                  //var firstReplacement  = mailTemplate.replace('$USERNAME',userData[i].USERNAME);
                  //var secondReplacement = firstReplacement.replace('$ACCOUNT_BALANCE',userData[i].ACCOUNT_BALANCE);
                  //var thirthReplacement = secondReplacement.replace('$ACTIVATIONCODE',userData[i].ACTIVATIONCODE);
                  //print(thirthReplacement);

          //// another way called function sharing
              print(mailTemplate.replace('$USERNAME',users[i].USERNAME)
                                .replace('$ACCOUNT_BALANCE',users[i].ACCOUNT_BALANCE)
                                .replace('$ACTIVATIONCODE',users[i].ACTIVATIONCODE));
}
}
attachMailTexts2(userData);

end();

start('Reverse a word');
var str = 'hello world!';
print(str);
print(reverseWords(str));


function reverseWords(str){

 return str.split(' ').reverse().join(' ');
}
end();

///


function reverseWords2(str){

 return str.split(' ').reverse().join(' ');
}

var str = 'hello wordl!';
var anotherVariable = 'some text';


//anotherVariable = anotherVariable + reverseWords2(str); 
anotherVariable += reverseWords2(str);
print(anotherVariable);

end();
start('longest word');


var str = "The is a lots of stuff to check if this is the longest2word";

function longestWord(string){
  var separate = string.split(' ');
  var arrayNumChar = [];
  for (i=0;i<separate.length;i++){
    arrayNumChar.push(separate[i].length);
  }
  var positionLongest = arrayNumChar.indexOf(Math.max(...arrayNumChar));
  return separate[positionLongest];
    }


print(longestWord(str));


////Right way
start('Another Way');

function longestWord2(string) {
    var array = string.split(" ");
    var longst = "";

    for (var i = 0; i < array.length; i++) {
        if (longst.length < array[i].length) {
            longst = array[i];
        }
        //print(i);
        //print(array[i]);
        //print(longst);
    }
    return longst;
}

print(longestWord2(str));


start('copy paste shit');

function longestWord3(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
print(longestWord3(str));

end();


start('Reverse Character');

function reverseCharacter(string){
 return string.split('').reverse().join('');
}
print(reverseCharacter(str));
