const passages = [
  {
    title: '〈부엌에서 온 방울토마토〉 중에서',
    body: '나는 컵과일을 만들며 가끔 생각한다. 저 토마토 안에는 부엌 할머니의 웃음이 들어 있다고. 그리고 그 웃음을 먹는 사람들은 모를 것이다. 자신이 지금 누군가의 온정을 함께 삼키고 있다는 것을. 배려는 보이지 않는 곳에서 작동하고, 온정은 그것을 받는 사람조차 알아채지 못할 때 가장 순수하다. 잘못 온 택배는 결국 제자리를 찾았다. 다만 그 자리가 처음 예정되었던 곳은 아니었다.',
  },
  {
    title: '〈서른 살의 그녀와 스무 살의 나〉 중에서',
    body: '그 순간 눈물이 왈칵 쏟아졌다. 물이 차오르던 그 밤을 이 공간에서 혼자 버텼을 그녀를 생각하니 가슴이 먹먹했다. 나는 서둘러 매장으로 달려갔다. 샌드위치를 정성껏 만들고 그녀가 좋아할 것 같은 과일도 함께 챙겼다. 그리고 잘 말린 이불과 함께 집 안에 놓아두고 돌아왔다. 늦은 밤 그녀가 귀가했을 때 차가운 공기 대신 뽀송해진 이불과 누군가의 마음이 먼저 느껴졌으면 했다. 이 상황이 조금 덜 외롭고, 조금 덜 두려웠으면 하는 마음이었다.',
  },
  {
    title: '〈복채보다 깊은 인연〉 중에서',
    body: '사람은 혼자 만들어지는 존재가 아니라, 인연과 운명이 스쳐 지나갈 때마다 더해지는 마음들로 조금씩 완성되어가는지도 모른다. 삶의 무게가 어깨를 짓누르는 날에도 내가 다시 도마 앞에 설 수 있는 것은 그 순간마다 나를 붙잡아준 사람들 덕분이다. 대운이란 어쩌면 하늘에서 떨어지는 행운이 아니라 내 곁에 남은 인연들이 나를 앞으로 밀어주는 힘일지도 모른다. 나는 오늘도 나를 버티게 해준 마음들을 안고 살아간다. 그리고 조용히 웃는다.',
  },
  {
    title: '〈세 바퀴의 기도〉 중에서',
    body: '다섯 평 남짓한 작은 매장이지만 이 안은 이렇듯 보이지 않는 기도와 응원의 결들로 조금씩 자라나며 단단해지고 있다고 믿는다. 오늘도 나를 모르는 누군가가 어떤 모퉁이에서 가만히 내 행복을 빌어주고 있을지도 모른다.\n\n실체를 알 수 없는 다정함을 상상하는 것만으로도 자리를 박차고 일어서는 용기가 생긴다. 나는 잘 살아내고 싶다. 그 마음들이 헛되지 않았다는 것을 내 삶으로 증명하고 싶다. 할머니가 골목에 남기고 간 그 따뜻한 기도의 바통을 이어받는다. 그리고 다시 누군가의 마음이 절실한 곳을 향해, 샌드위치 한 조각에 온기를 담아 조심스레 내어놓는다. 그것이 내가 주방을 지키며 배운, 사랑을 실천하는 ‘사랑의 문법’이다.',
  },
];

const socials = [
  { number: '01', title: '인스타그램 · 샌드위치 계정', description: '더상큼하루 · 단체주문과 창업클래스', href: 'https://www.instagram.com/freshday_sandwich/' },
  { number: '02', title: '인스타그램 · 작가 계정', description: '박지성 · 책과 글의 기록', href: 'https://www.instagram.com/jisung_writer/' },
];

const instagramSocials = [
  socials[0],
  { number: '02', title: 'Threads · 작가 계정', description: '박지성 · 생각과 일상의 기록', href: 'https://www.threads.com/@jisung.writer' },
];

