import HomeStudent from "../components/HomeStudent";
import HomeTeacher from "../components/HomeTeacher";
import style from "./Home.module.css";

function Home() {
    return (
        <div className="Home">
            <div className={style.upBox}></div>
            <div className={style.downBox}></div>
            <HomeStudent/>
            <HomeTeacher/>
        </div>
    );
}

export default Home;