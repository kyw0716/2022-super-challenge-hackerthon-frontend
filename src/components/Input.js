import styles from "../routes/Signup.module.css";

function Input({labelText, id, placeholder, value, onChange, type}){
    return(
        <div className={styles.smallDiv}>
            <label htmlFor={id}>{labelText}</label>
            <input
                className={styles.input}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
            />
        </div>
    )
}

export default Input;