const  tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', e => {
    e.preventDefault() // removes default behavior of this case
    // alert('submit')
    // console.log('SUBMIT')
    // const username = document.querySelectorAll('input')[0]
    // const tweet = document.querySelectorAll('input')[1]

    let username = tweetForm.elements.username
    let tweet = tweetForm.elements.tweet // this is a better way of selecting the element that we want
    console.log(username.value, tweet.value)

    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username.value)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet.value}`)
    tweetsContainer.append(newTweet)

    username.value = "" // reset
    tweet.value = ""
    

})