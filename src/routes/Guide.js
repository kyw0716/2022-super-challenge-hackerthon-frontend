import style from "./Guide.module.css";

function Guide() {
    return (
        <body className={style.guide}>
            <div className={style.rightBox}>
                <div className={style.rightTitle}>
                    <div className={style.photo1}></div>
                    질병관리청 지침
                </div>
                <div className={style.rightText}>

                </div>
            </div>
            <div className={style.leftBox}>
                <div className={style.rightTitle}>
                    <div className={style.photo2}></div>
                    학교 지침
                </div>
                <div className={style.leftText}>

                </div>
            </div>
        </body>
    );
}

export default Guide;