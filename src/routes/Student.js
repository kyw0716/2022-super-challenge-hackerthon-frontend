import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Student.module.css";
function Student() {
    return (
        <div className={style.student}>
            <div className={style.navBar}>
                <div className={style.logo}>
                    하이테크 미래 고등학교
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
                        <button className={style.testBtn}>Go!!</button>
                    </div>
                    <div className={style.guide}>
                        <Link to="/guide">
                            지침
                        </Link>
                    </div>
                </div>
                <div className={style.rightContainer}>
                    <div className={style.box}>
                        <span className={style.boxTitle}>부작용 신고</span>
                        <div className={style.picture}></div>
                        <button className={style.link}>바로가기</button>
                    </div>
                    <div className={style.box}>
                        <span className={style.boxTitle}>백신예약</span>
                        <div className={style.picture}></div>
                        <button className={style.link}>바로가기</button>
                    </div>
                    <div className={style.box}>
                        <span className={style.boxTitle}>예방접종 도우미</span>
                        <div className={style.picture}></div>
                        <button className={style.link}>바로가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;