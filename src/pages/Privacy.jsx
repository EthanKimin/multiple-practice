import "./InfoPages.css";

const Privacy = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>개인정보처리방침</h1>
        <p className="last-updated">
          최종 수정일: {new Date().toLocaleDateString("ko-KR")}
        </p>

        <section className="info-section">
          <h2>1. 개인정보의 처리 목적</h2>
          <p>
            Math Trail(이하 &quot;서비스&quot;)은 다음의 목적을 위하여
            개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
            용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보
            보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
            예정입니다.
          </p>
        </section>

        <section className="info-section">
          <h2>2. 개인정보의 처리 및 보유 기간</h2>
          <p>
            서비스는 현재 별도의 회원가입 절차가 없으며, 개인정보를 수집하거나
            저장하지 않습니다. 향후 회원가입 기능이 추가될 경우, 개인정보의 수집
            및 이용에 대해 별도로 동의를 받을 예정입니다.
          </p>
        </section>

        <section className="info-section">
          <h2>3. 처리하는 개인정보의 항목</h2>
          <p>서비스는 다음의 개인정보 항목을 처리하고 있습니다:</p>
          <ul>
            <li>
              <strong>자동 수집 항목:</strong> 접속 로그, 쿠키, 접속 IP 정보,
              브라우저 정보
            </li>
            <li>
              <strong>향후 수집 가능 항목 (회원가입 시):</strong> 이메일 주소,
              닉네임
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
            다만, 다음의 경우에는 예외로 합니다:
          </p>
          <ul>
            <li>이용자가 사전에 동의한 경우</li>
            <li>
              법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
              방법에 따라 수사기관의 요구가 있는 경우
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>5. 개인정보의 파기 절차 및 방법</h2>
          <p>
            서비스는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가
            불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
          </p>
          <ul>
            <li>
              <strong>파기 절차:</strong> 이용자가 입력한 정보는 목적 달성 후
              별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간
              저장된 후 파기됩니다.
            </li>
            <li>
              <strong>파기 방법:</strong> 전자적 파일 형태의 정보는 기록을
              재생할 수 없는 기술적 방법을 사용합니다.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>6. 이용자의 권리·의무 및 그 행사방법</h2>
          <p>
            이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
          </p>
          <ul>
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리정지 요구</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>7. 개인정보의 안전성 확보 조치</h2>
          <p>
            서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다:
          </p>
          <ul>
            <li>개인정보 취급 직원의 최소화 및 교육</li>
            <li>개인정보에 대한 접근 제한</li>
            <li>접속기록의 보관 및 위변조 방지</li>
            <li>개인정보의 암호화</li>
            <li>해킹 등에 대비한 기술적 대책</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>8. 쿠키(Cookie)의 운용</h2>
          <p>
            서비스는 이용자에게 보다 나은 서비스를 제공하기 위해 쿠키를 사용할
            수 있습니다.
          </p>
          <ul>
            <li>
              <strong>쿠키의 사용 목적:</strong> 이용자의 학습 진도 저장, 사용자
              맞춤 서비스 제공
            </li>
            <li>
              <strong>쿠키의 설치·운영 및 거부:</strong> 웹 브라우저 상단의 도구
              &gt; 인터넷 옵션 &gt; 개인정보 메뉴에서 쿠키 저장을 거부할 수
              있습니다.
            </li>
            <li>
              쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
              있습니다.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>9. 개인정보 보호책임자</h2>
          <p>
            서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
            같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <div className="contact-info">
            <p>
              <strong>개인정보 보호책임자</strong>
            </p>
            <p>
              이메일:{" "}
              <a href="mailto:rlagmlruadle@icloud.com">
                rlagmlruadle@icloud.com
              </a>
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>10. 개인정보 처리방침 변경</h2>
          <p>
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
            변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
            전부터 공지사항을 통하여 고지할 것입니다.
          </p>
        </section>

        <section className="info-section">
          <h2>11. 권익침해 구제방법</h2>
          <p>
            아래의 기관은 서비스와는 별개의 기관으로서, 서비스의 자체적인
            개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한
            도움이 필요하시면 문의하여 주시기 바랍니다.
          </p>
          <ul>
            <li>
              개인정보 침해신고센터 (한국인터넷진흥원 운영)
              <ul>
                <li>소관업무: 개인정보 침해사실 신고, 상담 신청</li>
                <li>홈페이지: privacy.kisa.or.kr</li>
                <li>전화: (국번없이) 118</li>
              </ul>
            </li>
            <li>
              개인정보 분쟁조정위원회
              <ul>
                <li>
                  소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
                </li>
                <li>홈페이지: www.kopico.go.kr</li>
                <li>전화: (국번없이) 1833-6972</li>
              </ul>
            </li>
            <li>대검찰청 사이버범죄수사단: 02-3480-3573 (www.spo.go.kr)</li>
            <li>경찰청 사이버안전국: 182 (cyberbureau.police.go.kr)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