const moments = [
  { src: '/events/kyobo-launch-wide.jpg', category: '교보문고 출간 강연', title: '다섯 평에서 시작된 이야기', alt: '교보문고 출간 강연에서 박지성 작가와 독자들이 함께하는 모습' },
  { src: '/events/launch-group.jpg', category: '충무로 책과강연', title: '출간 강연', alt: '충무로 책과강연 출간 강연에서 박지성 작가와 독자들이 기념 촬영하는 모습' },
  { src: '/events/lecture-audience.jpg', category: '북토크', title: '책을 중심으로 모인 시간', alt: '북토크 현장을 가득 채운 독자들과 강연 무대' },
  { src: '/events/lecture-story.jpg', category: '강연', title: '삶과 책을 잇는 이야기', alt: '박지성 작가가 자신의 삶과 책 이야기를 강연하는 모습', position: 'center 72%' },
  { src: '/events/small-booktalk.jpg', category: '독자 모임', title: '작은 자리에서 깊게 나눈 이야기', alt: '작은 북토크에서 박지성 작가와 독자들이 책을 들고 웃는 모습', position: 'center 60%' },
  { src: '/events/reader-meeting.jpg?v=20261109c', category: '독자 만남', title: '책으로 이어진 인연', alt: '박지성 작가와 독자들이 책을 들고 함께한 모습', position: 'center' },
  { src: '/events/reader-meeting-two.jpg?v=20261109c', category: '독자 만남', title: '책으로 이어진 또 하나의 인연', alt: '박지성 작가와 독자들이 다섯 평이면 충분해를 들고 함께한 모습', position: 'center' },
];

