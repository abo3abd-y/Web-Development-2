// prototype objects are basically objects that every copy of that object references to so that they can use the prototype's methods and functions
// basically they are like a template objects so that every objects belongs to it and have access to it
// which means you can add your own method
String.prototype.grumpus = () => { // as you can see, we are adding our own method to the string prototype so that every string have access to this method
    console.log('Go AWAY')
}

const cat = 'Blue'
cat.grumpus() // as you can see, every string have access to this method

String.prototype.yell = function () {
    // console.log(this) // this refers to whatever string we are calling the method on
    console.log(this.toUpperCase()); // as you can see, we literally can do anything
}
cat.yell()

// Array.prototype  is different from __proto__ because the latter is a reference to Array.prototype that you can change 

