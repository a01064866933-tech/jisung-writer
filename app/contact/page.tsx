'use client';

import { FormEvent, useState } from 'react';

const supabaseUrl = 'https://bdkgplecpebsuznvbaan.supabase.co';
const supabaseAnonKey = 'sb_publishable_a1J86gLTHEnzRfN8_-5CFQ_tbtcjZOi';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  async function submitProposal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    setSubmitting(true);
    setMessage('');
    setSuccess(false);

    const now = new Date();
    const inquiryCode = `FW-${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const payload = {
      inquiry_code: inquiryCode,
      lead_type: 'writer',
      status: '신규 문의',
      contact_name: String(data.get('contactName') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      company: String(data.get('organization') || '').trim(),
      email: String(data.get('email') || '').trim(),
      event_date: data.get('eventDate') || null,
      package_type: null,
      notes: `제안 유형: ${String(data.get('proposalType') || '').trim()}\n장소: ${String(data.get('location') || '').trim() || '-'}\n예산: ${String(data.get('budget') || '').trim() || '-'}\n제안 내용: ${String(data.get('detail') || '').trim()}`,
      privacy_consent: true,
      terms_consent: true,
      source: document.referrer.includes('/instagram') || new URLSearchParams(window.location.search).get('source') === 'instagram' ? 'instagram' : 'threads'
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
      setMessage(`문의번호 ${inquiryCode}로 접수되었습니다. 확인 후 연락드리겠습니다.`);
    } catch {
      setMessage('자동 접수가 지연되고 있습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="contactPage">
      <div className="contactWrap">
        <a className="backLink" href="/">← 작가 페이지로 돌아가기</a>
        <header className="contactHeader">
          <p>Talk &amp; Collaboration</p>
          <h1>강연·협업 문의</h1>
          <span>북토크, 강연, 인터뷰, 콘텐츠 협업의 목적과 일정을 남겨주시면 확인 후 연락드리겠습니다.</span>
        </header>

        <form className="contactForm" onSubmit={submitProposal}>
          <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="formGrid">
            <label>기관·회사명<input name="organization" maxLength={100} /></label>
            <label>담당자 이름 <b>*</b><input name="contactName" maxLength={60} required /></label>
            <label>연락처 <b>*</b><input name="phone" type="tel" maxLength={20} required /></label>
            <label>이메일 <b>*</b><input name="email" type="email" maxLength={160} required /></label>
            <label>제안 유형 <b>*</b><select name="proposalType" required defaultValue=""><option value="" disabled>선택해 주세요</option><option>북토크</option><option>강연</option><option>인터뷰</option><option>콘텐츠 협업</option><option>기타</option></select></label>
            <label>희망 날짜<input name="eventDate" type="date" /></label>
            <label>장소<input name="location" maxLength={120} /></label>
            <label>예산 범위<input name="budget" maxLength={80} placeholder="예: 협의, 100만원" /></label>
            <label className="fullField">제안 내용 <b>*</b><textarea name="detail" maxLength={600} rows={6} required placeholder="행사 목적, 대상, 요청하시는 내용을 자세히 적어주세요." /></label>
          </div>
          <div className="privacyNotice">
            <strong>개인정보 수집·이용 안내</strong>
            <p>수집 항목: 이름, 연락처, 이메일, 기관명 · 이용 목적: 강연·협업 문의 확인 및 회신 · 보관 기간: 문의 처리 후 1년</p>
          </div>
          <label className="consent"><input name="privacy" type="checkbox" required /> 위 개인정보 수집·이용에 동의합니다.</label>
          <button className="submitButton" type="submit" disabled={submitting}>{submitting ? '접수 중…' : '문의 접수하기'}</button>
          {message && <p className={success ? 'formMessage success' : 'formMessage'} role="status">{message}</p>}
        </form>
      </div>
    </main>
  );
}
