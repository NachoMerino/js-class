var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function() {
        if (this.count === undefined)
            this.count = 0;
        console.log(`My name is ${this.myName}`);
        this.count++;
    },
    setLastName: function(lastname) {
        this.lastname = lastname;
    }
}
var gonzo = {
    myName: 'Gonzo'
}

alfred.sayYourName.call(gonzo);
alfred.setLastName.call(gonzo, 'Gonzalez');
console.log('/////////////SECOND')

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay +
                ' Ladies and Gentlemen I am ' +
                this.name + ', I am a ' +
                this.job + ' and I am ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey whatsup.' +
                'I am ' +
                this.name + ', I am a ' +
                this.job + ' and I am ' +
                this.age + ' years old.' +
                'Have a nice ' + timeOfDay);
        }
    }
};
john.presentation('formal', 'morning');
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'evening');
john.presentation.apply(emily, ['friendly', 'evening']);

console.log('////////Third');




//Example

function sayHelloWorld(){
  this.hello = 'World';
  this.name = 'nacho';
  this.type =  'Human';
}

var hw = new sayHelloWorld();

function sayHelloWorldChild(){
  sayHelloWorld.call(this);
  this.x=1;
}
var hwc = new sayHelloWorldChild();


//end example

//parent
function Item(name, price) {
    this.name = name;
    this.price = price;
    this.sold = false;
}
Item.prototype.sell = function() {
    this.sold = true;
}


///children

function Book(name, price, author) {
    Item.call(this, name, price);
    Item.prototype.sell.call(this);
    this.author = author;
    this.category = 'book';
}
Book.prototype =
    Object.create(Item.prototype);

function ComicBook(name, price, author,age){
  Book.call(this, name, price, author);
  if (!age || age < 7){
    this.minAge = 6;
  }else
    this.minAge = age;
}
ComicBook.prototype =
    Object.create(Item.prototype);


function Movie(name, price, director) {
    Item.call(this, name, price);
    this.director = director;
    this.category = 'movie';
}
Movie.prototype =
    Object.create(Item.prototype);

var casino = new Movie('Casino', 130,'Martin Scorsese');
var casino2 = new Movie('Casino', 130,'Martin Scorsese');

Item.prototype.sell.call(casino);

var it = new Book('IT',120,'Stephen King');
it.sell();

var jessicaJones = new ComicBook('Jessica Jones', 15, 'Marvel', 12);
jessicaJones.sell();


///fourth


function Animal (name){
  this.name = name;
}

Animal.prototype.eat = function(){ };
Animal.prototype.sleep = function(){ };
Animal.prototype.die = function(){ };

function Mammal(name){
  Animal.call(this, name);
  breathe.call(this,true);
}
Mammal.prototype = Object.create(Animal.prototype);

function Tiger (name){
  Mammal.call(this,name);
}
Tiger.prototype = Object.create(Mammal.prototype);
Tiger.prototype.kill =function(otherAnimal){
    otherAnimal.die();
}

function Horse (name){
  Mammal.call(this,name);
}
Horse.prototype = Object.create(Mammal.prototype);

function Bird(name){
  Animal.call(this, name);
  breathe.call(this,true);
  this.fly = true;
}
Bird.prototype = Object.create(Animal.prototype);

function Woodpecker (name){
  Bird.call(this,name);
}
Woodpecker.prototype = Object.create(Bird.prototype);
function Hummingbird (name){
  Bird.call(this,name);
}
Hummingbird.prototype = Object.create(Bird.prototype);


function Fish(name){
  Animal.call(this, name);
  breathe.call(this,false);
  this.swim = true;
}
Fish.prototype = Object.create(Animal.prototype);

function Tuna (name){
  Fish.call(this,name);
}
Tuna.prototype = Object.create(Fish.prototype);

function Shark (name){
  Fish.call(this,name);
}
Shark.prototype = Object.create(Fish.prototype);
Shark.prototype.kill =function(otherAnimal){
    otherAnimal.die();
}

function breathe(breathe){
  this.breathe = breathe;
}

var tiger = new Tiger('Vitaly');
var shark = new Shark('Nemo');
var horse = new Horse('Fury');

