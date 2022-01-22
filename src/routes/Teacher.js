import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Teacher.module.css"
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useEffect } from "react";

function Teacher() {
    const [hurtPeople, setHurtPeople] = useState([]);
    const [incheon, setIncheon] = useState([]);
    const [vaccine, setVaccine] = useState(0);
    const [flip, setFlip] = useState(true);
    const Vaccine = vaccine.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    useEffect(() => {
        axios.get('https://api.corona-19.kr/korea/vaccine/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setVaccine(response.data.incheon.vaccine_3.vaccine_3)
        })
    }, []);
    const onClick = () =>{
        setFlip((current) => !current);
    }
    useEffect(() => {
        axios.get('https://api.corona-19.kr/korea/country/new/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setIncheon([response.data.incheon.newCase, response.data.incheon.totalCase]);
        })
    }, []);
    useEffect(() => {
        axios.get('https://api.corona-19.kr/korea/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setHurtPeople([response.data.TotalCaseBefore, response.data.TotalCase, response.data.TodayDeath, response.data.TotalDeath])
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
                            <div className={style.title_real}>
                                <div className={style.pic1}></div>
                                <div className={style.title}>
                                    '대한민국' 전체 정보
                                </div>         
                            </div>                                               
                            <ul>
                                <li className={style.get2}>
                                    확진자수
                                    <span> {` `} </span>
                                    <span className={style.number_color}>{`${hurtPeople[0]}`}</span>
                                    명
                                </li> 
                                <li className={style.get2}>
                                    사망자
                                    <span>{` ${hurtPeople[2]}`}</span>
                                    명
                                </li>  
                                <li className={style.get2}>
                                    누적 확진
                                    <span>{` ${hurtPeople[1]}`}</span>
                                    명
                                </li>
                                <li className={style.get2}>
                                    누적 사망자
                                    <span>{` ${hurtPeople[3]}`}</span>
                                    명
                                </li>
                            </ul>
                        </div>
                        <div className={style.get}>
                            <div className={style.title_real}>
                                <div className={style.pic2}></div>
                                <div className={style.title}>
                                    '인천' 지역 정보
                                </div>          
                            </div>                    
                            <ul>
                                <li className={style.get2}>
                                    확진자수
                                    <span> {` `} </span>
                                    <span className={style.number_color}>{`${incheon[0]}`}</span>
                                    명
                                </li>
                                <li className={style.get2}>
                                    누적 확진
                                    <span>{` ${incheon[1]}`}</span>
                                    명
                                </li>
                                <li className={style.get2}>
                                    3차 접종
                                    <span>{` ${Vaccine}`}</span>
                                    명
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.notice}>
                        공지사항
                        <div className={style.Gongji}>
                            <span> <span className={style.blue}>who?</span> 확진, 격리 통지받은 학생 </span>
                            <span> <span className={style.blue}>when?</span> 보건당국의 입원치료 통지 또는 격리 통지 시부터 격리 해제시까지</span>
                            <span> <span className={style.blue}>what?</span> 입원치료통지서, 격리통지서</span>   
                        </div>
                    </div>
                    <div className={style.pointer} onClick={() => {window.location.href = "/guidePage"}}>
                        <Link className={style.point} to="/guidePage">
                            ※ 지침 ※
                        </Link>
                    </div>
                </div>
                {flip ? 
                    
                    <div className={style.lr}>
                        <button className={style.send}>알림 보내기</button>
                        <div className={style.list}>

                        </div>
                        <button className={style.btn} onClick={onClick}>전환</button>
                    </div>  
                     : 
                    <div className={style.lr}>
                        <div className={style.send}>이상 학생 목록</div>
                        <div className={style.list}>

                        </div>
                        <button className={style.btn} onClick={onClick}>전환</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Teacher;