import style from "../routes/Teacher.module.css";

function Notice(){
    return(
        <div className={style.notice}>
            공지사항
            <div className={style.Gongji}>
                <span> <span className={style.blue}>who?</span> 확진, 격리 통지받은 학생 </span>
                <span> <span className={style.blue}>when?</span> 보건당국의 입원치료 통지 또는 격리 통지 시부터 격리 해제시까지</span>
                <span> <span className={style.blue}>what?</span> 입원치료통지서, 격리통지서</span>
                <span> <span className={style.red}>**</span> 구체적 사항은 교육청 지침 참고 !</span>   
            </div>
        </div>
    );
}

export default Notice;