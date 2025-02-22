const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')
form.addEventListener('submit', e => { // when we submit, we will call this function
    e.preventDefault() // it prevents the default behavior of this specific event where if you press enter, it will take to teh designated page, but this will remove it
    // console.log('SUBMITTED')
    // console.log(input.value) // this is what is submitted by user
    const catName = input.value
    const newLI = document.createElement('LI')
    newLI.innerText = catName
    // console.log(newLI)
    list.append(newLI) // add a new element to the children of whatever we are adding this to
    input.value = "" // this is necessary because we are clearing the user input after they hit submit
})