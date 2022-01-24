import style from "../routes/Teacher.module.css";

function StudentList({title , nameList, phoneList, setFlip}){
    const onClick = () =>{
        setFlip((current)=>!current);
    }
    return(
        <div className={style.lr}>
            <div className={style.send}>{title}</div>
            <div className={style.list}>
                <div className={style.nameContainer}>
                    <span className={style.alertElementTitle}>이름</span>
                    {nameList.map(name => <span className={style.alertElement}>{name}</span>)}
                </div>
                <div className={style.phoneContainer}>
                    <span className={style.alertElementTitle}>폰 번호</span>
                    {phoneList.map(phone => <span className={style.alertElement}>{phone}</span>)}
                </div>
            </div>
            <button className={style.btn} onClick={onClick}>전환</button>
        </div>
    );
}
export default StudentList

