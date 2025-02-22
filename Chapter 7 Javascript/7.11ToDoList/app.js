let input = NaN
let todo = []

while((input = prompt("Enter a command")) !== "q") {
    if(input === "new"){
        let element = prompt("Add a todo")
        todo.push(element)
    }else if(input === "list"){
        for(let i = 0; i < todo.length; i ++) {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log("*****************************")
    }else if(input === "delete"){
        let index = NaN
        while(!(index = parseInt(prompt("Enter index to be deleted"))));
        todo.splice(index, 1)
    }
}
console.log("OK, YOU QUIT THE APP")