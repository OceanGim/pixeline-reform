export default function Services() {
  const services = [
    {
      title: '명함',
      price: '15,000원부터',
      description: '고급 용지와 깔끔한 디자인으로 전문적인 이미지를 연출하세요.',
      features: ['다양한 용지 선택', '무료 디자인 수정', '24시간 제작'],
      icon: '💼'
    },
    {
      title: '현수막',
      price: '20,000원부터',
      description: '실내외 행사, 홍보용 현수막을 고품질로 제작해드립니다.',
      features: ['방수 원단', '바람 구멍 가공', '무료 현장 설치'],
      icon: '🏴'
    },
    {
      title: '전단지',
      price: '30,000원부터',
      description: '효과적인 홍보를 위한 전단지를 빠르고 정확하게 제작합니다.',
      features: ['대량 인쇄 할인', '접지 가공 가능', '당일 제작'],
      icon: '📄'
    },
    {
      title: '리플렛',
      price: '40,000원부터',
      description: '제품 소개, 회사 홍보용 리플렛을 전문적으로 제작합니다.',
      features: ['다양한 접지 방식', '코팅 선택 가능', '소량 제작 가능'],
      icon: '📑'
    },
    {
      title: '피켓',
      price: '25,000원부터',
      description: '집회, 시위, 홍보용 피켓을 튼튼하고 선명하게 제작합니다.',
      features: ['방수 처리', '손잡이 제작', '대형 사이즈 가능'],
      icon: '📯'
    },
    {
      title: '디자인 서비스',
      price: '맞춤 견적',
      description: '전문 디자이너가 고객의 요구에 맞는 디자인을 제작합니다.',
      features: ['1:1 맞춤 상담', '무제한 수정', '빠른 시안 제작'],
      icon: '🎨'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">인쇄 서비스</h1>
          <p className="text-xl">픽셀라인이 제공하는 다양한 인쇄 서비스를 확인하세요</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
                  <p className="text-3xl font-bold text-blue-600 text-center mb-4">{service.price}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    견적 문의하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주문 과정</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">상담 및 견적</h3>
              <p className="text-gray-600">전화, 카카오톡으로 상담 후 정확한 견적 제공</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">디자인 확정</h3>
              <p className="text-gray-600">디자인 시안 검토 후 최종 확정</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">제작 및 인쇄</h3>
              <p className="text-gray-600">고품질 장비로 정확하고 빠른 제작</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">배송 및 완료</h3>
              <p className="text-gray-600">안전한 포장으로 빠른 배송 완료</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 문의하세요</h2>
          <p className="text-xl mb-8">전문 상담원이 24시간 대기 중입니다</p>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              📞 전화 상담
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              💬 카카오톡 상담
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}