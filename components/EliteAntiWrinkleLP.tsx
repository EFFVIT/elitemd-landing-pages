'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'
import { EliteVipNav, EliteTestimonials, EliteBooking, EliteFooter, Yt } from './EliteMedSpaLP'

const CREAM = '#FBF9F6'
const INK = '#2C3345'
const GOLD = '#B99668'
const WHITE = '#ffffff'
const SERIF = "'Libre Baskerville', Georgia, serif"
const SANS = "'Lato', 'Helvetica Neue', Arial, sans-serif"
const PHONE = '(925) 291-4445'
const TEL = '+19252914445'

const NEURO = [
  {
    tag: 'MOST WIDELY USED', name: 'Botox® Cosmetic', by: 'by AbbVie / Allergan',
    d: 'The original FDA-approved botulinum toxin type A. Botox has the longest clinical track record of any neuromodulator, with decades of safety and efficacy data across multiple treatment areas.',
    areas: ['Forehead lines', 'Glabellar (11 lines)', "Crow's feet", 'Brow lift', 'Lip flip', 'Masseter / jaw slimming', 'Hyperhidrosis (excessive sweating)'],
  },
  {
    tag: 'FAST-ACTING FORMULA', name: 'Dysport®', by: 'by Galderma',
    d: 'Dysport is an abobotulinumtoxinA formulation known for its rapid onset — often visible within 24–48 hours. It has a slightly different diffusion profile that some patients and physicians prefer for certain treatment areas.',
    areas: ['Forehead lines', 'Glabellar (11 lines)', "Crow's feet", 'Larger surface area treatments', 'Neck bands'],
  },
  {
    tag: 'PURE FORM NEUROMODULATOR', name: 'Xeomin®', by: 'by Merz Aesthetics',
    d: 'Xeomin (incobotulinumtoxinA) is a "naked" neuromodulator — it contains no complexing proteins, which may reduce the likelihood of antibody development in patients who receive frequent treatments.',
    areas: ['Forehead lines', 'Glabellar (11 lines)', "Crow's feet", 'Patients with prior neuromodulator resistance'],
  },
]

