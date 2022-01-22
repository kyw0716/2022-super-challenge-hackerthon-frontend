import { Link } from "react-router-dom";
import style from "./Home.module.css"

function Home() {

    return (
        <div className="Home">
            <div className={style.upBox}></div>
            <div className={style.downBox}></div>
            <div className={style.student}>
                <span>학생 / 학부모용</span>
                <button className={style.butt} onClick={()=>{window.location.href="/loginPage"}}><Link className={style.button} to="/loginPage" >로그인 / 회원가입</Link></button>
            </div>
            <div className={style.teacher}>
                <span>교사 / 교직원용</span>
                <button className={style.butt} onClick={()=>{window.location.href="/loginPage"}}><Link className={style.button} to="/loginPage" >로그인 / 회원가입</Link></button>
            </div>
        </div>
    );
}

export default Home;