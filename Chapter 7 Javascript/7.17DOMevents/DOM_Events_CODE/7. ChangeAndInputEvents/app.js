const input = document.querySelector('input')
const h1 = document.querySelector('h1')

// input.addEventListener('change', (e) => { // the change thing is when you type something new and leave it, it triggers
//     console.log('hello')
// })
input.addEventListener('change', (e) => { // this is different; as soon as you type something new or the value changes in any way, then this gets trigerred; does not matter if you click away or not
    console.log('hello')
    h1.innerText = input.value // updates h1 as you change input
})
