function Student (props) {
    return (
        <div>
            <p>
                Name : {props.name}
                Age : {props.age}
                Student : {props.isStudent ? "Yes" : "No"}
            </p>
        </div>
    )
}

export default Student