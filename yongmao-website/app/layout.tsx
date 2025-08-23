import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: '詠楙企業有限公司',
  description: '專業橡膠製品與彈性體解決方案提供商',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}