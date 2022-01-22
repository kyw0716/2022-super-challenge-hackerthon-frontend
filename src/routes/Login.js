import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Login.module.css";
import axios from "axios";

function Login() {
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");
    const [date, setDate] = useState([]);
    const onChangeIdValue = (event) => {
        setIdValue(event.target.value);
        let d = new Date();
        setDate([d.getMonth() + 1, d.getDate()]);
    }
    const onChangePwValue = (event) => {
        setPwValue(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('/login', {
            "loginId": idValue,
            "password": pwValue
        }).then((response) => {
            if (response.data === "LOGIN_SUCCESS") {
                setIdValue('');
                setPwValue('');
                window.location.href = "/studentPage";
            }
            else {
                alert("아이디 혹은 비밀번호를 확인해주세요");
                window.location.href = "/loginPage";
            }
        });
    }
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <span className={styles.span}>@ㅎㅏㅌㅔㄱㅇㅣㅁㅣㄹㅐㄷㅏㅇ</span>
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
                                value={idValue}
                            />
                            <input
                                className={styles.input}
                                placeholder="PASSWORD"
                                onChange={onChangePwValue}
                                type="password"
                                name="password"
                                value={pwValue}
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