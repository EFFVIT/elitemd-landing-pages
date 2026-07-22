import DniSwap from '@/components/DniSwap'
import Fab from '@/components/fab/Fab'
import './globals.css'

export const metadata = {
  openGraph: {
    images: [{ url: 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Layer-1-1024x215.png', width: 1200, height: 630, alt: 'Elite MD' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ezu8xjt.css" />
        {/* GTM-WNPJQ3HX intentionally NOT loaded globally. H-26 / medical HIPAA
            carve-out: health-intent hair form pages must fire zero client
            marketing tags (GA4 / Google Ads remarketing + conversion). GTM is
            mounted per-page via <MarketingTags/> on aesthetics routes only. */}
      </head>
      <body>
        {/* Inert until the elitemd `dni_pools` row exists in control with real
            numbers (pending Tom's 925-pool purchase, ClickUp 86bb1vhzc). Once
            the pool + allowed_origins are set, paid sessions swap the number
            with NO further code deploy — go-live is config-only. */}
        <DniSwap />
        <Fab client="elitemd" />
        {children}
      </body>
    </html>
  )
}
