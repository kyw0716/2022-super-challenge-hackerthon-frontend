import style from "../routes/Guide.module.css";

function GuideTable1(){
    return(
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
    );
}

export default GuideTable1;