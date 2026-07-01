import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HIPAA Policy | Elite MD Plastic Surgery Danville',
  robots: 'noindex, nofollow',
}

const DARK  = '#111111'
const GOLD  = '#B8954B'
const WHITE = '#ffffff'

const LOGO_URL = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Layer-1-1024x215.png'

export default function HipaaPolicyPage() {
  return (
    <div style={{ fontFamily: "'Jost', 'Poppins', sans-serif", color: '#1a1a1a', background: WHITE }}>

      {/* Header */}
      <header style={{ background: WHITE, padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <img src={LOGO_URL} alt="Elite MD Plastic Surgery" style={{ height: 52, width: 'auto' }} />
        <a href="tel:+19258863926" style={{ color: DARK, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>
          (925) 886-3926
        </a>
      </header>

      {/* Banner */}
      <div style={{ background: DARK, padding: '48px 48px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif', fontWeight: 700, color: WHITE, fontSize: 40, margin: 0, lineHeight: 1.2 }}>HIPAA Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '12px 0 0', fontSize: 14 }}>Notice of Privacy Practices &bull; Last Updated: October 1, 2025</p>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 48px' }}>

        <div style={{ background: '#faf5ee', borderLeft: `4px solid ${GOLD}`, padding: '24px 28px', borderRadius: 4, marginBottom: 48 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: '0 0 8px' }}>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</h3>
        </div>

        <Section title="Our Commitment to Your Privacy" gold={GOLD}>
          <p>Elite MD Plastic Surgery Danville is committed to protecting the privacy of your health information. We are required by law to maintain the privacy of your protected health information (PHI), provide you with this Notice of our legal duties and privacy practices, and follow the terms of our current Notice.</p>
          <p>We reserve the right to change this Notice at any time. We reserve the right to make the revised or changed Notice effective for health information we already have about you as well as any information we receive in the future. The current Notice will be posted in our office and on our website. You are entitled to a copy of the Notice currently in effect.</p>
        </Section>

        <Section title="How We May Use and Disclose Your Health Information" gold={GOLD}>
          <Sub title="Treatment">
            <p>We may use and disclose your health information to provide you with medical treatment or services. We may disclose your health information to doctors, nurses, technicians, medical students, or other personnel who are involved in taking care of you.</p>
          </Sub>
          <Sub title="Payment">
            <p>We may use and disclose your health information so that treatment and services you receive may be billed and payment collected from you, an insurance company, or a third party. For example, we may need to give your health plan information about services you received from us so they will pay for those services.</p>
          </Sub>
          <Sub title="Health Care Operations">
            <p>We may use and disclose health information about you for health care operations. These uses and disclosures are necessary to run our practice and make sure that our patients receive quality care. For example, we may use health information to review our treatment and services and to evaluate the performance of our staff in caring for you.</p>
          </Sub>
          <Sub title="Appointment Reminders">
            <p>We may use and disclose health information to contact you as a reminder that you have an appointment for treatment or medical care. We may contact you by phone, text, or email.</p>
          </Sub>
          <Sub title="Treatment Alternatives and Health-Related Benefits">
            <p>We may use and disclose health information to tell you about or recommend possible treatment options or alternatives or health-related benefits or services that may be of interest to you.</p>
          </Sub>
        </Section>

        <Section title="Special Disclosures Permitted by Law" gold={GOLD}>
          <p>We may use or disclose your health information in the following situations without your authorization:</p>
          <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: 24 }}>
            <li><strong>As Required by Law.</strong> We will disclose health information about you when required to do so by federal, state, or local law.</li>
            <li><strong>Public Health Activities.</strong> We may disclose health information about you for public health activities, such as preventing or controlling disease, injury, or disability.</li>
            <li><strong>Health Oversight Activities.</strong> We may disclose health information to a health oversight agency for activities authorized by law, such as audits, investigations, inspections, and licensing.</li>
            <li><strong>Law Enforcement.</strong> We may disclose health information for law enforcement purposes as required by law or in response to a valid subpoena.</li>
            <li><strong>Serious Threats to Health or Safety.</strong> We may use or disclose your health information when necessary to prevent a serious threat to your health or safety or the health or safety of the public or another person.</li>
          </ul>
        </Section>

        <Section title="Your Rights Regarding Your Health Information" gold={GOLD}>
          <Sub title="Right to Inspect and Copy">
            <p>You have the right to inspect and copy health information that may be used to make decisions about your care. To inspect and copy medical information that may be used to make decisions about you, you must submit your request in writing. We may charge a fee for the costs of copying, mailing or other supplies associated with your request.</p>
          </Sub>
          <Sub title="Right to Amend">
            <p>If you feel that health information we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept by or for our practice. To request an amendment, your request must be made in writing and submitted. You must also provide a reason for your request.</p>
          </Sub>
          <Sub title="Right to Request Restrictions">
            <p>You have the right to request a restriction on the health information we use or disclose about you for treatment, payment, or health care operations. We are not required to agree to your request. If we do agree, we will comply with your request unless the information is needed to provide you emergency treatment.</p>
          </Sub>
          <Sub title="Right to Request Confidential Communications">
            <p>You have the right to request that we communicate with you about medical matters in a certain way or at a certain location. For example, you can ask that we only contact you at work or by mail.</p>
          </Sub>
          <Sub title="Right to an Accounting of Disclosures">
            <p>You have the right to request an accounting of disclosures. This is a list of the disclosures we made of medical information about you other than disclosures you authorized.</p>
          </Sub>
          <Sub title="Right to a Paper Copy of This Notice">
            <p>You have the right to a paper copy of this Notice. You may ask us to give you a copy of this Notice at any time. To obtain a paper copy of this Notice, contact our office at the information listed below.</p>
          </Sub>
        </Section>

        <Section title="How to Exercise Your Rights" gold={GOLD}>
          <p>To exercise any of the rights described above, please submit your request in writing to:</p>
          <address style={{ fontStyle: 'normal', color: '#444', lineHeight: 1.9, marginTop: 8 }}>
            <strong>Privacy Officer</strong><br />
            Elite MD Plastic Surgery Danville<br />
            4185 Blackhawk Plaza Circle<br />
            Danville, CA 94506<br />
            <a href="tel:+19258863926" style={{ color: GOLD }}>(925) 886-3926</a><br />
            <a href="mailto:info@elitemdspa.com" style={{ color: GOLD }}>info@elitemdspa.com</a>
          </address>
        </Section>

        <Section title="Complaints" gold={GOLD}>
          <p>If you believe your privacy rights have been violated, you may file a complaint with our office or with the Secretary of the Department of Health and Human Services. To file a complaint with our office, contact us at the address or phone number listed above. All complaints must be submitted in writing.</p>
          <p>You will not be penalized for filing a complaint.</p>
        </Section>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '48px 0' }} />

        <div style={{ background: '#faf5ee', borderLeft: `4px solid ${GOLD}`, padding: '24px 28px', borderRadius: 4 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK, margin: '0 0 8px' }}>Questions About This Notice?</h3>
          <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, margin: 0 }}>
            If you have any questions about this Notice, please contact us at{' '}
            <a href="mailto:info@elitemdspa.com" style={{ color: GOLD }}>info@elitemdspa.com</a>{' '}
            or call{' '}
            <a href="tel:+19258863926" style={{ color: GOLD }}>(925) 886-3926</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: WHITE, borderTop: '1px solid #e8e8e8', padding: '32px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <img src={LOGO_URL} alt="Elite MD Plastic Surgery" style={{ height: 44, width: 'auto' }} />
        <p style={{ color: '#555', fontSize: 13, margin: 0 }}>
          4185 Blackhawk Plaza Circle, Danville, CA 94506
        </p>
        <p style={{ fontSize: 13, margin: 0 }}>
          <a href="/privacy-policy" style={{ color: '#555', textDecoration: 'none', marginRight: 16 }}>Privacy Policy</a>
          <a href="/hipaa-policy" style={{ color: '#555', textDecoration: 'none', marginRight: 16 }}>HIPAA Policy</a>
          <a href="/cookie-policy" style={{ color: '#555', textDecoration: 'none' }}>Cookie Policy</a>
        </p>
      </footer>
    </div>
  )
}

function Section({ title, gold, children }: { title: string; gold: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 16, paddingBottom: 10, borderBottom: `2px solid ${gold}` }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.85, color: '#444', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {children}
      </div>
    </section>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', marginBottom: 10, marginTop: 4 }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
    </div>
  )
}
