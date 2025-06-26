'use client'

import { useState } from 'react'

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    quantity: '',
    size: '',
    deadline: '',
    budget: '',
    description: '',
    hasDesign: false,
    designFile: null as File | null
  })

  const services = [
    '명함',
    '현수막', 
    '전단지',
    '리플렛',
    '피켓',
    '디자인 서비스',
    '기타'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        designFile: e.target.files![0]
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제로는 API 호출
    alert('견적 문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">견적 문의</h1>
          <p className="text-xl">정확한 견적을 위해 자세한 정보를 입력해주세요</p>
        </div>
      </section>

      {/* Order Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">주문 진행 과정</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="ml-2 text-sm">견적 문의</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span className="ml-2 text-sm">상담 및 견적</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span className="ml-2 text-sm">디자인 확정</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="bg-gray-300 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <span className="ml-2 text-sm">제작 완료</span>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            {/* 기본 정보 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b">기본 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="홍길동"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="010-1234-5678"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
            </div>

            {/* 주문 정보 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b">주문 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    서비스 종류 *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">선택해주세요</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    수량
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="예: 100매, 1개"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    사이즈/규격
                  </label>
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="예: 90x50mm, A4, 3x1m"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    완료 희망일
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    예산 범위
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="">선택해주세요</option>
                    <option value="10만원 미만">10만원 미만</option>
                    <option value="10-30만원">10-30만원</option>
                    <option value="30-50만원">30-50만원</option>
                    <option value="50-100만원">50-100만원</option>
                    <option value="100만원 이상">100만원 이상</option>
                    <option value="협의">협의</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 디자인 정보 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b">디자인 정보</h3>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="hasDesign"
                    checked={formData.hasDesign}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">기존 디자인 파일이 있습니다</span>
                </label>
              </div>
              
              {formData.hasDesign && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    디자인 파일 업로드
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    지원 형식: JPG, PNG, PDF, AI, PSD (최대 10MB)
                  </p>
                </div>
              )}
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  상세 요청사항 *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="원하시는 디자인 스타일, 색상, 용지, 후가공 등 자세한 요청사항을 적어주세요. 
예시: 
- 명함: 고급 아트지, 무광 코팅, 회사 로고 포함
- 현수막: 방수 원단, 빨간색 바탕에 흰색 글씨
- 전단지: 양면 컬러, A4 사이즈, 접지 없음"
                  required
                ></textarea>
              </div>
            </div>

            {/* 개인정보 동의 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mr-2 mt-1"
                />
                <span className="text-sm text-gray-700">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 견적 제공 및 상담 목적으로만 사용되며, 
                  동의 철회 시까지 보관됩니다. 자세한 내용은 개인정보처리방침을 참고해주세요.
                </span>
              </label>
            </div>

            {/* 제출 버튼 */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                견적 문의 접수하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">빠른 상담이 필요하신가요?</h2>
          <p className="text-gray-600 mb-8">전화나 카카오톡으로 즉시 상담받으실 수 있습니다</p>
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <p className="font-bold">02-1234-5678</p>
              <p className="text-sm text-gray-500">24시간 상담</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <p className="font-bold">카카오톡 상담</p>
              <p className="text-sm text-gray-500">실시간 답변</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✉️</div>
              <p className="font-bold">master@pixeline.co.kr</p>
              <p className="text-sm text-gray-500">24시간 내 답변</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}