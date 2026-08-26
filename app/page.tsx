const bookUrl = 'https://product.kyobobook.co.kr/detail/S000220161919?utm_source=threads&utm_medium=social&utm_campaign=author_profile';
const writerInstagram = 'https://www.instagram.com/jisung_writer/';
const threadsUrl = 'https://www.threads.com/@freshday_sandwich';
const businessUrl = 'https://freshday-link.vercel.app/';

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Writer · Sandwich Maker · Speaker</p>
            <h1 id="hero-title">낮에는 샌드위치를 만들고,<br />밤에는 글을 씁니다.</h1>
            <p className="lead">삶이 나를 다 무너뜨렸다고 생각한 날,<br className="desktop-break" /> 다섯 평의 작은 가게가 다시 살아갈 이유가 되어주었습니다.</p>
            <p className="signature">『다섯 평이면 충분해』 저자 박지성입니다.</p>
            <div className="hero-actions">
              <a className="button primary" href={bookUrl} target="_blank" rel="noreferrer">책 만나보기 <span aria-hidden="true">→</span></a>
              <a className="button ghost" href="#connect">강연·협업 문의</a>
            </div>
          </div>
          <div className="book-scene" aria-label="다섯 평이면 충분해 책 소개">
            <article className="book-cover">
              <span className="book-topline">박지성 에세이</span>
              <strong>다섯 평이면<br />충분해</strong>
              <span className="book-subtitle">전 재산 500만 원으로 다시 일어선<br />한 여성의 생활 에세이</span>
              <span className="book-author">박지성</span>
            </article>
            <p className="scene-note">첫 에세이 · 달먹는토끼</p>
          </div>
        </div>
      </section>

      <section className="story shell" aria-labelledby="story-title">
        <div className="section-index">01</div>
        <div><p className="eyebrow dark">My Story</p><h2 id="story-title">무너진 자리에서<br />다시 시작한 이야기</h2></div>
        <div className="story-copy">
          <p>혼자 두 아이를 키우며 작은 샌드위치 가게를 지켰습니다. 새벽마다 음식을 만들고, 밤이면 하루를 문장으로 옮겼습니다.</p>
          <p>특별한 성공담보다 넘어지고 다시 일어서는 평범한 사람의 힘을 이야기하고 싶습니다. 가게에서 만난 사람들, 버텨낸 시간, 다시 시작하는 마음을 글과 강연으로 나눕니다.</p>
        </div>
      </section>

      <section className="book-section" aria-labelledby="book-title">
        <div className="shell book-layout">
          <div className="quote-mark" aria-hidden="true">“</div>
          <div>
            <p className="eyebrow warm">The Book</p>
            <h2 id="book-title">다섯 평이면 충분해</h2>
            <blockquote>삶이 나를 다 무너뜨렸다고 생각한 날,<br />다섯 평이 나를 다시 살게 했다.</blockquote>
            <p className="book-description">혼자 가게를 지키며 버텨낸 시간, 엄마로 살아낸 시간, 넘어지고 다시 일어섰던 시간을 솔직하게 담았습니다. 괜찮은 척 하루를 견디는 사람에게 조용한 용기와 위로가 되기를 바랍니다.</p>
            <a className="text-link" href={bookUrl} target="_blank" rel="noreferrer">교보문고에서 책 보기 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="topics shell" aria-labelledby="topics-title">
        <div className="topics-heading">
          <p className="eyebrow dark">Talk & Collaboration</p>
          <h2 id="topics-title">함께 나눌 수 있는 이야기</h2>
          <p>책과 삶, 작은 가게와 다시 시작하는 힘을 주제로 사람들과 만납니다.</p>
        </div>
        <div className="topic-grid">
          <article><span>01</span><h3>무너진 뒤의<br />다시 시작</h3><p>삶의 위기를 지나 작은 일상을 다시 세우는 과정과 회복의 힘</p></article>
          <article><span>02</span><h3>작은 가게가<br />가르쳐준 것</h3><p>전 재산 500만 원, 다섯 평의 공간에서 배운 생존과 성장</p></article>
          <article><span>03</span><h3>평범한 삶을<br />한 권의 책으로</h3><p>삶의 기록이 원고가 되고 출간과 강연으로 이어진 실제 경험</p></article>
        </div>
      </section>

      <section className="connect" id="connect" aria-labelledby="connect-title">
        <div className="shell connect-grid">
          <div><p className="eyebrow">Meet Jisung</p><h2 id="connect-title">사람을 만나고,<br />이야기를 나누고 싶습니다.</h2></div>
          <div className="connect-copy">
            <p>북토크, 강연, 인터뷰, 콘텐츠 협업을 제안하고 싶다면 작가 Instagram 메시지로 연락해주세요. 제안 목적과 일정, 장소를 함께 보내주시면 확인 후 답변드리겠습니다.</p>
            <a className="button light" href={writerInstagram} target="_blank" rel="noreferrer">강연·협업 문의하기 <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <nav className="links shell" aria-label="박지성 관련 링크">
        <a href={threadsUrl} target="_blank" rel="noreferrer"><span>생각과 일상의 기록</span><strong>Threads</strong><i aria-hidden="true">↗</i></a>
        <a href={writerInstagram} target="_blank" rel="noreferrer"><span>책과 작가 활동</span><strong>Instagram</strong><i aria-hidden="true">↗</i></a>
        <a href={businessUrl} target="_blank" rel="noreferrer"><span>클래스·단체주문</span><strong>더상큼하루</strong><i aria-hidden="true">↗</i></a>
      </nav>

      <footer><div className="shell footer-inner"><strong>박지성</strong><span>Writer of 『다섯 평이면 충분해』</span><span>© 2026 Jisung Park</span></div></footer>
    </main>
  );
}
