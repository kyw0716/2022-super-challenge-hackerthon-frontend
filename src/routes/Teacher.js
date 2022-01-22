import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Teacher.module.css"
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useEffect } from "react";

function Teacher() {
    const [hurtPeople, setHurtPeople] = useState([]);
    const [incheon, setIncheon] = useState([]);
    useEffect(() => {
        axios.get('https://api.corona-19.kr/korea/country/new/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA'). then((response) => {
            setIncheon([response.data.incheon.newCase, response.data.incheon.totalCase, response.data.incheon.newCcase])
        })
    }, []);
    useEffect(() => {
        axios.get('https://api.corona-19.kr/korea/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setHurtPeople([response.data.TotalCaseBefore, response.data.TotalCase, response.data.TodayDeath])
        });
    }, []);
    return (
        <div className={style.teacher}>
            <div className={style.name}>
                <h1 className={style.school}>Hightech-school</h1>
                <h3 className={style.welcome}>김영우 선생님, 환영합니다!</h3>
            </div>
            <div className={style.bottom}>
                <div className={style.lr}>
                    <div className={style.number}>
                        <div className={style.get}>
                            <div className={style.title}>
                                확진자수
                                <span>{` ${hurtPeople[0]}`}</span>
                                 명
                            </div>                            
                            <ul>
                                <li className={style.get2}>
                                    누적 확진
                                    <span>{` ${hurtPeople[1]}`}</span>
                                    명
                                </li>
                                <li className={style.get2}>
                                    사망자수
                                    <span>{` ${hurtPeople[2]}`}</span>
                                    명
                                </li>
                            </ul>

                        </div>
                        <div className={style.get}>
                            <div className={style.title}>
                            '인천' 지역 정보
                            </div>          
                            <ul>
                                <li className={style.get2}>
                                    확진자수
                                    <span>{` ${incheon[0]}`}</span>
                                    명
                                </li>
                                <li className={style.get2}>
                                    누적 확진
                                    <span>{` ${incheon[1]}`}</span>
                                    명
                                </li>
                                <li className={style.get2}>
                                    전일대비
                                    <span>{` ${incheon[2]}`}</span>
                                    명
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.notice}>
                        공지사항
                    </div>
                    <div className={style.pointer} onClick={() => {window.location.href = "/guidePage"}}>
                        <Link className={style.point} to="/guidePage">
                            ※ 지침 ※
                        </Link>
                    </div>
                </div>
                <div className={style.lr}>
                    <button className={style.send}>알림 보내기</button>
                    <div className={style.list}>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Teacher;