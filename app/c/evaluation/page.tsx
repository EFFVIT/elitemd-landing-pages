import type { Metadata } from 'next'
import EliteMDLP from '@/components/EliteMDLP'

export const metadata: Metadata = {
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
