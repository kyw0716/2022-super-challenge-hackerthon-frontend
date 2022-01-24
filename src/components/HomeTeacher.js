import { Link } from "react-router-dom";
import style from "../routes/Home.module.css";

function HomeTeacher() {
    return (
        <div className={style.teacher}>
            <span>교사 / 교직원용</span>
            <button className={style.butt} onClick={()=>{window.location.href="/loginPage"}}><Link className={style.button} to="/loginPage" >로그인 / 회원가입</Link></button>
        </div>
    );
}



export default HomeTeacher;