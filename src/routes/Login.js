import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Login.module.css";

function Login() {
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");
    const onChangeIdValue = (event) => {
        setIdValue(event.target.value)
    }
    const onChangePwValue = (event) => {
        setPwValue(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        fetch('/login',{
            method : 'POST',
            body : JSON.stringify({
                "loginId" : idValue,
                "password" : pwValue
            })
        }).then((response) => console.log(response));
    }
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.upBox}>
                    <form 
                        className={styles.formTag}
                        onSubmit={onSubmit}
                    >
                        <div className={styles.inputContainer}>
                            <input
                                className={styles.input}
                                placeholder="ID"
                                onChange={onChangeIdValue}
                                type="text"
                                name="loginId"
                            />
                            <input
                                className={styles.input}
                                placeholder="PASSWORD"
                                onChange={onChangePwValue}
                                type="password"
                                name="password"
                            />
                        </div>
                        <button className={styles.btn}>log in</button>
                    </form>
                </div>
                <div className={styles.idPw}><Link className={styles.link} to="/signupPage">회원가입</Link></div>
            </div>
        </div>
    );
}
export default Login;