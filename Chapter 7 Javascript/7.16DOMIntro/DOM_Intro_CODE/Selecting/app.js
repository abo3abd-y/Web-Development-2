

const banner = document.getElementById('banner') // this is gonna fetch the object represented by the id of 'banner'
console.log(`This is the banner right here: ${banner}`) // If you want to view this, you must inspect element and head over to console
console.dir(banner)


const images = document.getElementsByTagName('img') // this will return all images in the form of HTML Collection (as a list, and each image is an object)
console.log(images)

for(let img of images) {
    console.log(img.src) // this will print out the source of the image
}

// for(let img of images) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
// }

const squareImages = document.getElementsByClassName('square')


// you can change their images using img.src
// for (let img of squareImages) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }

console.log(document.querySelector('p')) // query selector: you can use classname, id, element type etc. but it only returns one
console.log(document.querySelector('#banner'))
console.log(document.querySelector('a[title = "Java"]')) // as you can see, we are looking for anchor tag with title of java

console.log(document.querySelectorAll('p')) // returns a list or array-like object (i do not think its exactly an array)


console.log(document.querySelectorAll('p a')) // this means that a paragraph with anchor tag inside


const links = document.querySelectorAll('p a')

for(let link of links) {
    console.log(link.href)
}