import { Link } from "react-router-dom";
import style from "../routes/Home.module.css";

function HomeStudent() {
    return (
        <div className={style.student}>
            <span>학생 / 학부모용</span>
            <button className={style.butt} onClick={()=>{window.location.href="/loginPage"}}><Link className={style.button} to="/loginPage" >로그인 / 회원가입</Link></button>
        </div>
    );
}

export default HomeStudent;