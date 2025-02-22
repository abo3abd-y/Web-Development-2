// async function hello () { // async autoamtically retrurns promise without you returning it

// }

const sing = async() => {
    // shjgkdshfdks // as you can see, if you have an error or throw an error in yout async funcito, promise is automatically rejeected so thats how rejection happens for promises
    // throw new Error('error!!!!!!!!') // you could throw an error this way
    // throw "hello"
    return 'LALALALALAlA' // this will return this value with the resolved status because we are ACTUALLY returning tsomething
}

sing().then((data) => {
    console.log("PROMISE RESOLVED WITH:", data)
}).catch(err => {
    console.log('PROMISE REJECTED')
    console.log(err)
})


const login = async(username, password) => { // perfect example of the use of async; as you can see, we can throw an error which will return rejeciron otherwise resolved
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('user11', 'corgifeetarecute')
.then(msg => {
    console.log('LOGGED IN')
    console.log(msg)
})
.catch(err => {
    console.log('ERROR!')
    console.log(err)
})


// this is from the past examples
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

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

// much easier to use this way as you can see; remember that the then gets called if the previous promise returned is resolved
// delayedColorChange('red',1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))
    
async function rainbow() {
    await delayedColorChange('red', 1000) // the await keyword is used exclusively only with async functions and what it does is that it awaits a promise to be resolved and will stop further code execution until it is resolved
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE" // we can also leave this here which means it will return a resolved promise
}

rainbow()

async function printRainbow() {
    await rainbow() // since it returns a promise
    console.log("ALL DONE")
}
printRainbow()


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1')
        let data2 = await fakeRequest('/page2')
        console.log(data1)
    }catch(e) { // what happens when await is awaiting on a rejected promise, use try catch() to catch the error
        console.log("CAUGHT")
        console.log('error is ', e)
    }
    
}
makeTwoRequests()