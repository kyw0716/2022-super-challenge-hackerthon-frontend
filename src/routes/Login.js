import style from "./Login.module.css";

function Login() {
    return (
        <div className={style.login}>
            <div className={style.container}>
                <div className={style.upBox}>
                    <form action="" className={style.formTag}>
                        <div className={style.inputContainer}>
                            <input
                                className={style.input}
                                placeholder="ID"
                            />
                            <input
                                className={style.input}
                                placeholder="PW"
                            />
                        </div>
                        <button className={style.btn}>log in</button>
                    </form>
                </div>
                <div className={style.idPw}>회원가입 / ID PW 찾기</div>
            </div>
        </div>
    );
}
export default Login;