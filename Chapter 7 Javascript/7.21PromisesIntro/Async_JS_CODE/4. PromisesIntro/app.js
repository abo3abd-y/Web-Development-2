// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// making requests: when you make request, usually you provide two functions or callbacks: one is success and the other is failure function

fakeRequestCallback('books.com', 
function(response) { // example of request where you provide success and failure functions and each function can have a parameter of the message of the success or failure that you might want to use
    console.log('it worked')
    console.log(response)
    fakeRequestCallback('books.com/page2', // as you can see, it becomes obnoxious when you want to make a request after the first one if the first one becomes a success
        function (response) {
            console.log('it worked AGAIN')
            console.log(response)
            fakeRequestCallback('books.com/page3', // we added the third one to emphasize, but this should emphasize a real thing that might happen in the world; this is what people back in the day used to do 
                function(response){ // so people became frustrated with this, which is why promises happened
                    console.log('it worked AGAIN (3rd request)')
                    console.log(response)
                },
                function(err) {
                    console.log('ERROR (3nd req)', err)
                }
            )
        },
        function(err){
            console.log('ERROR (2nd req)', err)
        }
    )
}, function (error) {
    console.log('error')
    console.log(error)
})


// lets talk about promise

let request = fakeRequestPromise('hikinghtrails.com/api/nearme')

console.log(request) // as you can see, it is pending

setTimeout(() => {
    console.log(request) // either requestolved or rejected
}, 5000);


// request
//     .then(() => { // we use the .then method which will be called if it is resolved
//         console.log('PROMISE RESOLVED 1')
//         console.log('it worked!!!!')
//         fakeRequestPromise('yelp.com/api/coffee/page2')// but still this looks nested? look below!!
//             .then(() => {
//                 console.log('PROMISE RESOLVED 2')
//                 console.log('it worked!!!!')
//                 fakeRequestPromise('yelp.com/api/coffee/page2')
//                     .then(() => {
//                         console.log('PROMISE RESOLVED 3')
//                     })
//                     .catch(() => {
//                         console.log('OH NO, error! (3)')
//                     })
//             })
//             .catch(() => {
//                 console.log('OH NO, error! (2)')
//             })
// })
//     .catch(() => {
//         console.log('OH NO, error! (1)') // this will be called if it got rejected
// })

// THIS IS A MUCH CLEANER WAY OF DOING THIS
request
    .then((data) => {
        console.log('PROMISE RESOLVED 1')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2') //so if it is a success, then the second upcoming then will be called, otherwise catch will be called
    })
    .then((data) => { // if previous worked, then this will run
        console.log('PROMISE RESOLVED 2')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('PROMISE RESOLVED 3')
        console.log(data) // ALSO, .then can have data which is returned from the fakerequestpromise
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log('PROMISE RESOLVED 4')
        return fakeRequestPromise('yelp.com/api/coffee/page4')
    })
    .catch((err) => { // only ONE catch is needed
        console.log('OH NO, a request FAILED')
        console.log(err)
    })
