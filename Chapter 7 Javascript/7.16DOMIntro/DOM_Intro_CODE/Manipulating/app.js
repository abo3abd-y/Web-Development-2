const h1 = document.querySelector('h1') // pick the first h1. returns an object-like data type

console.log(document.querySelector('p').innerText)

// document.querySelector('p').innerText = 'hahaha' // as you can see, we changed the text of this specific p tag

// document.querySelector('p').textContent = 'okokok' // kind of same as innertext but it shows everything even the css file changed bits of it. Google to know what this 

console.log(document.querySelector('p').innerHTML) // gives you everthing, including the html content
document.querySelector('p').innerHTML = "<i> askjkjdsa </i>" // asd you can see, this actually puts html code as opposed to innertext which will iterally put that there and not treat it as html code

document.querySelector('h1').innerHTML += '<sup> hello </sup>' // this here i am adding
// document.querySelector('h1').innerText += '<sup> askjasfk </sup>' // as you can see, this is treated as text

// document.querySelector('#banner').id = 'whoops' // i changed the id of this image
const firstLink = document.querySelector('a')
console.log(firstLink.getAttribute('id')) // get attribute literllay returns the attribute of whatever you are requesting, if it does not exist it will return null
console.log(firstLink.getAttribute('class'))
console.log(firstLink.getAttribute('title'))

firstLink.setAttribute('href', 'https://www.google.com') // i changed the href using set attribute and this works by picking the attribute you want to change and the value as a second paramter

const input = document.querySelector('input[type = "text"]') // selecting the first input with the attribute type = text
input.type = 'password'
// input.setAttribute('type', 'text')
// so there is many ways we can change attributes: first using setattribute and then by actually picking out the element we want to change and use it as an object

console.log(document.querySelector('h1').style) // returns an object of all different kinds of css styles that you can manipulate
// HOWEVER, this style thing only contains the styles changed inline, so it's not gonna have the styles manipulatrd in css file
document.querySelector('h1').style.fontSize = '3em'
document.querySelector('h1').style.color = 'olive' // this is equivalent to inline styles and generally not preferred


const allLinks = document.querySelectorAll('a')

for (let link of allLinks) { // as you can see, we changed their a link's color
    link.style.color = 'rgb(0,108,134)'
}


console.log(window.getComputedStyle(document.querySelector('h1'))) // this will actually return the real values of the elements that we have here
// this is not that common


const h2 = document.querySelector('h2')
h2.setAttribute("class", "purple") // this SETS it; replaces the old with the new. We are adding a class called purple located in app.css
// What if you want to add multiple classes

h2.classList.add('border') // as you can see, this method is way better and adds classes as if you are pushing

// h2.classList.remove('border')
console.log(h2.classList.contains('border')) // returns true or false

h2.classList.toggle('purple')
h2.classList.toggle('purple')
h2.classList.toggle('purple')
h2.classList.toggle('purple') // this toggles, turns it off and on 


const firstBold = document.querySelector('b')

console.log(firstBold.parentElement) // gives us the parent element

const paragraph = firstBold.parentElement

console.log(paragraph.children) // lists the children count as HTMLCollection as usual


const squareImg = document.querySelector('.square')
console.log(squareImg.parent)
console.log(squareImg.children)

console.log(squareImg.nextSibling) // this gives a node of the newline (kind of annoying)
console.log(squareImg.nextElementSibling) // this ACTUALLY gives us the next actually sibling

const newImg = document.createElement('img') // we created an image, but its missing source and where should be loacted
newImg.src = 'https://d2zp5xs5cp8zlg.cloudfront.net/image-68121-800.jpg' // we added a source here

document.body.appendChild(newImg) // this will append this as the last child of body
newImg.classList.add('square')

const newH3 = document.createElement('h3') // adding another element
newH3.innerHTML= 'I AM NEW'

document.body.appendChild(newH3)


const p = document.querySelector('p') // first p
p.append('i am new text yaaay') // appends it to the end of pararagh. Appending to the INSIDE of this paragrah

const newB = document.createElement('b')
newB.append('Hi!')
p.prepend(newB) // adding at the beginning. still child


const h21  = document.createElement('h2')
h21.append('Are adorable chickens')
const h12 = document.querySelector('h1')

h12.insertAdjacentElement('afterend', h21) // this adds siblings ;as you can see it has two paramaters. first way says add an element after the specified elemnt. you can add before


const h3 = document.createElement('h3')
h3.innerText = 'I am h3'
h1.after(h3) // this ONLY add after


const firstLi = document.querySelector('li')
const ul = firstLi.parentElement // we need the parent
ul.removeChild(firstLi) // accepts a node or HTMLSELEction; if you want to element, you must identify its parent and then use removeChild


const img = document.querySelector('img')
img.remove() // this straight out removes the image without having to identify the parent of this image and then using remveChild
// so different ways of removing elements