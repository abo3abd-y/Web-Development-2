document.querySelector('button').addEventListener('click', evt => {
    console.log(evt)
})
// what is evt? it contains information about the event of the object (for example, where you clicked the button, the coordinates differs and so on)

const input = document.querySelector('input')
input.addEventListener('keydown', () => { // when you press down on any button, this gets triggered
    console.log('KEYDOWN')
})
input.addEventListener('keyup', (e) => { // when you release key, it gets released and this gets trigerred
    console.log('KEYUP')
    console.log(e.key) // key is the actual thing that you pressed down
    console.log(e.code) // code is what is written or the codified version
})

window.addEventListener('keydown', e => {
    switch(e.code) { // as you can see here, we just want the four arrows and everything else ignored
        case 'ArrowUp':
            console.log("UP!")
            break
        case 'ArrowDown':
            console.log("DOWN!")
            break
        case 'ArrowLeft':
            console.log("LEFT!")
            break
        case 'ArrowRight':
            console.log("RIGHT!")
            break
        default:
            console.log("IGNORED")
        
    }
})


