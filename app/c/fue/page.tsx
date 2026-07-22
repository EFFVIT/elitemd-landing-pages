import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'
import { fue } from '@/components/eliteContent'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.elitemdspa.com/og/c-fue.webp", width: 1200, height: 630, alt: "FUE hair transplant at Elite MD Danville" }] },
  twitter: { card: "summary_large_image", images: ["https://more.elitemdspa.com/og/c-fue.webp"] },
  title: 'FUE Hair Transplant | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function FuePage() {
  return <EliteMDLP content={fue} />
}
