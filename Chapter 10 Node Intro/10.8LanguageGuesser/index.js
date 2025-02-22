const franc = require('franc')
const langs = require('langs')
const colors = require('colors')
const input = process.argv[2]
// const langCode = franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট')
const langCode = franc(input)
if(langCode === 'und') {
    console.log('SORRY, COULDNT FIGURE IT OUT')
}else{
    const language = langs.where('3', langCode)
    console.log(language.name.green)
}