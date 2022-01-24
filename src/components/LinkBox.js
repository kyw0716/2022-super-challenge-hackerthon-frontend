import style from "../routes/Student.module.css";

function LinkBox({title, url, picture}){
    return(
        <div className={style.box}>
            <span className={style.boxTitle}>{title}</span>
            <div className={picture}></div>
            <button className={style.link} onClick={()=>{window.open(url)}}>바로가기</button>
        </div>
    )
}

export default LinkBox;