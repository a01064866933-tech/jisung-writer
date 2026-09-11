'use client';

import { FormEvent, useState } from 'react';

const bookUrl = 'https://product.kyobobook.co.kr/detail/S000220161919?utm_source=threads&utm_medium=social&utm_campaign=author_profile';
const supabaseUrl = 'https://bdkgplecpebsuznvbaan.supabase.co';
const supabaseAnonKey = 'sb_publishable_a1J86gLTHEnzRfN8_-5CFQ_tbtcjZOi';
const writerInstagram = 'https://www.instagram.com/jisung_writer/';
const threadsUrl = 'https://www.threads.com/@freshday_sandwich';
const businessUrl = 'https://freshday-link.vercel.app/';

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [success, setSuccess] = useState(false);

  async function submitProposal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    setSubmitting(true);
    setFormMessage('');
    const now = new Date();
    const inquiryCode = `FW-${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const detail = String(data.get('detail') || '').trim();
    const location = String(data.get('location') || '').trim();
    const budget = String(data.get('budget') || '').trim();
    const payload = {
      inquiry_code: inquiryCode,
      lead_type: 'writer',
      status: '신규 문의',
      contact_name: String(data.get('contactName') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      company: String(data.get('organization') || '').trim(),
      email: String(data.get('email') || '').trim(),
      event_date: data.get('eventDate') || null,
      package_type: String(data.get('proposalType') || ''),
      notes: `장소: ${location || '-'}\n예산: ${budget || '-'}\n제안 내용: ${detail}`,
      privacy_consent: true,
      terms_consent: true,
      source: document.referrer ? new URL(document.referrer).hostname : 'direct'
    };
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
        method: 'POST',
        headers: { apikey: supabaseAnonKey, Authorization: `Bearer ${supabaseAnonKey}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('request failed');
      form.reset();
      setSuccess(true);
      setFormMessage(`문의번호 ${inquiryCode}로 접수되었습니다. 확인 후 연락드리겠습니다.`);
    } catch {
      setFormMessage('자동 접수가 지연되고 있습니다. 작가 인스타그램 메시지로 제안 내용을 보내주세요.');
    } finally {
      setSubmitting(false);
    }
  }

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
            <p>북토크, 강연, 인터뷰, 콘텐츠 협업의 목적과 일정, 장소를 남겨주시면 확인 후 답변드리겠습니다.</p>
            <form className="proposal-form" onSubmit={submitProposal}>
              <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="proposal-grid">
                <label>기관·회사명<input name="organization" maxLength={120} /></label>
                <label>담당자 이름 *<input name="contactName" maxLength={60} required /></label>
                <label>연락처 *<input name="phone" type="tel" maxLength={20} required /></label>
                <label>이메일 *<input name="email" type="email" maxLength={160} required /></label>
                <label>제안 유형 *<select name="proposalType" required><option value="">선택해 주세요</option><option>북토크</option><option>강연</option><option>인터뷰</option><option>콘텐츠 협업</option><option>기타</option></select></label>
                <label>희망 날짜<input name="eventDate" type="date" /></label>
                <label>장소<input name="location" maxLength={200} /></label>
                <label>예산 범위<input name="budget" maxLength={100} placeholder="예: 협의, 100만원" /></label>
                <label className="full">제안 내용 *<textarea name="detail" maxLength={2000} rows={5} required /></label>
              </div>
              <label className="proposal-consent"><input name="privacy" type="checkbox" required /> 문의 답변을 위한 개인정보 수집·이용에 동의합니다.</label>
              <button className="button light" type="submit" disabled={submitting}>{submitting ? '접수 중…' : '강연·협업 문의 접수'}</button>
              {formMessage && <p className={success ? 'proposal-message success' : 'proposal-message'} role="status">{formMessage}</p>}
            </form>
            <a className="instagram-fallback" href={writerInstagram} target="_blank" rel="noreferrer">작가 Instagram으로 문의하기 ↗</a>
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
