import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'
import { evaluation } from '@/components/eliteContent'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.elitemdspa.com/og/c-evaluation.webp", width: 1200, height: 630, alt: "Hair restoration consultation at Elite MD Danville" }] },
  twitter: { card: "summary_large_image", images: ["https://more.elitemdspa.com/og/c-evaluation.webp"] },
  title: 'Hair Restoration Consultation | Elite MD Danville',
  robots: 'noindex, nofollow',
}

export default function EvaluationPage() {
  return <EliteMDLP content={evaluation} />
}
