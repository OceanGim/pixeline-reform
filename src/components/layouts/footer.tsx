import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">픽셀라인</h3>
            <p className="text-gray-400 text-base">
              24시간 고품질 인쇄 서비스를 제공합니다.<br />
              명함부터 현수막까지 모든 인쇄물을 한번에 해결하세요.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">명함</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">현수막</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">전단지</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">디자인</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">연락처</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">전화: 1599-9716</li>
              <li className="text-gray-400">이메일: master@pixeline.co.kr</li>
              <li className="text-gray-400">우편번호: 05632</li>
              <li className="text-gray-400">주소: 서울시 송파구 마천로 134(오금동), 2층</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Pixeline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}