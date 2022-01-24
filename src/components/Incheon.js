import style from "../routes/Teacher.module.css";

function Incheon({incheon, Vaccine}){
    return(
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
    );
}

export default Incheon;