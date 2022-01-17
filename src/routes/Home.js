import { Link } from "react-router-dom";
import styles from "./Home.module.css"

function Home() {

    return (
        <div className="Home">
            <div className={styles.upBox}><button><Link to="/student">student</Link></button></div>
            <div className={styles.downBox}><button><Link to="/teacher">teacher</Link></button></div>
            <div className={styles.student}>
                <span>학생 / 학부모용</span>
                <span>~~~~~~~~~~~~~~</span>
                <button className={styles.btn}><Link to="/login">로그인 / 회원가입</Link></button>
            </div>
            <div className={styles.teacher}>
                <span>교사 / 교직원용</span>
                <span>~~~~~~~~~~~~~~</span>
                <button className={styles.btn}><Link to="/login">로그인 / 회원가입</Link></button>
            </div>
        </div>
    );
}

export default Home;