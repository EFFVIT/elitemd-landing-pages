'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// Tokens from live vip.elitemdspa.com capture 2026-07-17 (bright/airy per medical design rule)
const CREAM = '#FBF9F6'
const INK = '#2C3345'
const GOLD = '#B99668'
const WHITE = '#ffffff'
const SERIF = "'Libre Baskerville', Georgia, serif"
const SANS = "'Lato', 'Helvetica Neue', Arial, sans-serif"

const PHONE = '(925) 291-4445'
const TEL = '+19252914445'
const FORM_HOST = 'api.localbusinessrockstar.com'

export function EliteVipNav({ cta = 'BOOK A CONSULTATION' }: { cta?: string }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', background: WHITE, borderBottom: '1px solid #eee6da', flexWrap: 'wrap', gap: 10 }}>
      <div>
        <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 24, color: INK }}>EliteMD</div>
        <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '2.5px', color: GOLD }}>ADVANCED DERMATOLOGY</div>
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href={`tel:${TEL}`} style={{ color: INK, fontFamily: SANS, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>{PHONE}</a>
        <a href="#book" style={{ background: INK, color: WHITE, fontFamily: SANS, fontWeight: 700, fontSize: 13, letterSpacing: '1px', padding: '12px 22px', borderRadius: 4, textDecoration: 'none' }}>{cta}</a>
      </div>
    </nav>
  )
}

export function Yt({ id, title }: { id: string; title: string }) {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      loading="lazy"
      allow="accelerometer; encrypted-media; picture-in-picture"
      allowFullScreen
      style={{ width: '100%', aspectRatio: '16 / 9', border: 0, borderRadius: 8, background: '#000' }}
    />
  )
}

export function Stars5() {
  return <div style={{ color: GOLD, fontSize: 18, letterSpacing: '2px' }} aria-label="5 stars">★★★★★</div>
}

export const TESTIMONIALS = [
  { q: '"Dr. Sonia is incredibly knowledgeable and takes the time to explain every option. The staff at Elite MD made the entire experience comfortable and professional."', n: 'Sarah M.', c: 'Danville, CA' },
  { q: '"I appreciated that Dr. Sonia listened to my concerns and recommended a treatment plan that made sense for my skin type. The consultation was thorough and unhurried."', n: 'Jennifer K.', c: 'San Ramon, CA' },
  { q: '"Elite MD is a top-tier practice. Dr. Sonia\'s expertise is evident from the first appointment. I felt well-informed and confident in the care I received."', n: 'Michael T.', c: 'Walnut Creek, CA' },
]

