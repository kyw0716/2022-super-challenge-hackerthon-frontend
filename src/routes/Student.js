import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import style from "./Student.module.css";
function Student() {
    const go = () => {
        window.location.href = "/listPage"
    }
    const [name, setName] = useState("");
    useEffect(()=>{
        axios.get('/home').then((response) => {
            setName(response.data.name);
        })
    },[]);
    return (
        <div className={style.student}>
            <div className={style.navBar}>
                <div className={style.logo}>
                    Hightech-school
                </div>
                <div className={style.name}>
                    {name}님, 환영합니다!
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
                    <div className={style.guide} onClick={() => {window.open("/guidePage")}}>
                        <Link className={style.guide2} to="/guidePage">
                            ※ 지침 ※
                        </Link>
                    </div>
                </div>
                <div className={style.rightContainer}>
                    <div className={style.box}>
                        <span className={style.boxTitle}>부작용 신고</span>
                        <div className={style.picture1}></div>
                        <button className={style.link} onClick={()=>{window.open("https://ncv.kdca.go.kr/menu.es?mid=a12601010000")}}>바로가기</button>
                    </div>
                    <div className={style.box}>
                        <span className={style.boxTitle}>백신예약</span>
                        <div className={style.picture2}></div>
                        <button className={style.link} onClick={()=>{window.open("https://relay.kdca.go.kr/cobk/rsrv/web/getVcnRsrvCnfm.do?tokKey=67bfa439bddefc7c731e8443eecc55926db9a6c88a40bfc2a8640b088ed2db5aed9056f3296c2cbf98f532c85b2f4565c8f291d2fef7c582c621e722fd5fffe3a6aa9ae8deef98d49ad99d5aa11127c226d7a1b4b4fd0d7217333a2972d30575e76291e0688d88906b23")}}>바로가기</button>
                    </div>
                    <div className={style.box}>
                        <span className={style.boxTitle}>예방접종 도우미</span>
                        <div className={style.picture3}></div>
                        <button className={style.link} onClick={()=>{window.open("https://nip.kdca.go.kr/irgd/index.html")}}>바로가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;