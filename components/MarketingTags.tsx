import Script from 'next/script'

// Client-side marketing tags (GTM -> GA4 + Google Ads conversion/remarketing).
//
// H-26 / medical HIPAA carve-out: this MUST NOT render on any health-intent
// form/consult page. Hair-restoration pages (hair-transplant, fue,
// hair-restoration, evaluation) intentionally load ZERO client marketing tags;
// their gclid is still captured on the GHL form (independent of GTM) and
// conversions upload server-side via GHL/RootLogic OCI.
//
// Mount only on the aesthetics routes per Joe's 2026-07-22 directive (pixels
// kept on aesthetics/top-of-funnel). See the open flag: strictly, botox/med-spa
// form pages are also health-intent and would drop the pixel under H-26 — that
// aesthetics-pixel decision is Joe's to finalize; until then this stays here.
const GTM_ID = 'GTM-WNPJQ3HX'

export default function MarketingTags() {
  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