export function EliteTestimonials() {
  return (
    <section style={{ background: WHITE, padding: '64px 24px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: SANS, fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>PATIENT EXPERIENCES</div>
        <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>What Patients Are Saying</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22, marginTop: 34, textAlign: 'left' }}>
          {TESTIMONIALS.map(t => (
            <div key={t.n} style={{ background: CREAM, borderRadius: 8, padding: '24px 22px' }}>
              <Stars5 />
              <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: INK, marginTop: 12 }}>{t.q}</p>
              <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 14, color: INK, marginTop: 14 }}>{t.n}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: GOLD }}>{t.c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EliteBooking({ formId, heading = 'Schedule a Consultation with Dr. Sonia', body }: { formId: string; heading?: string; body: string }) {
  return (
    <section id="book" style={{ background: CREAM, padding: '64px 24px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: SANS, fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>BOOK YOUR VISIT</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8, lineHeight: 1.3 }}>{heading}</h2>
          <p style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.65, color: INK, marginTop: 14 }}>{body}</p>
          <div style={{ fontFamily: SANS, fontSize: 14.5, lineHeight: 2, color: INK, marginTop: 18 }}>
            <div>350 Diablo Road, Suite 210, Danville, CA 94526</div>
            <div><a href={`tel:${TEL}`} style={{ color: INK, fontWeight: 700, textDecoration: 'none' }}>{PHONE}</a></div>
            <div>Mon&ndash;Fri: 9am&ndash;5pm &middot; Sat: By appointment</div>
          </div>
        </div>
        <div style={{ background: WHITE, borderRadius: 8, boxShadow: '0 8px 30px rgba(44,51,69,0.09)', padding: '22px 20px' }}>
          <GhlForm formId={formId} height={620} host={FORM_HOST} formName="Elite MD Consultation" />
        </div>
      </div>
    </section>
  )
}

export function EliteFooter() {
  return (
    <footer style={{ background: INK, color: WHITE, padding: '46px 24px 28px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 30 }}>
        <div>
          <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 22 }}>EliteMD</div>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '2.5px', color: GOLD }}>ADVANCED DERMATOLOGY</div>
          <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.6, marginTop: 12, opacity: 0.85 }}>Board-certified dermatology and aesthetic medicine in Danville, CA.</p>
        </div>
        <div style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.8 }}>
          <div style={{ letterSpacing: '2px', fontSize: 11, color: GOLD }}>CONTACT</div>
          350 Diablo Road, Suite 210<br />Danville, CA 94526<br />{PHONE}
        </div>
        <div style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.8 }}>
          <div style={{ letterSpacing: '2px', fontSize: 11, color: GOLD }}>HOURS</div>
          Monday &ndash; Friday: 9am &ndash; 5pm<br />Saturday: By appointment<br />Sunday: Closed
        </div>
      </div>
      <div style={{ maxWidth: 1060, margin: '26px auto 0', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16, fontFamily: SANS, fontSize: 12, opacity: 0.7 }}>
        &copy; 2026 Elite MD Advanced Dermatology. All rights reserved. Individual results vary. All treatments require a consultation with Dr. Sonia. This page is for informational purposes only.
      </div>
    </footer>
  )
}

