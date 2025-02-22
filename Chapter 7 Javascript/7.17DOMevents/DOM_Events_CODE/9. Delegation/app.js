// const lis = document.querySelectorAll('li')
// for(let li of lis) {
//     li.addEventListener('click', ()=> {
//         this.remove() // this only removes the prexisted stuff not the new ones
//     })
// }


const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', (e) => {
    // console.log('on ul')
    e.target.remove() // target is the actual element; even though this is on the container, if you press a ul inside container or li, it will show in target that you catually clicked on li and not hte container, so we want to remove it
})