export function WriterLanding({ instagramVariant = false }: { instagramVariant?: boolean }) {
  return (
    <main>
      <section className="hero wrap">
        <h1>낮에는 샌드위치를 만들고,<br />밤에는 글을 씁니다.</h1>
        <h2>낮샌밤글 박지성</h2>
        <p>작가 / 더상큼하루 대표</p>
        <img className="heroPhoto" src="/book-hero.jpg?v=20261108" alt="박지성 작가의 책 다섯 평이면 충분해" />
        <a className="primaryButton" href="https://product.kyobobook.co.kr/detail/S000220161919" target="_blank" rel="noreferrer">책 구매하러 가기 ↗</a>
      </section>

      <section className="content wrap">
        <section className="authorProfile" aria-labelledby="author-title">
          <p className="eyebrow">About the Author</p>
          <h2 id="author-title">작은 가게에서 시작된 이야기를<br />책과 강연으로 나눕니다.</h2>
          <div className="authorCopy">
            <p>샌드위치 가게 ‘더상큼하루’를 운영하며 삶에서 만난 사람과 마음을 기록합니다. 작은 가게에서 다시 일어선 이야기를 담은 에세이 『다섯 평이면 충분해』를 출간했습니다.</p>
            <p>책과 강연을 통해 다시 시작하는 힘, 일하는 사람의 마음, 평범한 일상에서 발견한 온기를 나누고 싶습니다.</p>
          </div>
          <ul className="credentials">
            <li><span>01</span><strong>『다섯 평이면 충분해』 저자</strong></li>
            <li><span>02</span><strong>더상큼하루 대표</strong></li>
            <li><span>03</span><strong>광화문·충무로 출간 강연 진행</strong></li>
            <li><span>04</span><strong>북토크·인터뷰·콘텐츠 협업</strong></li>
          </ul>
        </section>

        <header className="sectionHeader">
          <h2>책속으로</h2>
          <p>『다섯 평이면 충분해』의 문장을 미리 읽어보세요.</p>
        </header>
        <div className="passages">
          {passages.map((passage, index) => (
            <article className="passage" key={passage.title}>
              <span className="number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{passage.title}</h3>
              {passage.body.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </div>

        <blockquote className="recommendation">
          <span className="quote">“</span>
          <h3>이철환 작가의 추천사</h3>
          <p>이렇게 저렇게 살아가는 사람들의 삶의 모습을 가만히 바라보았습니다. 어떤 삶을 살아가든 사람들은 각자 그가 할 수 있는 만큼 최선을 다해 살았습니다. 박지성 작가님의 글을 읽으며 최선을 다하는 삶 너머의 삶이 보였습니다. 그녀의 이야기는 삶이 끝날때까지 지키고 싶은 저의 바람과 맞닿아 있었습니다.</p>
          <p>긴 숨을 내쉬며 갈 길이 멀었구나 생각했습니다. 그녀의 섬세하고 아름다운 글이 민들레 한숨에 가닿기를 소망합니다. 해바라기 눈높이로 바라보아야 볼 수 있는 세계의 진실이 있었습니다. 민들레의 눈높이로 바라보아야 비로소 볼 수 있는 세계의 진실이 있었습니다.</p>
          <footer>이철환(소설가) · 『연탄길』, 『위로』 작가</footer>
        </blockquote>

        <p className="source">출처: 『다섯 평이면 충분해』 · <a href="https://product.kyobobook.co.kr/detail/S000220161919" target="_blank" rel="noreferrer">교보문고 ‘책 속으로’ 및 추천사 원문 보기 ↗</a></p>

        <section className="talks" aria-labelledby="talks-title">
          <p className="eyebrow">Talk &amp; Collaboration</p>
          <h2 id="talks-title">함께 나눌 수 있는 이야기</h2>
          <p className="talksLead">책과 삶, 작은 가게와 다시 시작하는 힘을 주제로 독자와 조직을 만납니다.</p>
          <div className="talkGrid">
            <article><span>01</span><h3>무너진 자리에서<br />다시 시작하는 힘</h3><p>삶의 위기를 지나 작은 일상을 다시 세우는 과정과 회복의 힘</p></article>
            <article><span>02</span><h3>작은 가게가<br />가르쳐준 것</h3><p>다섯 평의 공간에서 사람을 만나며 배운 일, 관계, 성장의 이야기</p></article>
            <article><span>03</span><h3>샌드위치 사장의<br />책 출간 이야기</h3><p>평범한 하루의 기록이 한 권의 책과 강연으로 이어진 과정</p></article>
          </div>
          <p className="partnerNote">기업 · 기관 · 도서관 · 서점 · 커뮤니티의 북토크, 강연, 인터뷰와 콘텐츠 협업을 제안해 주세요.</p>
        </section>

        <section className="moments" aria-labelledby="moments-title">
          <p className="eyebrow">Speaking &amp; Readers</p>
          <h2 id="moments-title">강연과 독자 만남</h2>
          <p className="momentsLead">한 사람의 경험이 서로의 용기가 되는 자리에서 독자와 만나고 있습니다.</p>
          <div className="momentGrid">
            {moments.map((moment) => (
              <figure className="moment" key={moment.src}>
                <img src={moment.src} alt={moment.alt} loading="lazy" style={{ objectPosition: moment.position ?? 'center' }} />
                <figcaption>
                  <span>{moment.category}</span>
                  <strong>{moment.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cta">
          <div>
            <a className="primaryButton" href="https://product.kyobobook.co.kr/detail/S000220161919" target="_blank" rel="noreferrer">책 만나보기 ↗</a>
            <a className="secondaryButton" href={`/contact?source=${instagramVariant ? 'instagram' : 'threads'}`}>강연·협업 문의 →</a>
          </div>
          <p>신청서를 남겨주시면 확인 후 이메일로 회신드립니다.</p>
        </section>

        <nav className="socials" aria-label="박지성 관련 계정">
          {(instagramVariant ? instagramSocials : socials).map((social) => (
            <a href={social.href} target="_blank" rel="noreferrer" key={social.number}>
              <span className="socialNumber">{social.number}</span>
              <span className="socialCopy"><strong>{social.title}</strong><small>{social.description}</small></span>
              <span className="arrow">↗</span>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}

export default function Home() {
  return <WriterLanding />;
}
