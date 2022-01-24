import styles from "../routes/Signup.module.css"

function Select({onChange}){
    return(
        <div className={styles.smallDiv}>
            <label htmlFor="job">직업 </label>
            <select 
                className={styles.select} 
                onChange={onChange}
            >
                <option value="none">직업을 선택하세요</option>
                <option value="TEACHER">선생님</option>
                <option value="STUDENT">학생</option>
            </select>
        </div>
    )
}

export default Select;