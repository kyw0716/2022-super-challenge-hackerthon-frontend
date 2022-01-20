import style from "./List.module.css"

function List({ q, setAnswers}) {
    const Item = ({ text }) => {
        return text;
    }
    const onChange = (event) => {
        setAnswers(prev => [...prev, event.target.value]);
    }
    return (
        <div className={style.list}>
            <div className={style.question}>
                <Item text={q} />
            </div>

        <div className="answer">
            <label htmlFor="yes">예</label>
            <input id="yes" type="radio" value="yes" onChange={onChange} />
            <label htmlFor="no">아니요</label>
            <input id="no" type="radio" value="no" onChange={onChange} />
        </div>
        </div>
    )
}

export default List; 