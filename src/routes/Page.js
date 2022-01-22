import style from "./Page.module.css"
import List from "./List.js"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";

function Page() {
    const [con, setCon] = useState(false);
    const [number, setNumber] = useState(0);
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    useEffect(()=>{
        let d = new Date();
        setDay(d.getDate());
        setMonth(d.getMonth() + 1);
    },[]);
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("/self_diagnosis2/write",{
            "day" : day,
            "month" : month,
            "check" : con
        })
        if(number === 3){
            window.location.href="/studentPage";
        }
    }
    const text = [
        ["1. 귀하는 코로나 19가 의심되는 아래의 임상증상*이 있나요?", <br />, "*(주요 임상증상) 발열(37.5도 이상), 기침, 호흡곤란, 오한, 근육통, 두통, 인후통, 후각-미각소실", <br />, "※단 학교에서 선별진료소 검사결과(음성)을 확인 후 등교를 허용한 경우, 또는 선천성 질환-만성질환(천식 등)으로  인한 증상인 경우 '아니오'를 선택하시오."],
        ["2. 귀하 본인 또는 동거인이 코로나19 진단검사를 받고 그 결과를 기다리고 있나요?", <br />, "※단 확진자와의 접촉 가능성 등으로 보건당국의 권고에 의해 검사한 것이 아닌경우 '아니오'를 선택하세요", <br />, "*직업특성에 의한 정기검사, 대회참여 등 선제적 예방 목적"],
        ["3. 귀하 본인 또는 동거인이 방역당국에 의해 현재 자가격리가 이루어지고 있나요?", <br />, "※'단계적 일상회복을 위한 공무원 복무관리 지침'을 준용, 학교장과 협의하여 출근 판단"],
        ["4. 귀하의 동거인 중 확진자가 있나요?", <br />, "※단 귀하가 방역당국 지침에 따라 수동감시 대상이 된 경우 '아니오'를 선택하세요", <br />, "*수동감시 요건: PCR검사 음성, 밀접접촉 당시 접종 완료, 무증상 등 모두 충족 <방역당국 접종 완료자 지침>"]
    ]
    return (
        <div className={style.Page}>
            <div className={style.page}>
                <div className={style.top_bar}>
                    <h1 className={style.title}>✔ 건강상태 자가진단</h1>
                    <Link className={style.back} to="/studentPage">처음으로</Link>
                </div>
                <form className={style.form}>
                    <List
                        q={text[number]}
                        setCon={setCon}
                        setNumber={setNumber}
                        number={number}
                    />
                    <input type="button" className={style.submit} onClick={onSubmit} value="제출"/>
                </form>
            </div>
        </div>
    );
}

export default Page