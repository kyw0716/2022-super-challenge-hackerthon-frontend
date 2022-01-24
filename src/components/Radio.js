import styles from "../routes/Signup.module.css"

function Radio({onChange}){
    return(
        <div className={styles.smallDiv}>
            <label>성별 </label>
            <div className={styles.genderDiv}>
                <div className={styles.radio}>
                    <label htmlFor="male">남</label>
                    <input
                        id="male"
                        name="gender"
                        type="radio"
                        placeholder="남"
                        value="MAN"
                        onChange={onChange}
                    />
                </div>
                <div className={styles.radio}>
                    <label htmlFor="female">여</label>
                    <input
                        id="female"
                        name="gender"
                        type="radio"
                        placeholder="여"
                        value="WOMAN"
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Radio;