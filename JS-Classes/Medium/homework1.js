function end() {
    console.log(' ');
    console.log('========================================================');
}

function start(x) {
    console.log('=--------------------=* ' + x + ' *=--------------------=');
    console.log('');
}

function print(x) {
    console.log(x);
}

start('1. Email Address Validator');

function validateEmailAddress(email) {
    var checkAt = email.search("@");
    if (checkAt > 0) {
        arrayEmail = email.split('@');
        if (arrayEmail[0].length >= 8 && arrayEmail[0].length <= 32) {
            if (arrayEmail[0].indexOf("$") > 0 || arrayEmail[0].indexOf("%") > 0) {
                return arrayEmail[0] + ' contain a not alowed character (%,$).'
            } else {
                checkNum = arrayEmail[0].split('');
                var alphabet;
                var k = 0;
                alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
                for (i = 0; i < arrayEmail[0].length; i++) {
                    for (j = 0; j < alphabet.length; j++) {
                        if (checkNum[i] === alphabet[j]) {
                            k++
                        }
                    }
                }
                if (k > 0) {
                    //Second part
                    var dot = arrayEmail[1].indexOf('.'); //put a comma instead a dot, does not work.
                    secondPart = arrayEmail[1].split('.')
                    if (dot > 0) {
                        if (secondPart[1] == 'com' || secondPart[1] == 'de' || secondPart[1] == 'org') {
                            if (secondPart[0].length > 16 || secondPart[0].length < 6) {
                                return 'Your domain name "' + secondPart[0] + '" must have between 8 and 16 characters';
                            } else {
                                return true;
                                return alert('Your email: ' + email + ' it is perfect.');
                            }
                        } else {
                            return 'Your email only can end in .de .com or .org'
                        }
                    } else {
                        return 'You forgot the dot in .' + email;
                    }
                    //End second part
                } else {
                    return 'You should have a non numerical character';
                }
            }
        } else {
            return arrayEmail[0] + ' is quite short/long.'
        }
    } else {
        return email + ' is not a valid Email, do not have @.'
    }
}
print(validateEmailAddress('12232sadasda32a3332@myemail.de'));

end();



start('New Form');

function validateEmailAddress2(email) {
    var checkAt = email.search("@");
    if (checkAt < 0) {
        print(email + ' is not a valid Email, do not have @.')
        return false
    } else {
        arrayEmail = email.split('@');
        if (arrayEmail[0].length < 8 || arrayEmail[0].length > 32) {
            print(arrayEmail[0] + ' is quite short/long.')
            return false
        } else {
            if (arrayEmail[0].indexOf("$") > 0 || arrayEmail[0].indexOf("%") > 0) {
                print(arrayEmail[0] + ' contain a not alowed character (%,$).');
                return false
            } else {
                checkNum = arrayEmail[0].split(''); // also arrayEmail[0].charAt[i]
                var alphabet;
                var k = 0;
                alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
                for (i = 0; i < arrayEmail[0].length; i++) {
                    for (j = 0; j < alphabet.length; j++) {
                        if (checkNum[i] === alphabet[j]) {
                            k++
                            //break;//for stop the for if found a match
                        }
                    }
                }
                if (k = 0) {
                    print('You should have a non numerical character');
                    return false;
                } else {
                    var dot = arrayEmail[1].indexOf('.');
                    secondPart = arrayEmail[1].split('.')
                    if (dot < 0) { return 'You forgot the dot in .' + email; } else {
                        if (secondPart[1] == 'com' || secondPart[1] == 'de' || secondPart[1] == 'org') {
                            if (secondPart[0].length > 16 || secondPart[0].length < 6) { return 'Your domain name "' + secondPart[0] + '" must have between 8 and 16 characters'; } else {
                                return true;
                            }
                        } else { return 'Your email only can end in .de .com or .org' }
                    }
                }
            }
        }
    }
}
print(validateEmailAddress2('12232323332@myemail.de'));

start('2. HTML List Generator');

function listGen(numItems) {
    var items = '';
    for (var i = 1; i < numItems + 1; i++) {
        items += '\t<li>Index ' + i + '</li> \n';
    }
    return '<ul> \n' + items + '</ul> \n';
}

print(listGen(3));

//another way

function listGenerator(numItems) {
    var array = [];
    for (i = 1; i < numItems + 1; i++) {
        array.push('\t\t\t<li>Index ' + i + '</li> \n');
    }
    var finalString = array.join('');
    return '\n\t\t<ul> \n' + finalString + '\t\t</ul> \n';

}
print(listGenerator(3));


end();

start('3. HTML Template');

var websiteTemplate =
    "<html> \n" +
    "<head> \n" +
    "\t<title>%TITLE</title> \n" +
    "</head> \n" +
    "<body> \n" +
    "\t<div>%MYLIST\t</div> \n" +
    "</body> \n" +
    "</html> \n";

function createTemplate(title, numItems) {

    return websiteTemplate.replace('%TITLE', title).replace('%MYLIST', listGenerator(numItems));
}

print(createTemplate('MI AMAZING TITLE', 8));

end();

start('4. Code Generator');


function randomNumber(max) {
    return Math.round(Math.random() * max, 0);
}

digits = "0123456789".split(''); //create an array of digits
alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); //alphabet array

function generateCode(codeLength) {
    var array = [];
    for (i = 0; i < codeLength; i++) {
        array.push(alphabet[randomNumber(alphabet.length - 1)]);
    }
    var together = array.join('');
    return together;
}
print(generateCode(8));

//second part
start('Second');

function generateCode2(codeLength) {
    var array = [];

    for (var i = 0; i < codeLength; i++) {
        array.push(alphabet[randomNumber(alphabet.length - 1)]);
        array.push(digits[randomNumber(digits.length - 1)]);
    }
    for (let i = 0; i < codeLength; i++) {
        array.shift()
    }
    var together = array.join('');
    return together;
}
print(generateCode2(15));

function generateCode3(codeLength) {
    var maxArray = digits.concat(alphabet);
    var array = [];
    for (var i = 0; i < codeLength; i++) {
        array.push(maxArray[randomNumber(maxArray.length - 1)]);
    }
    var together = array.join('');
    return together;
}
print(generateCode3(6));