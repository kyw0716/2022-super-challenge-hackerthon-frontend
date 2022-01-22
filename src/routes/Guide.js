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
                <table className={style.table}>
                        <tr className={style.line1}>
                            <th className={style.line3}>목차</th>
                            <th>주요사항</th>
                        </tr>
                        <tr className={style.line2}>
                            <td> 공통</td>
                            <td> ✓ 국내/외 예방접종완료자 유효기간 명시
                            : 2차접종자는 접종완료 후 14일이 경과한 날부터 180일까지, 3차접종자는 접종 즉시 유효(유효기간 만료일 없음)
                            </td>
                        </tr>
                        <tr className={style.line2}>
                            <td>사례정의</td>
                            <td>✓ 국내·외 예방접종완료자 정의 수정
                            : 2차 접종을 완료하거나 2차 접종 후 3차(부스터) 접종을 완료한 자
                            </td>
                        </tr>
                        <tr className={style.line2}>
                            <td>확진환자 발생 시 조치</td>
                            <td>✓ 해외입국 확진자 재택치료 적용 안내(旣 시행중)
                            : 재택 또는 병원 또는 생활치료센터로 이송</td>
                        </tr>
                        <tr className={style.line2}>
                            <td>접촉자 관리</td>
                            <td>✓ 예방접종완료자 수동감시 중 PCR검사 안내
                                : 수동감시로 전환한 이후라도 6~7일차 PCR검사 실시
                                ✓ 오미크론 변이 관련 역학조사 및 접촉자 관리 방안 변경 안내(1.3.~)
                                : 오미크론 관련 밀접접촉자는 10일간 자가격리
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className={style.leftBox}>
                <div className={style.rightTitle}>
                    <div className={style.photo2}></div>
                    교육청 지침
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