export default function EliteAntiWrinkleLP() {
  return (
    <main style={{ fontFamily: SANS, background: CREAM, color: INK }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>
      <EliteVipNav />

      {/* HERO */}
      <section style={{ padding: '56px 24px 48px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>FDA-APPROVED NEUROMODULATORS &middot; BOARD-CERTIFIED DERMATOLOGIST &middot; DANVILLE, CA</div>
            <h1 style={{ fontFamily: SERIF, fontSize: 40, lineHeight: 1.2, color: INK, marginTop: 12 }}>Botox &amp; Neuromodulator Treatments with Dr. Sonia</h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, marginTop: 16, maxWidth: 560 }}>
              Dr. Sonia Badreshia-Bansal, MD, FAAD offers FDA-approved neuromodulator treatments &mdash; including Botox, Dysport, and Xeomin &mdash; at Elite MD in Danville, CA. All injections are administered personally by Dr. Sonia.
            </p>
            <p style={{ fontSize: 15.5, marginTop: 10 }}>Schedule a consultation to discuss which neuromodulator treatment is right for you.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 22, flexWrap: 'wrap' }}>
              <a href="#book" style={{ background: INK, color: WHITE, fontWeight: 700, fontSize: 14, letterSpacing: '1px', padding: '15px 26px', borderRadius: 4, textDecoration: 'none' }}>SCHEDULE A CONSULTATION</a>
              <a href={`tel:${TEL}`} style={{ border: `1.5px solid ${INK}`, color: INK, fontWeight: 700, fontSize: 14, padding: '13px 24px', borderRadius: 4, textDecoration: 'none' }}>CALL {PHONE}</a>
            </div>
            <div style={{ fontSize: 13.5, color: GOLD, marginTop: 12 }}>All injections by Dr. Sonia, MD, FAAD &middot; No nurse injectors</div>
            <div style={{ display: 'flex', gap: 18, marginTop: 22, flexWrap: 'wrap', fontSize: 13, fontWeight: 700 }}>
              <span>Board Certified (FAAD)</span><span>Harvard &amp; Penn State</span><span>All Injections by Dr. Sonia</span><span>500+ Five-Star Reviews</span>
            </div>
          </div>
          <img src="/images/vip/dr-sonia.png" alt="Dr. Sonia Badreshia-Bansal, MD, FAAD" style={{ width: '100%', maxWidth: 380, borderRadius: 8, justifySelf: 'center' }} />
        </div>
      </section>

      {/* YOUR INJECTOR */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>YOUR INJECTOR</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Dr. Sonia Badreshia-Bansal, MD, FAAD</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 14, maxWidth: 760 }}>
            Dr. Sonia is a fellowship-trained, board-certified dermatologist with advanced training from Harvard Medical School and Penn State University. She personally administers all neuromodulator treatments at Elite MD &mdash; no delegation to nurses or assistants.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 12, maxWidth: 760 }}>
            Her precision injection technique and deep anatomical knowledge ensure that every treatment is tailored to the individual patient&rsquo;s facial structure, goals, and medical history.
          </p>
          <ul style={{ fontSize: 15, lineHeight: 2, marginTop: 14, paddingLeft: 20 }}>
            <li>All injections performed personally by Dr. Sonia</li>
            <li>Harvard Medical School &amp; Penn State fellowship training</li>
            <li>FAAD &mdash; Fellow, American Academy of Dermatology</li>
            <li>Comprehensive consultation before every treatment</li>
          </ul>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section style={{ padding: '64px 24px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>TREATMENT OPTIONS</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>FDA-Approved Neuromodulators</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, marginTop: 12, maxWidth: 740 }}>
            Dr. Sonia offers all major FDA-approved neuromodulator formulations. The right choice is determined during your personal consultation based on your individual anatomy and treatment goals.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24, marginTop: 30 }}>
            {NEURO.map(n => (
              <div key={n.name} style={{ background: WHITE, borderRadius: 8, padding: '24px 22px', boxShadow: '0 4px 20px rgba(44,51,69,0.07)' }}>
                <div style={{ fontSize: 11, letterSpacing: '2px', color: GOLD }}>{n.tag}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: 21, color: INK, marginTop: 8 }}>{n.name}</h3>
                <div style={{ fontSize: 13, color: GOLD }}>{n.by}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 10 }}>{n.d}</p>
                <div style={{ fontSize: 11, letterSpacing: '2px', color: GOLD, marginTop: 14 }}>COMMON TREATMENT AREAS</div>
                <ul style={{ fontSize: 14, lineHeight: 1.9, marginTop: 6, paddingLeft: 18 }}>
                  {n.areas.map(a => <li key={a}>{a}</li>)}
                </ul>
                <a href="#book" style={{ display: 'inline-block', marginTop: 12, color: INK, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>SCHEDULE A CONSULTATION &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>PATIENT EDUCATION</div>
          <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Understanding Your Treatment Options</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 28 }}>
            <div>
              <Yt id="MHQ5dfJCb5o" title="Skin Changes & Non-Invasive Treatment Options" />
              <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Skin Changes &amp; Non-Invasive Treatment Options <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 3 min</span></h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>Dr. Sonia explains the science behind skin elasticity changes and discusses the non-invasive and injectable treatment options available at Elite MD.</p>
            </div>
            <div>
              <Yt id="8XQaPbsuRmE" title="Hair Loss: Causes, Workup & Treatment Options" />
              <h3 style={{ fontSize: 16, marginTop: 12, color: INK }}>Hair Loss: Causes, Workup &amp; Treatment Options <span style={{ color: GOLD, fontWeight: 400 }}>&middot; 8 min</span></h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>An educational overview of hormonal and nutritional factors affecting hair health, and the personalized treatment plans available at Elite MD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ADMINISTERS */}
      <section style={{ padding: '64px 24px', background: CREAM }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 36, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '2.5px', color: GOLD }}>WHY IT MATTERS</div>
            <h2 style={{ fontFamily: SERIF, fontSize: 30, color: INK, marginTop: 8 }}>Who Administers Your Injections Matters</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, marginTop: 12 }}>
              Neuromodulator injections require precise anatomical knowledge and clinical judgment. Dr. Sonia holds FAAD board certification and completed fellowship training at Harvard and Penn State &mdash; ensuring every injection is grounded in medical expertise.
            </p>
            <ul style={{ fontSize: 15, lineHeight: 2, marginTop: 12, paddingLeft: 20 }}>
              <li>All injections performed personally by Dr. Sonia, MD, FAAD</li>
              <li>No nurse injectors or unsupervised staff performing procedures</li>
              <li>Full medical oversight and emergency protocols on-site</li>
              <li>Comprehensive consultation and medical history review before every treatment</li>
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
        formId="ppCpH0dzHWr8S5W97C1K"
        heading="Schedule Your Neuromodulator Consultation"
        body="During your consultation, Dr. Sonia will review your facial anatomy, discuss your goals, and recommend the neuromodulator formulation and treatment approach best suited to your individual needs. All consultations are conducted in our Danville office."
      />
      <EliteFooter />
    </main>
  )
}
