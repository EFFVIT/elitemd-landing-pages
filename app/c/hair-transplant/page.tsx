import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'

export const metadata: Metadata = {
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
