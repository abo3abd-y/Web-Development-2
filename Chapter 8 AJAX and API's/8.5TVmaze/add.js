const form = document.querySelector('#searchForm')
form.addEventListener('submit', async(e) => {
    e.preventDefault()
    // console.log('SUBMITTED')
    // console.log(form.elements.query.value) // this should output the input of that inputu box
    const searchTerm = form.elements.query.value
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`) //as you can see, we are using a movie api to search for movies
    const config = {params : {q : searchTerm}} // you can add multiple params in this one thing here
    const res = await axios.get('https://api.tvmaze.com/search/shows', config) // another way of providing params to the url instead of using the above version
    // console.log(res.data[0].show.image.medium) // as you can see, start by console logging the data to see how you can extract the image which is what i did here
    makeImages(res.data)
    form.elements.query.value = ''
    
})

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image){ // if the image actually exists
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            document.body.append(img)
        }
        
    }
}