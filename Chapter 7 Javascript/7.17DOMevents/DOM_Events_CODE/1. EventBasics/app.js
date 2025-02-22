const btn = document.querySelector('#v2') // events mosyly begin with the word 'on'

btn.onclick = function () { // as you can see, onclick expects a funcgion. this gets called when you click on this button
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED")
}

btn.onmouseenter = () => { // this function gets called when you hover the mouse over the button
    console.log("AHHHHHHHH")
    console.log("STOP TOUCHING ME")

}

document.querySelector('h1').onclick = () => { // this just shows that the events can work over anything not just buttons
    alert('you clicked me')
}

const btn3 = document.querySelector('#v3')
btn3.addEventListener('click', () => { // another better way of creating event listeners and this is a generic way; expects type of event as first paramter then the function as the second parameter
    alert("Clicked!!")
})

function twist () {
    console.log('TWIST')
}
function shout () {
    console.log('SHOUT')
}

const tasBtn = document.querySelector('#tas')

tasBtn.onclick = twist
tasBtn.onclick = shout

// why we do not use this? because it is gonna overwrite what you had before whereas addEventListener can let you add multiple ones

tasBtn.addEventListener('click', twist, {once:true}) // ALSO, we can add more paramters using objects and for this the function twist gets called once
tasBtn.addEventListener('click', shout) //as opposed to this, where you can add multiple event listeners

