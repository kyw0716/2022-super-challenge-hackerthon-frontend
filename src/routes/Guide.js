import GuideTable1 from "../components/GuideTable1";
import GuideTable2 from "../components/GuideTable2";
import style from "./Guide.module.css";

function Guide() {
    return (
        <body className={style.guide}>
            <GuideTable1/>
            <GuideTable2/>
        </body>
    );
}

export default Guide;