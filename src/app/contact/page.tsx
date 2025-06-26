export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">문의하기</h1>
          <p className="text-xl">언제든지 연락주세요. 24시간 상담 서비스를 제공합니다</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">전화 상담</h3>
              <p className="text-gray-600 mb-4">빠른 상담을 원하시면 전화주세요</p>
              <p className="text-2xl font-bold text-blue-600">1599-9716</p>
              <p className="text-sm text-gray-500 mt-2">24시간 상담 가능</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">카카오톡</h3>
              <p className="text-gray-600 mb-4">간편하게 카톡으로 상담받으세요</p>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                카톡 상담하기
              </button>
              <p className="text-sm text-gray-500 mt-2">실시간 답변</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">이메일</h3>
              <p className="text-gray-600 mb-4">자세한 문의는 이메일로 보내주세요</p>
              <p className="text-lg font-bold text-blue-600">master@pixeline.co.kr</p>
              <p className="text-sm text-gray-500 mt-2">24시간 내 답변</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">온라인 문의</h2>
          <form className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  이름 *
                </label>
                <input
                  type="text"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="010-1234-5678"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                이메일
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="example@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                서비스 종류
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option value="">선택해주세요</option>
                <option value="명함">명함</option>
                <option value="현수막">현수막</option>
                <option value="전단지">전단지</option>
                <option value="리플렛">리플렛</option>
                <option value="피켓">피켓</option>
                <option value="디자인">디자인 서비스</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                문의 내용 *
              </label>
              <textarea
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="문의하실 내용을 자세히 적어주세요. 수량, 사이즈, 용지, 마감일 등을 포함해주시면 더 정확한 견적을 제공할 수 있습니다."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                문의 전송하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">찾아오시는 길</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">지도 영역</p>
                <p className="text-sm text-gray-500">실제 지도는 Google Maps 또는 네이버 지도 API 연동</p>
              </div>
            </div>

            {/* Location Info */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  📍 위치 정보
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">주소:</span>
                    <p className="text-gray-600">서울시 송파구 마천로 134(오금동), 2층</p>
                  </div>
                  <div>
                    <span className="font-semibold">우편번호:</span>
                    <p className="text-gray-600">05632</p>
                  </div>
                  <div>
                    <span className="font-semibold">대중교통:</span>
                    <p className="text-gray-600">지하철 5호선 오금역 2번 출구 도보 5분</p>
                  </div>
                  <div>
                    <span className="font-semibold">주차:</span>
                    <p className="text-gray-600">주차 공간 협소 - 대중교통 이용 권장</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  🕒 운영시간
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>평일 (월~금)</span>
                    <span className="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span className="font-semibold">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일 및 공휴일</span>
                    <span className="text-red-500 font-semibold">휴무</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-700">
                      💡 <strong>24시간 주문 접수:</strong> 온라인 및 전화상담은 24시간 가능합니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Q. 주문 후 얼마나 걸리나요?</h3>
              <p className="text-gray-600">A. 일반적으로 디자인 확정 후 1-2일 내 제작 완료됩니다. 급한 경우 당일 제작도 가능하니 상담 시 말씀해주세요.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Q. 디자인 수정은 몇 번까지 가능한가요?</h3>
              <p className="text-gray-600">A. 초안 제작 후 3회까지 무료 수정 가능합니다. 그 이후 수정은 별도 비용이 발생할 수 있습니다.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Q. 소량 주문도 가능한가요?</h3>
              <p className="text-gray-600">A. 네, 명함 100장부터 소량 주문 가능합니다. 수량에 관계없이 고품질로 제작해드립니다.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Q. 전국 배송 가능한가요?</h3>
              <p className="text-gray-600">A. 네, 전국 어디든 배송 가능합니다. 서울 및 수도권은 당일 배송, 지방은 1-2일 소요됩니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}