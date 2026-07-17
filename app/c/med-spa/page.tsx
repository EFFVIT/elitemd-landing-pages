import type { Metadata } from 'next'
import EliteMedSpaLP from '@/components/EliteMedSpaLP'

export const metadata: Metadata = {
  title: 'Expert Skin & Aesthetic Care with Dr. Sonia | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return <EliteMedSpaLP />
}
