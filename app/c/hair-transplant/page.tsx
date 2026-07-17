import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.elitemdspa.com/og/c-hair-transplant.webp", width: 1200, height: 630, alt: "Hair transplant information from Elite MD" }] },
  twitter: { card: "summary_large_image", images: ["https://more.elitemdspa.com/og/c-hair-transplant.webp"] },
  title: 'Hair Transplant Information | Elite MD',
  robots: 'noindex, nofollow',
}

export default function HairTransplantPage() {
  return (
    <EliteMDLP
      heroFormId="qDWzCCuQWp38DWAJaWp8"
      bottomFormId="ZWG5LdbKU2zDZLajYaXv"
    />
  )
}
