import type { Metadata } from 'next'
import EliteAntiWrinkleLP from '@/components/EliteAntiWrinkleLP'
// MarketingTags (GA4 G-8WSCR2VQWR) REMOVED 2026-08-25 on Joe's call.
// Joe's 2026-07-22 directive kept the tag on the aesthetics routes while Elite
// MD was a client. Joe confirmed 2026-08-25 that Elite MD is no longer a
// client, and his rule for the inactive properties we still host is to kill the
// tags. This page is a botox / med-spa consult form, which the MarketingTags
// comment itself flagged as health-intent under H-26 / FM7. Removing a tracker
// from a medical form page can only reduce exposure (H-43).

export const metadata: Metadata = {
  title: 'Botox & Neuromodulator Treatments — Dr. Sonia, MD, FAAD | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <>
      <EliteAntiWrinkleLP />
    </>
  )
}
