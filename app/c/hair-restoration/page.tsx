import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'
import { hairRestoration } from '@/components/eliteContent'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.elitemdspa.com/og/c-hair-restoration.webp", width: 1200, height: 630, alt: "Hair restoration at Elite MD Danville" }] },
  twitter: { card: "summary_large_image", images: ["https://more.elitemdspa.com/og/c-hair-restoration.webp"] },
  title: 'Hair Restoration | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function HairRestorationPage() {
  return <EliteMDLP content={hairRestoration} />
}
