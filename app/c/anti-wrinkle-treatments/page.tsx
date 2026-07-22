import type { Metadata } from 'next'
import EliteAntiWrinkleLP from '@/components/EliteAntiWrinkleLP'
import MarketingTags from '@/components/MarketingTags'

export const metadata: Metadata = {
  title: 'Botox & Neuromodulator Treatments — Dr. Sonia, MD, FAAD | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <>
      <MarketingTags />
      <EliteAntiWrinkleLP />
    </>
  )
}
