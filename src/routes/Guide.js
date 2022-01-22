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
                    왜 자꾸 두근 두근대죠
                    이 내 가슴이 (자꾸만)
                    터 터질거같죠(자꾸만)
                    왜 자꾸 숨이 가파오죠
                    미칠것같이 (자꾸만)
                    수 숨이 막히죠 (자꾸만)
                    첫 사랑도 아닌데
                    순진한 건 아닌데
                    그댄 자꾸만 또 또
                    자꾸만 또 또
                    느끼게 해 줘요
                    그댄 나를 기쁘게 해요
                    그댄 나를 느끼게 해요
                    처 처음처럼
                    처 처음처럼
                    그댄 나를 미치게 해요
                    자꾸 자꾸 원하게 해요
                    처 처음처럼 처 처음처럼
                    처 처음처럼 처 럼처럼
                    처 처음처럼 처 럼처럼
                    처 처음처럼 처럼 처 처 처음처럼
                    척척척척척처음처럼
                    왜 자꾸 열이 나는거죠
                    온몸이 자꾸 (자꾸만)
                    다 달아오르죠 (자꾸만)
                    왜 자꾸 아찔아찔하죠
                    정신이 없어 (자꾸만)
                    저 죽을 거같죠 (자꾸만)
                    사랑사랑 지금껏 말로만 했던건지
                    그댈 만나고 난 느껴요 난
                    진짜 사랑이 뭔지
                    그댄 나를 기쁘게 해요
                    그댄 나를 느끼게 해요
                    처 처음처럼 처 처음처럼
                    그댄 나를 미치게 해요
                    자꾸 자꾸 원하게 해요
                    처 처음처럼 처 처음처럼
                    처 처음처럼 처럼처럼
                    처 처음처럼 처럼처럼
                    처 처음처럼 처럼 처 처 처음처럼
                    리무진에 샴페인 블링블링
                    jewerly chain
                    나를 원해 목이 메인 그런남자
                    Oh no
                    항상 발길에 채이는 그런 남잔
                    Just pain dont wanna play this game
                    꺼져버려 이젠
                    Now I wanna pump up my gain
                    This is bout my man Youre the only man
                    넌 나를 너무 잘 알기에
                    나를 기쁘게 기쁘게 기쁘게 해줘(Ho)
                    나를 느끼게 느끼게 느끼게 해줘(Ho)
                    그댄 나를 기쁘게 해요
                    그댄 나를 느끼게 해요
                    처 처음처럼 처 처음처럼
                    그댄 나를 미치게 해요
                    자꾸 자꾸 원하게 해요
                    처 처음처럼 처 처음처럼
                    처 처음처럼 처럼처럼
                    처 처음처럼 처럼처럼
                    처 처음처럼 처럼 처 처 처 처럼처럼

                </div>
            </div>
            <div className={style.leftBox}>
                <div className={style.rightTitle}>
                    <div className={style.photo2}></div>
                    학교 지침
                </div>
                <div className={style.leftText}>
                    <table className={style.table}>
                        <tr className={style.line1}>
                            <th>대상</th>
                            <th>등교중지 기간</th>
                            <th>출결 증빙자료</th>
                        </tr>
                        <tr className={style.line2}>
                            <td> <span className={style.blue}>확진, 격리 통지</span> 받은 학생</td>
                            <td> 보건당국의 <span className={style.blue}>입원 치료 통지 또는 격리 통지시</span>부터 격리 해제시까지</td>
                            <td> <span>✓ 입원치료통지서, 격리통지서</span></td>
                        </tr>
                        <tr className={style.line2}>
                            <td>실거주를 같이하는 동거인이 확진,격리 통지 받은 학생</td>
                            <td>보건당국의 격리 통지 시부터 격리 해제할 때까지</td>
                            <td>✓ 동거인의 격리통지서</td>
                        </tr>
                        <tr className={style.line2}>
                            <td><span className={style.blue}>본인 또는</span> 실거주를 같이하는 동거인이 <span className={style.blue}>유증상 또는 역학적 연관성이 있어</span> 진단검사를 실시한 경우</td>
                            <td>진단검사 결과가 나오기 전까지</td>
                            <td>✓  본인 또는 실거주를 같이하는 동거인의 검사실시 여부를 증빙할 수 있는 자료 
                                (예: 문자 통지 사본, <span className={style.blue}>검사 결과 통보 문자메시지</span> 등)</td>
                        </tr>
                        <tr className={style.line2}>
                            <td>코로나19 의심증상 학생
                                (임상증상 발현 학생)
                            </td>
                            <td>증상 발현 시부터 증상 소면(호전) 시까지</td>
                            <td>[코로나19 검사 결과 '음성'인 경우]
                            ✓ 검사 결과를 증빙할 수 있는 자료 (예: 선별진료소 진료확인서(발급 가능 시), 문자 통지 사본 등)
                            </td>
                        </tr>
                        <tr className={style.line2}>
                            <td>기저질환 학생
                                (보건학적 위험군)
                            </td>
                            <td>의사의 진단서(소견서)를 통해 인정된 기저질환 or 장애를 가진 학생의 경우
                                ** 폐질환, 당뇨, 만성 심혈관질환, 신장 질환, 만성 간질환, 악성종양, 면역 저하자 등
                            </td>
                            <td>의사 진단서에 따름
                                **학기 초 제출한 진단서(소견서)로 해당 학기 증빙을 갈음할 수 있음
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </body>
    );
}

export default Guide;