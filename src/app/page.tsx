export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white transform rotate-45"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white transform rotate-12"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              픽셀라인 인쇄 서비스
            </h1>
            <p className="text-2xl mb-4 text-blue-100">
              24시간 고품질 인쇄 서비스
            </p>
            <p className="text-lg mb-10 text-blue-200">
              명함부터 현수막까지 - 빠르고 정확하게
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay">
            <button className="group bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                📞 견적 문의하기
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <button className="group border-3 border-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center">
                🎨 포트폴리오 보기
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Floating Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-sm text-blue-200">완성 프로젝트</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-blue-200">상담 서비스</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold">15년</div>
              <div className="text-sm text-blue-200">업계 경력</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm text-blue-200">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              인쇄 서비스
            </h2>
            <p className="text-xl text-gray-600">다양한 인쇄 서비스를 한 곳에서</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: '명함', price: '15,000원부터', icon: '💼', color: 'from-blue-500 to-blue-600', delay: '0ms' },
              { name: '현수막', price: '20,000원부터', icon: '🏴', color: 'from-green-500 to-green-600', delay: '100ms' },
              { name: '전단지', price: '30,000원부터', icon: '📄', color: 'from-orange-500 to-orange-600', delay: '200ms' },
              { name: '리플렛', price: '40,000원부터', icon: '📑', color: 'from-purple-500 to-purple-600', delay: '300ms' },
              { name: '피켓', price: '25,000원부터', icon: '📯', color: 'from-red-500 to-red-600', delay: '400ms' },
              { name: '디자인 서비스', price: '맞춤 견적', icon: '🎨', color: 'from-pink-500 to-pink-600', delay: '500ms' }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: service.delay }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg text-center mb-4">{service.price}</p>
                <div className="text-center">
                  <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">왜 픽셀라인인가요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '24시간 제작', desc: '급한 주문도 24시간 내 완성', icon: '⚡' },
              { title: '품질 보증', desc: '최고 품질의 인쇄물 보장', icon: '✅' },
              { title: '무료 디자인', desc: '전문 디자이너가 무료 지원', icon: '🎨' },
              { title: '안전 배송', desc: '신속하고 안전한 배송', icon: '📦' },
              { title: '투명한 가격', desc: '합리적이고 투명한 가격', icon: '💰' },
              { title: '15년 경력', desc: '풍부한 경험과 노하우', icon: '🏆' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 상담받으세요</h2>
          <p className="text-xl mb-8">전화, 카카오톡, 이메일로 24시간 상담 가능</p>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              📞 전화 상담
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              💬 카톡 상담
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}