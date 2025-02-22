function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
} // need not worry about how this function works precisely

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`
}

function makeColor (r,g,b) {
    const color = {} // create an object called color
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function () { // adding a method called rgb
        // const (r,g,b) = this // we can do this as well
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

    color.hex = function() { // adding a method called hex
        const {r,g,b} = this
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    } // need not worry about how this function works precisely
    return color //return the object
}

const firstColor = makeColor(35,255,150)
console.log(firstColor.hex())

const black = makeColor(0,0,0)
console.log(black)

console.log(black.hex === firstColor.hex) // why is this false and the below is true? this is because slice is a prototype and hex and the other function is defined seperately and is not prototype
console.log("hi".slice === "bi".slice) // slice is not an own copy; it references a method unlike the above thing


// a better way of creating an object; a constructor
function Color(r,g,b){ 
    this.r =r
    this.g = g
    this.b = b
    // console.log(this) // this references to the window, the nearest scope

    
}
// when we call this function with the 'new' keyword, its gonna creat a new js object
// its gonna set this to this new object
// then it will return this at the end
// also, it sets the constructor to this new constructor object
const newColor = new Color(10,10,10)
console.log(newColor)

Color.prototype.rgb = function () { // as you can see, this is a way of creating a prototype function that every new object references to instead of creating a new oe
    // const (r,g,b) = this // we can do this as well
    return `rgb(${this.r}, ${this.g}, ${this.b})`
}

Color.prototype.hex = function() { // adding a method called hex
    const {r,g,b} = this
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
} // need not worry about how this function works precisely

Color.prototype.rgba = function (a=1) {
    const {r,g,b} = this
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const another = new Color(10,10,10)
console.log(another)
console.log(another.hex())

console.log(newColor.hex === another.hex) // true, because that function defined is a prototype

console.log(another.rgba(0.6))





// EVEN better way using classes that are much neatier

class Color2 {
    constructor(r,g,b, name) { // this function will execute immedietly when a new object is created
        this.r = r
        this.b = b
        this.g = g
        this.name = name
        this.hsl() // this will call hsl immedietly when this instance gets created
    }
    greet () { // as you can see, we can define methods inside the class as opposed to outside the class as before
        return `Hello from ${this.name}`
    }
    hex() { 
        const {r,g,b} = this
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

    hslDisplay() {
        const {h,s,l} = this
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    opposite() {
        const {h,s,l} = this
        const newHue =  (h + 180) % 360 // to put us back to zero
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }

    fullySaturated() {
        const {h,l} = this
        return `hsl(${h}, 100%, ${l}%)`
    }
    
    hsl() {
        // Normalize RGB values to the range 0-1
        let {r,g,b} = this
        r /= 255;
        g /= 255;
        b /= 255;
      
        // Find the maximum and minimum RGB values
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
      
        // Calculate lightness
        let l = (max + min) / 2;
      
        // Calculate saturation and hue
        let s, h;
        if (max === min) {
          s = 0;
          h = 0; // achromatic
        } else {
          const delta = max - min;
          s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
          switch (max) {
            case r:
              h = (g - b) / delta + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / delta + 2;
              break;
            case b:
              h = (r - g) / delta + 4;
              break;
          }
          h /= 6;
        }
      
        // Convert hue to degrees, saturation and lightness to percentages
        h *= 360;
        s *= 100;
        l *= 100;
        this.h = h
        this.s = s
        this.l = l
      
        return [h, s, l];
      }
}

const c1 = new Color2(10,20,30, 'tomato')
console.log(c1)
console.log(c1.greet())
console.log(c1.rgb())
console.log(c1.hex())


const c2 = new Color2(30,40,50, 'apple')
console.log(c2)
console.log(c2.greet())
console.log(c2.rgb())
console.log(c2.hex())

document.body.style.backgroundColor = c1.hex()
console.log(c2.rgb === c1.rgb) // exactly equal to true


console.log(c1.hsl())
console.log(c1.hslDisplay())
console.log(c1.opposite())
document.body.style.backgroundColor = c1.opposite()
document.body.style.backgroundColor = c1.fullySaturated()

// extend and super keywords

class Pet {
    constructor(name, age) {
        console.log('Pet CONSTRUCTOR')
        this.name = name
        this.age =age
    }
    eat() {
        return `${this.name} is eating`
    }

}

class Cats extends Pet { // what does tihs mean? we just extended from Pet so it uses the consutrcotr from pet if it does not find one here. it also extends methods from the parent Pet
    constructor(name, age, livesLeft = 9){
        console.log('CAT CONSTRUCTOR')
        super(name, age) // this will call the consructor of Pet so we do not have to assign name and age again
        this.livesLeft = livesLeft
    }
    meow () {
        return 'MEOW'
    }
}


const monty = new Cats('monty', 9)
console.log(monty.eat())

class Dog extends Pet{
    
    bark () {
        return 'WOOOOOF'
    }
    // eat() { // if it does not find eat from here, then it looks over to tth eparent. so priority is first here then the parent
    //     return `Different`
    // }
}
const doggy = new Dog('Hugh', 10)
console.log(doggy.eat())
console.log(doggy.bark())