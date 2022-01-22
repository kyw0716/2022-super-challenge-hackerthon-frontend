import axios from "axios";
import { useState } from "react/cjs/react.development";
import Student from "./Student";
import Teacher from "./Teacher";


function AfterLogin(){
    const [isTeacher, setIsTeacher] = useState(false);
    const [name, setName] = useState("");
    axios.get('/home').then((response) => {
        setName(response.data.name);
        if(response.data.job === "TEACHER"){
            setIsTeacher(true);
        }
    })
    return(
        <div>
            {isTeacher ? <Teacher name={name}/> : <Student name={name}/>}
        </div>
    )
}

export default AfterLogin;