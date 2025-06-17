import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ backgroundColor: '#E8F9EC', fontFamily: 'sans-serif' }}>
        <main style={{ padding: '4rem', textAlign: 'center' }}>
          {children}
        </main>
      </body>
    </html>
  )
}