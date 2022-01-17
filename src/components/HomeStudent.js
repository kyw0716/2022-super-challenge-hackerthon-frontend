import styles from "../routes/Home.module.css";

function HomeStudent({text}) {
    const onClick = () =>{
        window.location.href = "/login"
    }
    return (
        <div className={styles.student}>
            <span className={styles.span1}>{text}</span>
            <button className={styles.btn} onClick={onClick}>로그인 / 회원가입</button>
        </div>
    );
}

export default HomeStudent;