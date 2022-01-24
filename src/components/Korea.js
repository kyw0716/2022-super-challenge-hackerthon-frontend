import style from "../routes/Teacher.module.css";

function Korea({hurtPeople}){
    return(
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
    );
}

export default Korea;