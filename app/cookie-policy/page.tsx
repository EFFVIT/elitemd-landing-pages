import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Elite MD Plastic Surgery Danville',
  robots: 'noindex, nofollow',
}

const DARK  = '#111111'
const GOLD  = '#B8954B'
const WHITE = '#ffffff'

const LOGO_URL = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Layer-1-1024x215.png'

export default function CookiePolicyPage() {
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
        <h1 style={{ fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif', fontWeight: 700, color: WHITE, fontSize: 40, margin: 0, lineHeight: 1.2 }}>Cookie Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '12px 0 0', fontSize: 14 }}>Last Updated: September 12, 2025</p>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 48px' }}>

        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 48 }}>
          This Cookie Policy explains how Elite MD Plastic Surgery Danville uses cookies and similar technologies to recognize you when you visit our websites at <a href="https://start.elitemdspa.com" style={{ color: GOLD }}>https://start.elitemdspa.com</a>. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <Section title="What Are Cookies?" gold={GOLD}>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          <p>Cookies set by the website owner (in this case, Elite MD Plastic Surgery Danville) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g. advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites. Elite MD does not have access to or control over these third-party cookies.</p>
        </Section>

        <Section title="Why Do We Use Cookies?" gold={GOLD}>
          <p>We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.</p>
          <p>The specific types of first- and third-party cookies served through our website and the purposes they perform are described below:</p>
          <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: 24 }}>
            <li><strong>Analytics and customization cookies.</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you. We use Google Analytics to collect aggregate data about website usage and marketing effectiveness.</li>
            <li><strong>Advertising cookies.</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests. We work with Google to display targeted advertising.</li>
          </ul>
        </Section>

        <Section title="What About Other Tracking Technologies, Like Web Beacons?" gold={GOLD}>
          <p>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our website or opened an email that we have sent them. This allows us, for example, to monitor the traffic patterns of users from one page within our website to another, to deliver or communicate with cookies, to understand whether you have come to our website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns.</p>
        </Section>

        <Section title="Do You Use Flash Cookies or Local Shared Objects?" gold={GOLD}>
          <p>Our website may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</p>
          <p>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" target="_blank" rel="noreferrer" style={{ color: GOLD }}>Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" target="_blank" rel="noreferrer" style={{ color: GOLD }}>Global Storage Settings Panel</a> and following the instructions. Note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications.</p>
        </Section>

        <Section title="Do You Serve Targeted Advertising?" gold={GOLD}>
          <p>Third parties may serve cookies on your computer or mobile device to serve advertising through our website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other personally identifying details unless you choose to provide these.</p>
        </Section>

        <Section title="How Can I Control Cookies?" gold={GOLD}>
          <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below.</p>
          <p>You can set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser&apos;s help menu for more information.</p>
          <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noreferrer" style={{ color: GOLD }}>www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noreferrer" style={{ color: GOLD }}>www.youronlinechoices.com</a>.</p>
          <p>You can also opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" style={{ color: GOLD }}>Google Analytics Opt-out Browser Add-on</a>.</p>
          <p>Please note that if you choose to refuse cookies you may not be able to use the full functionality of our website.</p>
        </Section>

        <Section title="How Often Will You Update This Cookie Policy?" gold={GOLD}>
          <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
        </Section>

        <Section title="Where Can I Get Further Information?" gold={GOLD}>
          <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:info@elitemdspa.com" style={{ color: GOLD }}>info@elitemdspa.com</a> or contact us at:</p>
          <address style={{ fontStyle: 'normal', color: '#444', lineHeight: 1.9, marginTop: 8 }}>
            <strong>Elite MD Plastic Surgery Danville</strong><br />
            4185 Blackhawk Plaza Circle<br />
            Danville, CA 94506<br />
            <a href="tel:+19258863926" style={{ color: GOLD }}>(925) 886-3926</a>
          </address>
        </Section>
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
