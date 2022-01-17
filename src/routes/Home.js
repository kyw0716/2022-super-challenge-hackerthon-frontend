import { Link } from "react-router-dom";
import HomeStudent from "../components/HomeStudent";
import HomeTeacher from "../components/HomeTeacher";
import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.upBox}>
                <span className={styles.hitech}>@ㅎㅏㅌㅔㄱㅇㅣㅁㅣㄹㅐㄷㅏㅇ</span><br/>
                <button className={styles.studentBtn}><Link to="/student">student</Link></button>
            </div>
            <div className={styles.downBox}><button><Link to="/teacher">teacher</Link></button></div>
            <HomeStudent text="학생 / 학부모용"/>
            <HomeTeacher text="교사 / 교직원용"/>
        </div>
    );
}

export default Home;