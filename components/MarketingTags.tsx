import Script from 'next/script'

/* GA4 ONLY. GTM-WNPJQ3HX was removed from the landing pages on 2026-08-15 at Joe's
   direction. Measured live, it delivered Microsoft Clarity, the Meta pixel and a
   DoubleClick view-through remarketing beacon. Neither Microsoft nor Meta will sign
   a BAA.

   The container itself was NOT edited: Elite MD's other properties serve it too, and
   editing it would reach past the landing pages. Scope is the LP fleet only.

   UNCHANGED: this component is still mounted only on the aesthetics routes, per
   Joe's 2026-07-22 directive. Hair-restoration pages continue to load ZERO client
   marketing tags, and this change must not add GA4 to them. gclid is still captured
   on the GHL form independently, and conversions still upload server-side via
   GHL/RootLogic OCI.

   Still open, and unchanged by this: strictly, botox/med-spa form pages are also
   health-intent and would drop even GA4 under H-26. That call is Joe's.

   allow_google_signals:false is load-bearing (H-32) — without it GA4 linked to
   Google Ads rebuilds the same remarketing audiences the beacon was removed for. */
const GA_ID = 'G-8WSCR2VQWR'

export default function MarketingTags() {
  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js', new Date());
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false,anonymize_ip:true});`}
      </Script>
    </>
  )
}
