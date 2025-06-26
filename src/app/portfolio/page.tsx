export default function Portfolio() {
  const portfolioItems = [
    {
      category: '명함',
      title: 'ABC 건설 명함',
      description: '고급스러운 디자인의 건설업체 명함',
      image: '💼',
      tags: ['고급 용지', '엠보싱', '골드 포일']
    },
    {
      category: '현수막',
      title: '카페 오픈 현수막',
      description: '신규 카페 오픈 홍보용 현수막',
      image: '🏴',
      tags: ['방수 원단', '대형 사이즈', '야외용']
    },
    {
      category: '전단지',
      title: '피트니스 센터 전단지',
      description: '헬스장 회원 모집 전단지',
      image: '📄',
      tags: ['컬러 인쇄', '코팅', '대량 제작']
    },
    {
      category: '리플렛',
      title: '부동산 회사 리플렛',
      description: '부동산 상품 소개 3단 접지 리플렛',
      image: '📑',
      tags: ['3단 접지', '양면 인쇄', '무광 코팅']
    },
    {
      category: '피켓',
      title: '환경 보호 캠페인 피켓',
      description: '환경 보호 시위용 피켓',
      image: '📯',
      tags: ['방수 처리', '손잡이', '내구성']
    },
    {
      category: '디자인',
      title: '브랜딩 디자인',
      description: '스타트업 브랜드 아이덴티티 디자인',
      image: '🎨',
      tags: ['로고 디자인', '컬러 팔레트', 'CI/BI']
    },
    {
      category: '명함',
      title: 'IT 회사 명함',
      description: '모던한 디자인의 IT 회사 명함',
      image: '💼',
      tags: ['미니멀 디자인', '특수 용지', '레터프레스']
    },
    {
      category: '현수막',
      title: '축제 현수막',
      description: '지역 축제 홍보용 대형 현수막',
      image: '🏴',
      tags: ['초대형', '컬러풀', '내구성']
    },
    {
      category: '전단지',
      title: '레스토랑 메뉴 전단지',
      description: '레스토랑 신메뉴 홍보 전단지',
      image: '📄',
      tags: ['고급 용지', '음식 사진', '접지 가공']
    }
  ]

  const categories = ['전체', '명함', '현수막', '전단지', '리플렛', '피켓', '디자인']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">포트폴리오</h1>
          <p className="text-xl">픽셀라인이 제작한 다양한 인쇄물 작품들을 확인하세요</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full border-2 font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'text-gray-600 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">픽셀라인 실적</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">완성된 프로젝트</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <p className="text-gray-600">만족한 고객</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <p className="text-gray-600">년 경력</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-600">고객 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  김
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">김대표 (ABC 건설)</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;명함 품질이 정말 좋아요. 고급스럽고 디자인도 만족스럽습니다. 다음에도 이용할게요!&rdquo;</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  박
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">박사장 (맛집 레스토랑)</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;전단지 제작 속도가 빨라서 급할 때 정말 도움됐어요. 품질도 훌륭하고요!&rdquo;</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  이
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">이실장 (IT 스타트업)</h4>
                  <div className="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;디자인부터 인쇄까지 원스톱으로 해결해주셔서 편했어요. 전문성이 느껴집니다.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">당신의 프로젝트도 포트폴리오에 추가하세요</h2>
          <p className="text-xl mb-8">지금 바로 상담받고 고품질 인쇄물을 경험해보세요</p>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              📞 전화 상담
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              💬 견적 문의
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}