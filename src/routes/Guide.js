import style from "./Guide.module.css";

function Guide() {
    return (
        <body className={style.guide}>
            <div className={style.rightBox}>
                <div className={style.rightTitle}>질병관리청 지침</div>
                <div className={style.rightText}>

                </div>
            </div>
            <div className={style.leftBox}>
                <div className={style.rightTitle}>학교 지침</div>
                <div className={style.leftText}>

                </div>
            </div>
        </body>
    );
}

export default Guide;