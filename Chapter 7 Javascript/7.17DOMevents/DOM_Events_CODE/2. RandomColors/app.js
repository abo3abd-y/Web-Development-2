const h1 = document.querySelector('h1')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const param1 = Math.floor(Math.random() * 256)
    const param2 = Math.floor(Math.random() * 256)
    const param3 = Math.floor(Math.random() * 256)

    random_clr = `rgb(${param1}, ${param2}, ${param3})`

    h1.innerText = random_clr
    document.body.style.backgroundColor = `${random_clr}`
})