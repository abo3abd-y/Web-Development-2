import styles from './Button.module.css'

function Button () {

    // const styles = { // you could also do inline css as you see here
    //     backgroundColor: "hsl(200,100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer"
    // }
    return (
        <button className={styles.button}>
            Click me
        </button>
    )
}

export default Button