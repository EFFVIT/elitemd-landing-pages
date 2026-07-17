import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.elitemdspa.com/og/c-evaluation.webp", width: 1200, height: 630, alt: "Dr. Bansal of Elite MD medical aesthetics" }] },
  twitter: { card: "summary_large_image", images: ["https://more.elitemdspa.com/og/c-evaluation.webp"] },
  title: 'Hair Loss Evaluation | Elite MD',
  robots: 'noindex, nofollow',
}

export default function EvaluationPage() {
  return (
    <EliteMDLP
      heroFormId="qDWzCCuQWp38DWAJaWp8"
      bottomFormId="ZWG5LdbKU2zDZLajYaXv"
    />
  )
}
