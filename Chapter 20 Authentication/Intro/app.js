const bcrypt = require('bcrypt') // one of famous hashing algorithms

// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(10) // this is salt so that it produces different hashes for the same password for more security
//     hash = await bcrypt.hash(pw, salt) // we hash the password with the salt given
//     // console.log(salt)
//     console.log(hash)
// }


const hashPassword = async(pw) => { // you could do it in a shorter way like this`
    hash = await bcrypt.hash(pw, 12)
    console.log(hash)
}


const login = async (pw, hashed) => {
    const result = await bcrypt.compare(pw, hashed)
    if (result) {
        console.log("LOGGED YOU IN: SUCCESSFUL MATCH")
    }else {
        console.log("PASSWORD INCORRECT; TRY AGAIN LATER")
    }
} 

// hashPassword('monkey')
login("monkey", "$2b$10$40DAkJvZjpzklhHuFXDbge7tgdbUs8FGUwbqDGEUfTBdGVnQnmGI.") // as you can see this works
