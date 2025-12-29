import "./InfoPages.css";

const Terms = () => {
  return (
    <div className="info-page">
      <div className="info-container">
        <h1>이용약관</h1>
        <p className="last-updated">
          최종 수정일: {new Date().toLocaleDateString("ko-KR")}
        </p>

        <section className="info-section">
          <h2>제1조 (목적)</h2>
          <p>
            본 약관은 Math Trail(이하 &quot;서비스&quot;)이 제공하는 수학 학습
            서비스의 이용과 관련하여 서비스와 이용자 간의 권리, 의무 및
            책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section className="info-section">
          <h2>제2조 (정의)</h2>
          <ul>
            <li>
              &quot;서비스&quot;란 Math Trail이 제공하는 수학 문제 풀이 및 학습
              관련 서비스를 의미합니다.
            </li>
            <li>
              &quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 자를
              말합니다.
            </li>
            <li>
              &quot;콘텐츠&quot;란 서비스를 통해 제공되는 문제, 해설, 학습 자료
              등을 의미합니다.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>제3조 (약관의 효력 및 변경)</h2>
          <p>
            본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이
            발생합니다. 서비스는 필요한 경우 약관을 변경할 수 있으며, 변경된
            약관은 공지 후 7일이 경과한 시점부터 효력이 발생합니다.
          </p>
        </section>

        <section className="info-section">
          <h2>제4조 (서비스의 제공)</h2>
          <ul>
            <li>서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다.</li>
            <li>
              다만, 시스템 점검, 유지보수 등 필요한 경우 서비스 제공을 일시
              중단할 수 있습니다.
            </li>
            <li>
              서비스는 무료로 제공되며, 향후 유료 서비스가 추가될 경우 별도로
              공지합니다.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>제5조 (이용자의 의무)</h2>
          <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
          <ul>
            <li>타인의 정보 도용</li>
            <li>서비스 운영을 방해하는 행위</li>
            <li>콘텐츠의 무단 복제, 배포, 상업적 이용</li>
            <li>법령 또는 본 약관을 위반하는 행위</li>
            <li>기타 서비스의 정상적인 운영을 방해하는 행위</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>제6조 (저작권)</h2>
          <p>
            서비스가 제공하는 모든 콘텐츠의 저작권은 Math Trail에 귀속됩니다.
            이용자는 서비스를 통해 얻은 정보를 사전 승낙 없이 복제, 배포, 방송
            기타 방법에 의해 영리 목적으로 이용하거나 제3자에게 제공할 수
            없습니다.
          </p>
        </section>

        <section className="info-section">
          <h2>제7조 (면책조항)</h2>
          <ul>
            <li>
              서비스는 천재지변, 전쟁, 기타 불가항력으로 인해 서비스를 제공할 수
              없는 경우 책임이 면제됩니다.
            </li>
            <li>
              이용자의 귀책사유로 인한 서비스 이용 장애에 대해서는 책임을 지지
              않습니다.
            </li>
            <li>
              서비스는 이용자가 서비스를 이용하여 기대하는 학습 효과나 성적
              향상을 보장하지 않습니다.
            </li>
          </ul>
        </section>

        <section className="info-section">
          <h2>제8조 (분쟁 해결)</h2>
          <p>
            서비스와 이용자 간 발생한 분쟁에 관한 소송은 대한민국 법률을
            준거법으로 하며, 서비스의 본사 소재지를 관할하는 법원을 전속 관할
            법원으로 합니다.
          </p>
        </section>

        <section className="info-section">
          <h2>제9조 (문의)</h2>
          <p>
            본 약관에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기
            바랍니다.
          </p>
          <div className="contact-info">
            <p>
              이메일:{" "}
              <a href="mailto:rlagmlruadle@icloud.com">
                rlagmlruadle@icloud.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
