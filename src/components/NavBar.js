import style from "../routes/Teacher.module.css";

function NavBar({ job, name, logout}){
    return(
        <div className={style.name}>
            <h1 className={style.school}>Hightech-school</h1>
            <h3 className={style.welcome}>{name} {job}, 환영합니다!<button onClick={logout} className={style.btn2}>logout</button></h3>
        </div>
    );
}

export default NavBar