export default function EliteMedSpaLP() {
  return (
    <main style={{ fontFamily: SANS, background: CREAM, color: INK }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>
      <EliteVipNav />

      {/* HERO */}
      <section style={{ padding: '56px 24px 48px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }} className="elite-hero-grid">
          <div>
            <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>BOARD-CERTIFIED DERMATOLOGIST &middot; DANVILLE, CA</div>
            <h1 style={{ fontFamily: SERIF, fontSize: 42, lineHeight: 1.2, color: INK, marginTop: 12 }}>Expert Skin &amp; Aesthetic Care with Dr. Sonia</h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, marginTop: 16, maxWidth: 560 }}>
              Dr. Sonia Badreshia-Bansal is a Harvard- and Penn State&ndash;trained, board-certified dermatologist offering advanced laser treatments, injectables, and medical-grade skincare at Elite MD in Danville.
            </p>
            <p style={{ fontSize: 15.5, marginTop: 10 }}>Schedule a consultation to discuss which treatments are right for you.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 22, flexWrap: 'wrap' }}>
              <a href="#book" style={{ background: INK, color: WHITE, fontWeight: 700, fontSize: 14, letterSpacing: '1px', padding: '15px 26px', borderRadius: 4, textDecoration: 'none' }}>SCHEDULE A CONSULTATION</a>
              <a href={`tel:${TEL}`} style={{ border: `1.5px solid ${INK}`, color: INK, fontWeight: 700, fontSize: 14, padding: '13px 24px', borderRadius: 4, textDecoration: 'none' }}>CALL {PHONE}</a>
            </div>
            <div style={{ fontSize: 13.5, color: GOLD, marginTop: 12 }}>Personalized treatment plans &middot; No pressure consultations</div>
            <div style={{ display: 'flex', gap: 18, marginTop: 22, flexWrap: 'wrap', fontSize: 13, fontWeight: 700 }}>
              <span>Board Certified</span><span>Harvard &amp; Penn State Trained</span><span>KRON 4 Expert</span><span>500+ Five-Star Reviews</span>
            </div>
          </div>
          <img src="/images/vip/dr-sonia.webp" alt="Dr. Sonia Badreshia-Bansal, MD, FAAD" style={{ width: '100%', maxWidth: 380, borderRadius: 8, justifySelf: 'center' }} />
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section style={{ background: WHITE, padding: '26px 24px', borderTop: '1px solid #eee6da', borderBottom: '1px solid #eee6da' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 18, textAlign: 'center', fontSize: 13.5 }}>
          <div><div style={{ letterSpacing: '2px', fontSize: 11, color: GOLD }}>EDUCATION</div><b>Harvard &amp; Penn State</b></div>
          <div><div style={{ letterSpacing: '2px', fontSize: 11, color: GOLD }}>CERTIFICATION</div><b>Board-Certified Dermatologist</b></div>
          <div><div style={{ letterSpacing: '2px', fontSize: 11, color: GOLD }}>MEDIA</div><b>KRON 4 &middot; ABC &middot; NBC</b></div>
          <div><div style={{ letterSpacing: '2px', fontSize: 11, color: GOLD }}>PUBLISHED</div><b>Peer-Reviewed Author</b></div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '64px 24px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>ABOUT YOUR PHYSICIAN</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Dr. Sonia Badreshia-Bansal, MD, FAAD</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 14, maxWidth: 760 }}>
            Dr. Sonia is a fellowship-trained, board-certified dermatologist with advanced training from Harvard Medical School and Penn State University. She specializes in cosmetic and medical dermatology, with a focus on laser treatments, injectables, and comprehensive skin health.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 12, maxWidth: 760 }}>
            A recognized expert in her field, Dr. Sonia has been featured on KRON 4, ABC, and NBC, and has contributed to peer-reviewed medical literature. She brings a precision-focused, individualized approach to every consultation at Elite MD in Danville, CA.
          </p>
          <ul style={{ fontSize: 15, lineHeight: 2, marginTop: 14, paddingLeft: 20 }}>
            <li>Harvard Medical School Training</li>
            <li>Penn State University Fellowship</li>
            <li>FAAD &mdash; Fellow, American Academy of Dermatology</li>
            <li>Published Researcher &amp; Media Expert</li>
          </ul>
        </div>
      </section>

      {/* HEAR FROM DR. SONIA */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>HEAR FROM DR. SONIA</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Watch Dr. Sonia discuss her approach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 28 }}>
            <div>
              <Yt id="7ekXygNUceQ" title="Dr. Sonia's Story: Why She Became a Dermatologist" />
              <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Dr. Sonia&rsquo;s Story: Why She Became a Dermatologist <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 2 min</span></h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>Dr. Sonia shares the personal experiences that led her to specialize in dermatology and her commitment to patients of all skin types.</p>
            </div>
            <div>
              <Yt id="aIXNGKia5fQ" title="Dr. Sonia on Natural Results & Knowing When to Say No" />
              <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Dr. Sonia on Natural Results &amp; Knowing When to Say No <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 3 min</span></h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>A board-certified dermatologist&rsquo;s perspective on prioritizing patient safety and natural-looking outcomes over unnecessary procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT PROGRAMS */}
      <section style={{ padding: '64px 24px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>TREATMENT PROGRAMS</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Personalized Treatment Plans</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, marginTop: 12, maxWidth: 720 }}>
            Dr. Sonia designs individualized treatment programs that combine multiple modalities for comprehensive skin care. Each plan is developed during a one-on-one consultation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24, marginTop: 30 }}>
            {[
              { img: '/images/vip/treatment-laser.webp', tag: 'LASER TREATMENTS', h: 'Precision Laser Therapies', d: 'Advanced laser-based treatments addressing skin texture, tone, and collagen production. Dr. Sonia tailors each treatment to the individual’s skin type and goals.', items: ['Elite Mini Laser Lift', 'Elite Laser Lift', 'IPL PhotoFacial'] },
              { img: '/images/vip/treatment-injectable.webp', tag: 'INJECTABLES', h: 'Neuromodulators & Dermal Fillers', d: 'Injectable treatments administered with a precise, natural-result-focused technique. All injectables performed by Dr. Sonia personally.', items: ['FDA-Approved Neuromodulators', 'Hyaluronic Acid Fillers', 'Sculptra Biostimulator'] },
              { img: '/images/vip/skincare-products.webp', tag: 'RF TIGHTENING & SKINCARE', h: 'Non-Surgical Tightening & Medical Skincare', d: 'Non-invasive radiofrequency tightening and physician-grade skincare formulated to complement in-office treatments.', items: ['Forma RF Tightening', 'Dr. Sonia Skincare Line', 'Customized Protocols'] },
            ].map(c => (
              <div key={c.tag} style={{ background: WHITE, borderRadius: 8, overflow: 'hidden', boxShadow: '0 4px 20px rgba(44,51,69,0.07)' }}>
                <img src={c.img} alt={c.h} loading="lazy" style={{ width: '100%', height: 170, objectFit: 'cover' }} />
                <div style={{ padding: '20px 20px 24px' }}>
                  <div style={{ fontSize: 11, letterSpacing: '2px', color: GOLD }}>{c.tag}</div>
                  <h3 style={{ fontFamily: SERIF, fontSize: 19, color: INK, marginTop: 8 }}>{c.h}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 8 }}>{c.d}</p>
                  <ul style={{ fontSize: 14, lineHeight: 1.9, marginTop: 10, paddingLeft: 18 }}>
                    {c.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <a href="#book" style={{ display: 'inline-block', marginTop: 12, color: INK, fontWeight: 700, fontSize: 13.5, letterSpacing: '0.5px', textDecoration: 'none' }}>SCHEDULE A CONSULTATION &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION VIDEOS */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>EDUCATIONAL VIDEOS</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Learn More About Your Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 28 }}>
            <div>
              <Yt id="MHQ5dfJCb5o" title="Understanding Skin Changes After Weight Loss" />
              <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Understanding Skin Changes After Weight Loss <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 3 min</span></h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>Dr. Sonia explains how rapid weight loss can affect skin elasticity and discusses the non-invasive treatment options available at Elite MD.</p>
            </div>
            <div>
              <Yt id="8XQaPbsuRmE" title="Hair Loss: Causes, Workup & Treatment Options" />
              <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Hair Loss: Causes, Workup &amp; Treatment Options <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 8 min</span></h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>Dr. Sonia discusses the hormonal and nutritional factors behind hair thinning and the personalized treatment plans available at Elite MD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOARD CERTIFICATION */}
      <section style={{ padding: '64px 24px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 36, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>WHY IT MATTERS</div>
            <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Board Certification Is Not Optional</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 12 }}>
              Aesthetic medicine is a medical specialty. Dr. Sonia holds FAAD board certification from the American Academy of Dermatology and completed her fellowship training at Harvard and Penn State &mdash; ensuring every treatment is grounded in clinical expertise.
            </p>
            <ul style={{ fontSize: 15, lineHeight: 2, marginTop: 12, paddingLeft: 20 }}>
              <li>All treatments performed by a licensed physician</li>
              <li>No nurse injectors or unsupervised staff performing procedures</li>
              <li>Comprehensive consultation before every treatment</li>
              <li>Emergency protocols and full medical oversight on-site</li>
            </ul>
          </div>
          <div>
            <Yt id="JHCz4Dpjnn4" title="Why Board Certification Matters in Aesthetic Medicine" />
            <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Why Board Certification Matters in Aesthetic Medicine <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 3 min</span></h3>
          </div>
        </div>
      </section>

      <EliteTestimonials />
      <EliteBooking
        formId="WKWGZoylXTyfDRgWLCrZ"
        body="During your consultation, Dr. Sonia will review your skin health, discuss available treatment options, and help you determine the right approach for your individual needs. All consultations are conducted in our Danville office."
      />
      <EliteFooter />
    </main>
  )
}
