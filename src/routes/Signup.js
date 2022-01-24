import { useState } from "react";
import Input from "../components/Input";
import Radio from "../components/Radio";
import styles from "./Signup.module.css"
import Select from "../components/Select";
import CheckPassword from "../components/CheckPassword";

function Signup() {
    const [password, setPassword] = useState("");
    const [idValue, setIdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [jobValue, setJobValue] = useState("");
    const [ageValue, setAgeValue] = useState("");
    const [genderValue, setGenderValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
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
    const phoneNumberChange = (e) =>{
        setPhoneNumber(e.target.value);
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
                "job" : jobValue,
                "phoneNumber" : phoneNumber
            })
        }).then(redirect);
    }
    return (
        <div className={styles.container}>
            <span className={styles.logo}>@ㅎㅏㅌㅔㄱㅇㅣㅁㅣㄹㅐㄷㅏㅇ</span>
            <form className={styles.formBox} onSubmit={onSubmit}>
                <Input labelText={"아이디 "} id={"loginId"} placeholder={"ID"} value={idValue} onChange={idChange} type={"text"}/>
                <Input labelText={"비밀번호 "} id={"password"} placeholder={"PASSWORD"} value={password} onChange={pwOnChange} type={"password"}/>
                <Input labelText={"비밀번호 확인 "} id={"confirmPassword"} placeholder={"PASSWORD"} value={confirmPassword} onChange={cpwOnChange} type={"password"}/>
                <CheckPassword password={password} confirmPassword={confirmPassword} />
                <Input labelText={"이름 "} id={"name"} placeholder={"NAME"} value={nameValue} onChange={nameChange} type={"text"}/>
                <Input labelText={"전화번호 "} id={"phoneNumber"} placeholder={"PHONENUMBER"} value={phoneNumber} onChange={phoneNumberChange} type={"number"}/>
                <Input labelText={"나이 "} id={"age"} placeholder={"AGE"} value={ageValue} onChange={ageChange} type={"number"}/>
                <Radio onChange={genderChange} />
                <Select onChange={jobChange} />
                <button className={styles.btn}>제출</button>
            </form>
        </div>
    );
}
export default Signup;