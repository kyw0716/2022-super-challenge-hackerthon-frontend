import axios from "axios";
import { useState } from "react/cjs/react.development";
import Student from "./Student";
import Teacher from "./Teacher";


function AfterLogin(){
    const [isTeacher, setIsTeacher] = useState(false);
    axios.get('/home').then((response) => {
        if(response.data.job === "TEACHER"){
            setIsTeacher(true);
        }
    })
    return(
        <div>
            {isTeacher ? <Teacher/> : <Student/>}
        </div>
    )
}

export default AfterLogin;