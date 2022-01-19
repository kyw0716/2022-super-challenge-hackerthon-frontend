import styles from "../routes/Home.module.css";

function HomeTeacher({text}) {
    const onClick = () =>{
        window.location.href = "/loginPage"
    }
    return (
        <div className={styles.teacher}>
            <span className={styles.span1}>{text}</span>
            <button className={styles.btn} onClick={onClick}>로그인 / 회원가입</button>
        </div>
    );
}



export default HomeTeacher;