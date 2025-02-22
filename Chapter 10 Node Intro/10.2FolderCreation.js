// you can all sorts of things with node, including terminal stuff with it
const folderName = process.argv[2] || 'Project'
const fs = require('fs')
// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('./10.2Folder', { recursive: true }, (err) => {
//     console.log('IN THE CALLBACK')
//     if (err) throw err;
// });
// console.log('I Come after mkDir')


// fs.mkdirSync('./10.2FolderAnotherOne') // synchronous means the code stops here, make sure this runs, then moves on

// maybe have try and catch

fs.mkdirSync(folderName) // synchronous means the code stops here, make sure this runs, then moves on
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/style.css`)
