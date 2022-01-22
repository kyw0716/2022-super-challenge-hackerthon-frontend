import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Student.module.css";
function Student() {
    const go = () => {
        window.location.href = "/listPage"
    }

    return (
        <div className={style.student}>
            <div className={style.navBar}>
                <div className={style.logo}>
                    Hightech-school
                </div>
                <div className={style.name}>
                    000님, 환영합니다!
                </div>
            </div>
            <hr />
            <div className={style.mainContainer}>
                <div className={style.leftContainer}>
                    <div className={style.test}>
                        <span>자가진단</span><br />
                        <span>하러가기</span>
                        <button className={style.testBtn} onClick={go}>Go!!</button>
                    </div>
                    <div className={style.guide} onClick={() => {window.location.href = "/guidePage"}}>
                        <Link className={style.guide2} to="/guidePage">
                            ※ 지침 ※
                        </Link>
                    </div>
                </div>
                <div className={style.rightContainer}>
                    <div className={style.box}>
                        <span className={style.boxTitle}>부작용 신고</span>
                        <div className={style.picture1}></div>
                        <button className={style.link}>바로가기</button>
                    </div>
                    <div className={style.box}>
                        <span className={style.boxTitle}>백신예약</span>
                        <div className={style.picture2}></div>
                        <button className={style.link}>바로가기</button>
                    </div>
                    <div className={style.box}>
                        <span className={style.boxTitle}>예방접종 도우미</span>
                        <div className={style.picture3}></div>
                        <button className={style.link}>바로가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;