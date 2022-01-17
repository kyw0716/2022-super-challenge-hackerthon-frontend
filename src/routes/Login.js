import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [type, setType] = useState("text");
    const onChangeIdValue = (event) => {
        setIdValue(event.target.value)
    }
    const onChangePwValue = (event) => {
        setPwValue(event.target.value);
        if(pwValue === ""){
            setType("password");
        }
    }
    const onSubmit = (event) => {
        setId(idValue);
        setPw(pwValue);
        setIdValue("");
        setPwValue("");
        setType("password");
        event.preventDefault();
    }
    const remove = () =>{
        setId("");
        setPw("");
    }
    const typeFlip = () => {
        if(pwValue !== ""){
            if(type === "text"){
                setType("password");
            }
            else{
                setType("text");
            }
        }
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
                                value={idValue}
                                type="text"
                            />
                            <input
                                className={styles.input}
                                placeholder="PW"
                                onChange={onChangePwValue}
                                value={pwValue}
                                type={type}
                            />
                        </div>
                        <button className={styles.btn}>log in</button>
                    </form>
                </div>
                <div className={styles.idPw}>회원가입 / ID PW 찾기<button onClick={typeFlip}>비밀번호 보기</button></div>
            </div>
            {id !== '' && pw !== '' ? 
                <div>
                    <span>ID는 {id}, PW는 {pw} 입니다.</span>
                    <button onClick={remove}>삭제</button>
                </div> : 
                <span>
                    로그인 정보가 입력되지 않았습니다.
                </span>
            }
        </div>
    );
}
export default Login;