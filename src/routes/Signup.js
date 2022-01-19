import { useState } from "react";
import styles from "./Signup.module.css"

function Signup() {
    const [password, setPassword] = useState("");
    const [idValue, setIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [jobValue, setJobValue] = useState("");
    const [ageValue, setAgeValue] = useState("");
    const [genderValue, setGenderValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const redirect = () =>{
        window.location.href = "/loginPage";
    }
    const pwOnChange = (e) => {
        setPassword(e.target.value);
    }
    const cpwOnChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const idChange = (e) =>{
        setIdValue(e.target.value);
    }
    const nameChange = (e) =>{
        setNameValue(e.target.value);
    }
    const jobChange = (e) =>{
        setJobValue(e.target.value);
    }
    const ageChange = (e) =>{
        setAgeValue(e.target.value);
    }
    const genderChange = (e) =>{
        setGenderValue(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        fetch("/members/sign_up",{
            method: "POST",
            body: JSON.stringify({
                "loginId" : idValue,
                "password" : password,
                "name" : nameValue,
                "age" : ageValue,
                "gender" : genderValue,
                "job" : jobValue
            })
        }).then(redirect);
    }
    return (
        <div className={styles.container}>
            <span className={styles.logo}>@ㅎㅏㅌㅔㄱㅇㅣㅁㅣㄹㅐㄷㅏㅇ</span>
            <form className={styles.formBox} onSubmit={onSubmit}>
                <div className={styles.smallDiv}>
                    <label htmlFor="loginId">아이디 </label>
                    <input
                        className={styles.input}
                        id="loginId"
                        name="loginId"
                        placeholder="ID"
                        onChange={idChange}
                    />
                </div>
                <div className={styles.smallDiv}>
                    <label htmlFor="password">비밀번호 </label>
                    <input
                        className={styles.input}
                        id="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={pwOnChange}
                        type="password"
                    />
                </div>
                <div className={styles.smallDiv}>
                    <label htmlFor="confirmPassword">비밀번호 확인 </label>
                    <input
                        className={styles.input}
                        placeholder="PASSWORD"
                        value={confirmPassword}
                        onChange={cpwOnChange}
                        type="password"
                        id="confirmPassword"
                    />
                </div>
                <span className={styles.span}>
                    {password !== confirmPassword && confirmPassword !== "" ? "비밀번호를 확인해주세요!" : ""}
                </span>
                <div className={styles.smallDiv}>
                    <label htmlFor="name">이름 </label>
                    <input
                        className={styles.input}
                        id="name"
                        name="name"
                        placeholder="NAME"
                        onChange={nameChange}
                    />
                </div>
                <div className={styles.smallDiv}>
                    <label htmlFor="age">나이 </label>
                    <input
                        className={styles.input}
                        id="age"
                        name="age"
                        placeholder="AGE"
                        onChange={ageChange}
                    />
                </div>
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
                                onChange={genderChange}
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
                                onChange={genderChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.smallDiv}>
                    <label htmlFor="job">직업 </label>
                    <select 
                        className={styles.select} 
                        onChange={jobChange}
                    >
                        <option value="none">직업을 선택하세요</option>
                        <option value="TEACHER">선생님</option>
                        <option value="STUDENT">학생</option>
                    </select>
                </div>
                <button className={styles.btn}>제출</button>
            </form>
        </div>
    );
}
export default Signup;