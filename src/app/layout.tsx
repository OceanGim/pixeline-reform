import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layouts/header'
import { Footer } from '@/components/layouts/footer'

export const metadata: Metadata = {
  title: '픽셀라인 - 24시간 인쇄 서비스',
  description: '24시간 고품질 인쇄 서비스. 현수막, 명함, 전단지 등 다양한 인쇄물을 빠르고 정확하게 제작합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}