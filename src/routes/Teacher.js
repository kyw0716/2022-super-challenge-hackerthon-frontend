import style from "./Teacher.module.css"
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useEffect } from "react";
import StudentList from "../components/StudentList";
import Korea from "../components/Korea";
import Incheon from "../components/Incheon";
import Notice from "../components/Notice";
import GuideButton from "../components/GuideButton";
import NavBar from "../components/NavBar";

function Teacher() {
    const [hurtPeople, setHurtPeople] = useState([]);
    const [incheon, setIncheon] = useState([]);
    const [vaccine, setVaccine] = useState(0);
    const [flip, setFlip] = useState(true);
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);
    const [phoneList, setPhoneList] = useState([]);
    const [stopName, setStopName] = useState([]);
    const [stopPhone, setStopPhone] = useState([]);
    const Vaccine = vaccine.toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    useEffect(() => {
        axios.get('https://api.corona-19.kr/korea/vaccine/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setVaccine(response.data.incheon.vaccine_3.vaccine_3)
        });
    }, []);
    useEffect(()=>{
        axios.get('https://api.corona-19.kr/korea/country/new/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setIncheon([response.data.incheon.newCase, response.data.incheon.totalCase]);
        });
    },[]);
    useEffect(()=>{
        axios.get('https://api.corona-19.kr/korea/?serviceKey=14DrSTLUEibmjXfIlCZJkYs6yzO35NuGA').then((response) => {
            setHurtPeople([response.data.TotalCaseBefore, response.data.TotalCase, response.data.TodayDeath, response.data.TotalDeath])
        });
    },[]);
    useEffect(()=>{
        axios.get('/home').then((response) => {
            setName(response.data.name);
        })
    },[]);
    useEffect(()=>{
        axios.get('/check/search')
            .then((response) => {
                for(let i = 0; i < response.data.length; i++){
                    if(response.data[i].stop_going_school === true){
                        setStopName((current) => [...current,response.data[i].name]);
                        setStopPhone((current) => [...current,response.data[i].phoneNumber]);
                    }
                }
                axios.get('/check/send')
                .then((response2) => {
                    for(let i = 0; i < response2.data.length; i++){
                        setNameList((current) => [...current,response2.data[i].name]);
                        setPhoneList((current) => [...current,response2.data[i].phoneNumber]);
                    }
                })
            })
    },[]);
    const logout = () =>{
        axios.post('/logout').then(() =>{
            window.location.href="/";
        })
    }
    return (
        <div className={style.teacher}>
            <NavBar job={"선생님"} name={name} logout={logout} />
            <div className={style.bottom}>
                <div className={style.lr}>
                    <div className={style.number}>
                        <Korea hurtPeople={hurtPeople} />
                        <Incheon incheon={incheon} Vaccine={Vaccine} />
                    </div>
                    <Notice />
                    <GuideButton style1={style.pointer} style2={style.point}/>
                </div>
                {flip ? 
                    <StudentList title={"자가진단 미실시 학생 목록"} nameList={nameList} phoneList={phoneList} setFlip={setFlip}/>
                    : 
                    <StudentList title={"이상 학생 목록"} nameList={stopName} phoneList={stopPhone} setFlip={setFlip}/>
                }
            </div>
        </div>
    );
}

export default Teacher;