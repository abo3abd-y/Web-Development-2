// setTimeout(()=> {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(()=> {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(()=> {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(()=> {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(()=> {
//                     document.body.style.backgroundColor = 'blue'
                
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
    
        
// }, 1000)

const delayed = (newColor, delay, doNext) => {
    setTimeout(()=> {
        document.body.style.backgroundColor = newColor
        doNext()
    }, delay)
}
// we used the idea of callback to do this here
delayed('red', 1000, () => {
    delayed('orange', 1000, () => {
        delayed('yellow', 1000, () => {
            delayed('green', 1000, () => {
                delayed('blue', 1000, () => {
        
                })
            })
        })
    })
})


