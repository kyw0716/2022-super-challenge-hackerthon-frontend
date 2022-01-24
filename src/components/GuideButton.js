import { Link } from "react-router-dom";

function GuideButton({style1, style2}){
    return(
        <div className={style1} onClick={() => {window.open("/guidePage")}}>
            <Link className={style2} to="/guidePage">
                ※ 지침 ※
            </Link>
        </div>
    );
}

export default GuideButton;