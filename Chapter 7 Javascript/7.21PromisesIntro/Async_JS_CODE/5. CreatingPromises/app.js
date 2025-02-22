// new Promise((resolve, reject) => { // you can name them whatever what you want. promise expects two parameters of two functions 
//     resolve()
// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { // provide two functions called resolve and reject. if resolve called, promise is resolved and same for reject
        const rand  = Math.random()
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('Your fake data here')
            }
            reject('request error!')
        }, 1000)
    })
}

fakeRequest('/dog/1')
    .then((res) => {
        console.log('DONE WITH REQUEST')
        console.log('first request done', res)
    })
    .catch((err) => {
        console.log('OH NO', err)
    }) 
        

// lets do this with the color example we worked before
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

// much easier to use this way as you can see; remember that the then gets called if the previous promise returned is resolved
delayedColorChange('red',1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
    
    