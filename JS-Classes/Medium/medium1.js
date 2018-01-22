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

start('Medium');

start('string manipulation');

start('check the longitude of a text');
var txt = 'abczxv';
print(txt);
print(txt.length); //check the length of our text

///
start('Check where a text appear inside the text');
var txt = "please locate where 'locate' string occurs in this text";
print(txt);
print(txt.length);
print(txt.indexOf("locate")); //show the number of the position where 'locate' is.

print(txt.lastIndexOf("locate")); // return the last occurence of the word we searching for.

///
start('Where start the character we looking for..')
var txt = "I am Aemal and I love coding";

var result = txt.indexOf("I",5); // with 5 you start searching on this point and ignore everything behind
// IMPORTANT it is sensible to i or I

print(result);
//

start('search')
var txt = "I am Aemal and I love coding";

var result = txt.search("am");

print(result);

///
start('Pick the part you select')
var txt = "Apple, banana, kiwi";
print(txt);
var result = txt.slice(7,13);//left to right
print(result);
var result = txt.slice(0,5);//left to right
print(result);
var result = txt.slice(15,19);//left to right
print(result);
var result = txt.slice(-4,);//right to left
print(result);
var result = txt.slice(-12,-6);//right to left
print(result);
///
start('substring');
var txt = "Apple, banana, kiwi";
print(txt);
var result = txt.substring(7,13);
print(result);
//
print('substr');
var txt = "Apple, banana, kiwi";
print(txt);
var result = txt.substr(8,6);// where to start and then long of what to cut
print(result);

///
start('REPLACE');

var txt = "Apple, banana, kiwi";
print(txt);
var result = txt.replace('kiwi','orange');
print(result);


start('toUpperCase');

var txt = "Apple, banana, kiwi";
print(txt);
var result = txt.toUpperCase();
print(result);

start('toLowerCase');
var txt = "APPLE, BANANA, KIWI";
print(txt);
var result = txt.toLowerCase();
print(result);

///
start('concat');
var firstName = 'nacho';
var lastName = 'merino';

var result = firstName.concat(" ",lastName);
print(result);

///

start('charAt');
str = 'hello word';

result = str.charAt(2);

print(result);

///
start('split')
str = 'a,b,c,d,e';

result = str.split(','); ///divide the paramiters picking the coma as reference

print(result);

////
str = 'a$b$c$d$e';

result = str.split('$'); ///divide the paramiters picking the $ as reference

print(result);


start('task with split')
///split the following string and store it in an array in ascending order


str = 's,d,g,j,a,d,e,c';

var array=[];
result = str.split(',');
for(i=0;i<result.length;i++){
  array.push(result[i])
}
array.sort();
print(array);
end();

//teacher
str = 's,d,g,j,a,d,e,c';

result = str.split(',').sort();

print(result);
end();
start('Words Counter');
/*Create a function named countWords which takes two
parameters; string, searchTerm and returns the total
occurencies of the given searchTerm.*/


str = 'Devugees is a good learning institute, where we learn good stuff, such as HTML,CSS and JavaScript';

function countWords (string,searchTerm){
  var words = string.split(' ');
  var totalMatches = 0;
  for (var i=0;i<words.length;i++){
    if (words[i] == searchTerm){
      totalMatches++;
    }
  }
  if (totalMatches >0){
    return 'There is '+totalMatches+' coincidences for "'+searchTerm+'" in the string.';
  }else {
    return 'There is NO coincidences for "'+searchTerm+'" in the string.';
  }
  
}
print(countWords(str,"JS"));


start('Words Counter - One line by teacher');

function countWords2 (string, searchTerm){
  return str.split(searchTerm).length -1;
}
print(countWords2(str,"good"));


end();

start('Email Address valdator');

/*Create a function validateEmailAddress with one parameter email that returns
true if the string email meets all of the following conditions.
1. it consists of only one @
2. the part left of the @
– has maximum 32 characters, minimum 8 characters
– does not only contain numbers, at least one character
– does not contain $ or %
3. the part right of the @
– Ends with either “.com”, “.de” or “.org” (the domain name)
– The part between @ and the domain name is maximum 16 characters, minimum 6
characters
*/

function validateEmailAddress (email){
  var result = email.search("@");
if(result>0){
  arrayEmail = email.split('@');
  //print(arrayEmail[0].search("$"));
  //print(arrayEmail[0].search("%"));
  if(arrayEmail[0].length>=8 && arrayEmail[0].length<=32){
  
    if(arrayEmail[0].search("$")<0 && arrayEmail[0].search("%")<0 ){
      return arrayEmail[0]+' contain a not alowed character (%,$).'
    }else{
      checkNum = arrayEmail[0].split('');
      var alphabet;
      var k=0;
      alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      //print(alphabet);
      //print(checkNum);
      for(i=0;i<arrayEmail[0].length;i++){
        for(j=0;j<alphabet.length;j++){
            //print(checkNum[i]);
            //print(alphabet[j]);
          if(checkNum[i]===alphabet[j]) {
            k++
            }
          }
        }
        //print(k);
        if (k>0){
            //Second part
                var dot = arrayEmail[1].search(','); //put a comma instead a dot, does not work.
                //print(arrayEmail[1]);
                //print(dot);
                secondPart = arrayEmail[1].split(',')
                //print(secondPart);
                if(dot>0){
                  if (secondPart[1]=='com' || secondPart[1]=='de' || secondPart[1]=='org'){
                    if(secondPart[0].length>16 || secondPart[0].length<6){
                      return 'Your domain name "'+secondPart[0]+'" must have between 8 and 16 characters';
                    }else{
                      return alert('Your email: '+email+' it is perfect.');
                    }
                  }else{
                    return 'Your email only can end in .de .com or .org'
                  }
                }else{
                  return 'You forgot the dot in .'+secondPart[1];
                }
                //End second part
              }else{
              return 'You should have a non numerical character';
           }
        }
    }else{
      return arrayEmail[0]+' is quite sort/long.'
    }
  }else{
    return email+' is not a valid Email, do not have @.'
}
}
print(validateEmailAddress('12232323332@myemail,de'));

end();
start('Teacher email solution');





end();