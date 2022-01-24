import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import GuideButton from "../components/GuideButton";
import LinkBox from "../components/LinkBox";
import NavBar from "../components/NavBar";
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
    const logout = () =>{
        axios.post('/logout').then(()=>{
            window.location.href = "/";
        })
    }
    return (
        <div className={style.student}>
            <NavBar job={"학생"} name={name} logout={logout} />
            <hr />
            <div className={style.mainContainer}>
                <div className={style.leftContainer}>
                    <div className={style.test}>
                        <span>자가진단</span><br />
                        <span>하러가기</span>
                        <button className={style.testBtn} onClick={go}>Go!!</button>
                    </div>
                    <GuideButton style1={style.guide} style2={style.guide2}/>
                </div>
                <div className={style.rightContainer}>
                    <LinkBox title={"부작용 대처"} url={"https://ncv.kdca.go.kr/menu.es?mid=a12601010000"} picture={style.picture1}/>
                    <LinkBox title={"백신예약"} picture={style.picture2} url={"https://relay.kdca.go.kr/cobk/rsrv/web/getVcnRsrvCnfm.do?tokKey=67bfa439bddefc7c731e8443eecc55926db9a6c88a40bfc2a8640b088ed2db5aed9056f3296c2cbf98f532c85b2f4565c8f291d2fef7c582c621e722fd5fffe3a6aa9ae8deef98d49ad99d5aa11127c226d7a1b4b4fd0d7217333a2972d30575e76291e0688d88906b23"} />
                    <LinkBox title={"예방접종"} url={"https://nip.kdca.go.kr/irgd/index.html"} picture={style.picture3}/>
                </div>
            </div>
        </div>
    );
}

export default Student;