'use client'
import { Suspense, useState } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

const DARK      = '#111111'
const DARK_CARD = '#1c1c1c'
const GOLD      = '#B8954B'
const WHITE     = '#ffffff'
const PANEL     = '#faf5ee'
const GRAY      = '#f5f5f5'

const LOGO_URL     = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Layer-1-1024x215.png'
const BIO_PHOTO    = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Rectangle-24.png'
const HERO_PHOTO   = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Rectangle-24-1-1.png'
const REVIEWS_LOGO = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Group-8-2.png'
const PHONE_DISPLAY = '(925) 886-3926'
const PHONE_HREF    = 'tel:+19258863926'
const ADDRESS       = '4185 Blackhawk Plaza Circle, Danville, CA 94506'

// ─── Inline SVG Icons ────────────────────────────────────────────────────────

function IconCalendar() {
  return (
    <svg width="90" height="102" viewBox="0 0 106 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="12" width="102" height="105" rx="8" stroke={GOLD} strokeWidth="4" fill="none"/>
      <rect x="2" y="12" width="102" height="28" rx="4" fill={GOLD} fillOpacity="0.15"/>
      <line x1="30" y1="2" x2="30" y2="26" stroke={GOLD} strokeWidth="5" strokeLinecap="round"/>
      <line x1="76" y1="2" x2="76" y2="26" stroke={GOLD} strokeWidth="5" strokeLinecap="round"/>
      <line x1="2" y1="40" x2="104" y2="40" stroke={GOLD} strokeWidth="3"/>
      <rect x="16" y="54" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="44" y="54" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="72" y="54" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="16" y="78" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="44" y="78" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="72" y="78" width="18" height="14" rx="3" fill={GOLD} fillOpacity="0.4"/>
    </svg>
  )
}

function IconPerson() {
  return (
    <svg width="90" height="95" viewBox="0 0 133 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="66.5" cy="36" r="30" stroke={GOLD} strokeWidth="4" fill="none"/>
      <circle cx="66.5" cy="36" r="18" fill={GOLD} fillOpacity="0.2"/>
      <path d="M6 139c0-33.137 27.013-60 60.5-60s60.5 26.863 60.5 60" stroke={GOLD} strokeWidth="4" strokeLinecap="round" fill="none"/>
      <circle cx="66.5" cy="36" r="10" fill={GOLD}/>
    </svg>
  )
}

function IconPersonStar() {
  return (
    <svg width="90" height="95" viewBox="0 0 133 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="54" cy="38" r="28" stroke={GOLD} strokeWidth="4" fill="none"/>
      <circle cx="54" cy="38" r="14" fill={GOLD} fillOpacity="0.2"/>
      <path d="M4 139c0-31.48 22.536-57.5 50-57.5s50 26.02 50 57.5" stroke={GOLD} strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M98 60l4 12h13l-10.5 7.5 4 12L98 84l-10.5 7.5 4-12L81 72h13z" fill={GOLD}/>
    </svg>
  )
}

