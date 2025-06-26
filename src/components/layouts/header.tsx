'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600">픽셀라인</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              홈
            </Link>
            <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              서비스
            </Link>
            <Link href="/portfolio" className="text-base font-medium text-gray-500 hover:text-gray-900">
              포트폴리오
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              문의하기
            </Link>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/order" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              견적문의
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}