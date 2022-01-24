import styles from "../routes/Signup.module.css";

function CheckPassword({password, confirmPassword}){
    return(
        <span className={styles.span}>
            {password !== confirmPassword && confirmPassword !== "" ? "비밀번호를 확인해주세요!" : ""}
        </span>
    );
}

export default CheckPassword;