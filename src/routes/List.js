import style from "./List.module.css"

function List({ q, setCon, setNumber, number}) {
    const Item = ({ text }) => {
        return text;
    }
    const n = number + 1;
    const onChange = (event) => {
        if(n === 4){
            alert('제출버튼을 클릭해주세요!!');
            setNumber(n - 1);
        }
        else{
            setNumber(n);
        }
        if(event.target.value === "yes"){
            setCon(true);
        }
        else{
            setCon(false);
        }
    }
    return (
        <div className={style.list}>
            <div className={style.question}>
                <Item text={q} />
            </div>
            <div className="answer">
                <label htmlFor="yes">예</label>
                <input id="yes" type="radio" value="yes" name={number} onClick={onChange} />
                <label htmlFor="no">아니요</label>
                <input id="no" type="radio" value="no" name={number} onClick={onChange} />
            </div>
        </div>
    )
}

export default List;