import style from "./List.module.css"

function List({ q, setCon, number}) {
    const Item = ({ text }) => {
        return text;
    }
    const onChange = (event) => {
        if(event.target.value === "yes"){
            setCon(true);
        }
        else{
            setCon(false);
        }
    }
    return (
        <div className={style.list} key={number}>
            <div className={style.question}>
                <Item text={q} />
            </div>
            <div className="answer">
                <label htmlFor="yes">예</label>
                <input id="yes" type="radio" value="yes" name={number} onChange={onChange} />
                <label htmlFor="no">아니요</label>
                <input id="no" type="radio" value="no" name={number} onChange={onChange} />
            </div>
        </div>
    )
}

export default List; 