function IconCheckBadge() {
  return (
    <svg width="36" height="36" viewBox="0 0 85.554 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.777 0L52.2 9.423H65.6v13.4l9.423 9.423-9.423 9.423V55.2H52.2L42.777 64.623 33.354 55.2H19.954V41.8L10.531 32.377l9.423-9.423V9.554h13.4z" fill={GOLD}/>
      <path d="M28 33l9 9 18-18" stroke={WHITE} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconCapabilities() {
  return (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" stroke={GOLD} strokeWidth="3" fill="none"/>
      <circle cx="40" cy="26" r="10" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="2.5"/>
      <path d="M16 62c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke={GOLD} strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M30 50h20M35 57h10" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconSafety() {
  return (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 6L12 18v20c0 16.569 12.536 32.029 28 36 15.464-3.971 28-19.431 28-36V18L40 6z" stroke={GOLD} strokeWidth="3" fill="none"/>
      <path d="M28 40l8 8 16-16" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconPhilosophy() {
  return (
    <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 8C22.327 8 8 22.327 8 40s14.327 32 32 32 32-14.327 32-32S57.673 8 40 8z" stroke={GOLD} strokeWidth="3" fill="none"/>
      <path d="M40 24v18l10 6" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="40" cy="40" r="3" fill={GOLD}/>
    </svg>
  )
}

function StarFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={GOLD} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.9 8.9H23l-7.4 5.4 2.9 8.9L12 20l-6.5 5.2 2.9-8.9L1 11l8.1-.1z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 12.08a19.79 19.79 0 01-3.07-8.67A2 2 0 012.41 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.17a16 16 0 006 6l1.04-.04a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z"/>
    </svg>
  )
}

function AddressIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={WHITE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

// ─── CTA Button ──────────────────────────────────────────────────────────────

function GoldBtn({ label, href = '#form', style }: { label: string; href?: string; style?: React.CSSProperties }) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        background: GOLD,
        color: WHITE,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '14px 28px',
        borderRadius: 4,
        textDecoration: 'none',
        ...style,
      }}
    >
      {label}
    </a>
  )
}

// ─── Five Stars ───────────────────────────────────────────────────────────────

function FiveStars() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3,4,5].map(i => <StarFilled key={i} />)}
    </div>
  )
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #e0e0e0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 16, color: DARK, lineHeight: 1.4 }}>{q}</span>
        <span style={{ flexShrink: 0, color: GOLD }}><ChevronIcon open={open} /></span>
      </button>
      {open && (
        <div style={{ paddingBottom: 20, fontSize: 15, lineHeight: 1.8, color: '#555', fontFamily: "'Poppins', sans-serif" }}>
          {a}
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EliteMDLP({ heroFormId, bottomFormId }: { heroFormId: string; bottomFormId: string }) {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK, background: WHITE }}>
      <Suspense fallback={null}>
        <GclidCapture />
      </Suspense>

      {/* ── 1. HEADER ──────────────────────────────────────────────────────── */}
      <header
        className="emd-nav"
        style={{
          background: DARK,
          padding: '0 48px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={LOGO_URL}
          alt="Elite MD Plastic Surgery"
          className="emd-nav-logo"
          style={{ height: 52, width: 'auto' }}
        />
        <div className="emd-nav-btns" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <GoldBtn label="Request Your Consultation" href="#form" style={{ fontSize: 13, padding: '10px 16px' }} />
          <a href={PHONE_HREF} style={{ color: WHITE, textDecoration: 'none', fontWeight: 600, fontSize: 15, fontFamily: "'Roboto', sans-serif", whiteSpace: 'nowrap' }}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* ── 2. HERO ────────────────────────────────────────────────────────── */}
      <section
        className="emd-hero"
        style={{ background: DARK, position: 'relative', overflow: 'hidden', minHeight: 640 }}
      >
        {/* Doctor image fading left side */}
        <img
          src={HERO_PHOTO}
          alt="Dr. Vivek Bansal"
          className="emd-hero-doctor"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '42%',
            objectFit: 'cover',
            objectPosition: 'top center',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 50%, transparent 100%)',
          }}
        />

        <div
          className="emd-hero-content"
          style={{ display: 'flex', position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '48px' }}
        >
          {/* Left */}
          <div
            className="emd-hero-left"
            style={{ flex: '1 1 58%', paddingRight: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}
          >
            <h1
              className="emd-hero-h1"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 40,
                color: WHITE,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              A Clear Medical Path for Hair Thinning &amp; Hair Loss
            </h1>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 18, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              General information reviewed during educational visits
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>
              Request educational information to better understand hair loss topics.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <img src={REVIEWS_LOGO} alt="Google Reviews" style={{ height: 40, width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>Patient-focused care.</span>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>No pressure educational discussions.</span>
              </div>
            </div>
          </div>

          {/* Right - Form Card */}
          <div
            className="emd-hero-right"
            style={{ flex: '1 1 42%' }}
          >
            <div style={{ background: WHITE, borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.35)' }}>
              <div style={{ background: GOLD, padding: '16px 24px', textAlign: 'center' }}>
                <p style={{ color: WHITE, fontWeight: 700, fontSize: 16, margin: 0, fontFamily: "'Roboto', sans-serif", letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Request Your Hair Consultation
                </p>
              </div>
              <GhlForm formId={heroFormId} height={443} formName="Banner Form - Hair Loss" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STEPS SECTION ───────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: DARK,
                marginBottom: 12,
              }}
            >
              Your Next Steps Are Simple
            </h2>
            <p style={{ fontSize: 16, color: '#555', margin: 0 }}>
              It&apos;s simpler than you think, and it starts with learning more.
            </p>
          </div>

          <div className="emd-steps-grid steps-grid">
            {[
              { icon: <IconCalendar />, title: 'Schedule a Physician-led educational visit' },
              { icon: <IconPerson />, title: 'Understand Your Hair Loss Pattern' },
              { icon: <IconPersonStar />, title: 'Review Non-Surgical Care Options' },
            ].map((step, i) => (
              <div
                key={i}
                className="emd-step-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '40px 32px',
                  borderRadius: 12,
                  background: GRAY,
                  gap: 20,
                }}
              >
                {step.icon}
                <h3 style={{
                  fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                  fontWeight: 700,
                  fontSize: 18,
                  color: DARK,
                  lineHeight: 1.35,
                }}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          <div
            className="emd-nosales"
            style={{ textAlign: 'center', marginTop: 64, padding: '48px 32px', background: GRAY, borderRadius: 12 }}
          >
            <p style={{ fontSize: 14, color: '#888', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
              No pressure. No sales pitch. Just answers.
            </p>
            <h2
              className="emd-h2-lg"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 30,
                color: DARK,
                marginBottom: 12,
              }}
            >
              Straight Answers. No Obligation.
            </h2>
            <p style={{ fontSize: 15, color: '#555', marginBottom: 28, lineHeight: 1.6 }}>
              You&apos;re in the right place - thousands start here every week.
            </p>
            <GoldBtn label="Learn About Hair Loss" href="#form" />
            <p style={{ marginTop: 14, fontSize: 12, color: '#999', letterSpacing: '0.04em' }}>Fast. Private. No obligation.</p>
          </div>
        </div>
      </section>

      {/* ── 4. WHY PATIENTS CHOOSE OUR TEAM ───────────────────────────────── */}
      <section style={{ background: DARK, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: WHITE,
                marginBottom: 12,
              }}
            >
              Why Patients Choose Our Team
            </h2>
            <p style={{ fontSize: 16, color: GOLD, margin: 0 }}>
              Real care. Real support. Real patient-first focus.
            </p>
          </div>

          <div
            className="emd-why-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 48px', marginBottom: 48 }}
          >
            {[
              'Information explaining how hair loss patterns may vary',
              'Conservative, Non-Surgical Focus',
              'Clear explanations & general educational discussion',
              'Educational discussions informed by medical knowledge',
              'Support at Every Stage',
              'Educational discussions informed by clinical experience',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <IconCheckBadge />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: 15, lineHeight: 1.6, fontFamily: "'Poppins', sans-serif" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="emd-btn-row" style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
            <GoldBtn label="Request Educational Information" href="#form" />
            <GoldBtn label="Learn About Hair Loss" href="#form" />
          </div>
        </div>
      </section>

      {/* ── 5. DOCTOR BIO ──────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="emd-bio-grid two-col">
            {/* Photo */}
            <div>
              <img
                src={BIO_PHOTO}
                alt="Dr. Vivek Bansal"
                style={{ width: '100%', borderRadius: 12, objectFit: 'cover', maxHeight: 520 }}
              />
            </div>
            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h2
                className="emd-h2-xl"
                style={{
                  fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                  fontWeight: 700,
                  fontSize: 30,
                  color: DARK,
                  lineHeight: 1.25,
                }}
              >
                Dr. VIVEK BANSAL: Specialist in Hair Loss Evaluation &amp; Treatment Planning
              </h2>
              <p style={{ fontSize: 14, color: GOLD, fontWeight: 600, letterSpacing: '0.04em' }}>
                Verified patient experiences from real consultations and care.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444' }}>
                Dr. Vivek Bansal completed his medical training at the prestigious Penn State College of Medicine, where he was the second physician accepted into the highly selective five-year integrated training program at Penn State Milton S. Hershey Medical Center. During his training, he served as Chief Resident and developed extensive clinical experience caring for patients with a wide range of medical and aesthetic concerns.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444' }}>
                Today, Dr. Bansal works with individuals experiencing hair loss and alopecia, helping them better understand the causes of hair thinning and explore medically guided options for supporting scalp health and hair growth. His approach focuses on education, individualized evaluation, and responsible treatment planning so patients can make informed decisions about addressing their hair loss concerns.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#444' }}>
                Dr. Bansal is also involved in physician education and advanced clinical training, contributing to the ongoing development of best practices in patient care.
              </p>
              <div>
                <GoldBtn label="Request Your Evaluation" href="#form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ─────────────────────────────────────────────────────── */}
      <section style={{ background: GRAY, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: DARK,
                marginBottom: 12,
              }}
            >
              Real Patients. Real Experiences.
            </h2>
            <p style={{ fontSize: 16, color: '#555', margin: 0 }}>
              Verified patient experiences shared after their visit.
            </p>
          </div>

          <div className="emd-reviews-grid reviews-grid">
            {[
              {
                text: 'The staff and experience have been outstanding during my hair restoration. I\'m currently 6 months in and pleased with the progress so far. The process was comfortable, and I was happy with how everything healed.',
                name: 'C.S.',
              },
              {
                text: 'In September of 2023 I came in for a hair consultation due to severe hair loss. Dr. Bansal was kind and helped me feel hopeful about my options. I decided to move forward with treatment the following month, and it was a very positive decision for me. If you\'re looking for support with hair loss, I recommend scheduling a consultation.',
                name: 'F.',
              },
              {
                text: 'I had a wonderful experience with Dr. Bansal and his team. Everyone was extremely professional. One year after treatment, I\'m very satisfied with the outcome. After many years of dealing with hair loss, I\'m happy with the improvement I\'ve seen. Thank you for the excellent care.',
                name: 'N.',
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  background: WHITE,
                  borderRadius: 12,
                  padding: '28px 24px',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={REVIEWS_LOGO} alt="Google Reviews" style={{ height: 28, width: 'auto' }} />
                  <FiveStars />
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#444', flex: 1 }}>&quot;{review.text}&quot;</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: DARK }}>{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINANCING ───────────────────────────────────────────────────── */}
      <section style={{ background: DARK }} className="emd-fin-outer">
        <div
          className="emd-fin-section financing-grid"
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {/* Left */}
          <div
            className="emd-fin-left"
            style={{ padding: '72px 56px', display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}
          >
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 32,
                color: WHITE,
                lineHeight: 1.3,
              }}
            >
              Getting Help for Hair Loss Can Be More Affordable Than You Think
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, margin: 0 }}>
              Flexible monthly plans built for real patients.
            </p>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 4 }}>As low as</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 18, textDecoration: 'line-through', marginBottom: 4 }}>$7,000</p>
              <p
                className="emd-price-big"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 900,
                  fontSize: 72,
                  color: GOLD,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                $188/mo
              </p>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: 8, padding: '16px 20px', background: 'rgba(255,255,255,0.04)' }}>
              <p style={{ color: WHITE, fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Fast, simple payment plans</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
              </p>
            </div>
            <div>
              <GoldBtn label="REQUEST YOUR HAIR RESTORATION CONSULTATION" href="#form" style={{ fontSize: 12 }} />
            </div>
          </div>

          {/* Right - Doctor photo */}
          <div
            className="emd-fin-photo"
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_PHOTO}
              alt="Dr. Vivek Bansal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── 8. WHAT GIVES PATIENTS CONFIDENCE ─────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: DARK,
                marginBottom: 12,
              }}
            >
              What Gives Patients Confidence
            </h2>
            <p style={{ fontSize: 16, color: '#555', margin: 0 }}>
              Real capabilities. Real safety. Real patient-first care.
            </p>
          </div>

          <div className="emd-confidence-grid three-col">
            {[
              {
                icon: <IconCapabilities />,
                title: 'Capabilities',
                bullets: [
                  'Comprehensive information regarding hair loss patterns',
                  'Educational discussions based on individual questions',
                  'Topics that may include non-surgical educational considerations',
                  'Educational discussion of factors that influence hair loss',
                ],
              },
              {
                icon: <IconSafety />,
                title: 'Safety Standards',
                bullets: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear explanations of commonly discussed topics and considerations',
                ],
              },
              {
                icon: <IconPhilosophy />,
                title: 'Patient-First Philosophy',
                bullets: [
                  'Honest assessments - we provide recommendations only when appropriate',
                  'Personalized plans developed around your unique needs and goals',
                  'Direct communication with your doctor at every step of your care journey',
                  'Focus on long-term hair health',
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                style={{
                  background: GRAY,
                  borderRadius: 12,
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {col.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                    fontWeight: 700,
                    fontSize: 20,
                    color: DARK,
                    textAlign: 'center',
                  }}
                >
                  {col.title}
                </h3>
                <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 14, lineHeight: 1.65, color: '#444' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────────────────── */}
      <section style={{ background: GRAY, padding: '72px 48px' }} className="emd-faq-outer">
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: DARK,
              }}
            >
              Common Questions
            </h2>
          </div>

          <div style={{ background: WHITE, borderRadius: 12, padding: '8px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <FaqItem
              q="What topics are commonly discussed when learning about hair loss?"
              a="Educational discussions often include general information about hair growth cycles, common causes of hair thinning, and factors that may influence hair loss. These conversations are intended to help individuals better understand the topic and ask informed questions."
            />
            <FaqItem
              q="How long does it take to review educational information about hair loss?"
              a="Reviewing educational materials can vary depending on the individual and the topics being explored. Many people take time to read through information at their own pace and revisit sections as needed."
            />
            <FaqItem
              q="Will the information be tailored to my questions?"
              a="Educational information is designed to address common questions and concerns related to hair loss. While the content is informational in nature, individuals are encouraged to focus on the topics most relevant to their interests and understanding."
            />
          </div>
        </div>
      </section>

      {/* ── 10. MAP + BOTTOM FORM ──────────────────────────────────────────── */}
      <section id="form" style={{ background: PANEL, padding: '72px 48px 0' }} className="emd-map-outer">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="emd-map-form map-form-grid">
            {/* Map */}
            <div
              className="emd-map-col"
              style={{ minHeight: 400, borderRadius: 12, overflow: 'hidden', background: '#ddd', position: 'relative' }}
            >
              {/* Note: add /public/footer-map.png manually */}
              <img
                src="/footer-map.png"
                alt={ADDRESS}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.display = 'flex'
                    parent.style.alignItems = 'center'
                    parent.style.justifyContent = 'center'
                    parent.innerHTML = `<p style="color:#666;font-size:14px;text-align:center;padding:24px">${ADDRESS}</p>`
                  }
                }}
              />
            </div>

            {/* Form */}
            <div className="emd-form-col" style={{ paddingBottom: 72 }}>
              <div style={{ background: WHITE, borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
                <div style={{ background: GOLD, padding: '16px 24px', textAlign: 'center' }}>
                  <p style={{ color: WHITE, fontWeight: 700, fontSize: 16, margin: 0, fontFamily: "'Roboto', sans-serif", letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Request Your Hair Consultation
                  </p>
                </div>
                <GhlForm formId={bottomFormId} height={443} formName="Footer Form - Hair Loss" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FOOTER BAR ─────────────────────────────────────────────────── */}
      <footer style={{ background: DARK, padding: '28px 48px' }}>
        <div
          className="emd-contact-row"
          style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}
        >
          <a
            href={PHONE_HREF}
            style={{ display: 'flex', alignItems: 'center', gap: 10, color: GOLD, textDecoration: 'none', fontWeight: 600, fontSize: 16, fontFamily: "'Roboto', sans-serif" }}
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>
            <AddressIcon />
            {ADDRESS}
          </span>
        </div>
      </footer>

      {/* ── 12. COPYRIGHT ──────────────────────────────────────────────────── */}
      <div
        className="emd-footer-bar"
        style={{ background: '#0a0a0a', padding: '16px 48px 20px', textAlign: 'center' }}
      >
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
          &copy; 2026 Elite MD Plastic Surgery Danville
          {' '}&bull;{' '}
          <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 500 }}>PRIVACY POLICY</a>
          {' '}&bull;{' '}
          <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 500 }}>COOKIE POLICY</a>
        </p>
      </div>
    </div>
  )
}
