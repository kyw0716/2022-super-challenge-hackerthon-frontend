import { Link } from "react-router-dom";
import styles from "./Home.module.css"

function Home() {
    const onClick = () =>{
        window.location.href = "/login"
    }
    return (
        <div className={styles.Home}>
            <div className={styles.upBox}><button><Link to="/student">student</Link></button></div>
            <div className={styles.downBox}><button><Link to="/teacher">teacher</Link></button></div>
            <div className={styles.student}>
                <span className={styles.span1}>학생 / 학부모용</span>
                <span>~~~~~~~~~~~~~~</span>
                <button className={styles.btn} onClick={onClick}>로그인 / 회원가입</button>
            </div>
            <div className={styles.teacher}>
                <span className={styles.span1}>교사 / 교직원용</span>
                <span>~~~~~~~~~~~~~~</span>
                <button className={styles.btn} onClick={onClick}>로그인 / 회원가입</button>
            </div>
        </div>
    );
}

export default Home;