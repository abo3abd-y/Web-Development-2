// If you want to return js in the function, it must be in between {} but outside you can just use it normally

function Food () {
    const food1 = "Orange"
    const food2 = "Banana"

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li> 
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food