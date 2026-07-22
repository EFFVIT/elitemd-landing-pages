import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'
import { hairTransplant } from '@/components/eliteContent'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.elitemdspa.com/og/c-hair-transplant.webp", width: 1200, height: 630, alt: "Hair transplant surgery at Elite MD Danville" }] },
  twitter: { card: "summary_large_image", images: ["https://more.elitemdspa.com/og/c-hair-transplant.webp"] },
  title: 'Hair Transplant Surgery | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function HairTransplantPage() {
  return <EliteMDLP content={hairTransplant} />
}
