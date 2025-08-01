import Link from 'next/link';

const ServicesPage = () => {
  const basicServices = [
    {
      name: '기본 젤 네일',
      price: '40,000원',
      duration: '60분',
      description: '베이직 컬러의 깔끔하고 오래가는 젤 네일',
      features: ['기본 색상 선택', '베이스 케어 포함', '2-3주 지속']
    },
    {
      name: '프렌치 네일',
      price: '45,000원',
      duration: '70분',
      description: '클래식하고 우아한 프렌치 스타일',
      features: ['화이트/핑크 프렌치', '깔끔한 라인', '어떤 옷에도 잘 어울림']
    },
    {
      name: '그라데이션 네일',
      price: '50,000원',
      duration: '80분',
      description: '자연스러운 색상 변화가 아름다운 그라데이션',
      features: ['부드러운 색상 전환', '2가지 색상 조합', '섬세한 기술']
    },
    {
      name: '아크릴 네일',
      price: '55,000원',
      duration: '90분',
      description: '강하고 다양한 모양 연출이 가능한 아크릴',
      features: ['길이 연장 가능', '다양한 모양', '내구성 뛰어남']
    }
  ];

  const designServices = [
    {
      name: '심플 아트 네일',
      price: '60,000원',
      duration: '90분',
      description: '포인트가 되는 심플한 아트 디자인',
      features: ['1-2개 손가락 아트', '라인/도트 패턴', '미니멀 디자인']
    },
    {
      name: '플라워 아트',
      price: '70,000원',
      duration: '100분',
      description: '섬세하고 우아한 꽃 패턴 디자인',
      features: ['손그림 꽃무늬', '3D 입체감', '로맨틱한 분위기']
    },
    {
      name: '스톤 & 펄 네일',
      price: '75,000원',
      duration: '100분',
      description: '반짝이는 스톤과 펄로 화려함을 더한 디자인',
      features: ['스와로브스키 스톤', '천연 펄', '럭셔리한 느낌']
    },
    {
      name: '커스텀 아트',
      price: '80,000원~',
      duration: '120분',
      description: '고객 맞춤형 특별 디자인',
      features: ['개인별 맞춤 디자인', '복잡한 패턴', '유니크한 스타일']
    }
  ];

  const packageServices = [
    {
      name: '신부 패키지',
      price: '150,000원',
      duration: '180분',
      description: '결혼식을 위한 특별한 브라이덜 네일',
      features: ['드레스와 조화로운 디자인', '촬영용 완벽 마무리', '손발 세트', '애프터케어 포함'],
      popular: true
    },
    {
      name: '시즌 스페셜',
      price: '90,000원',
      duration: '120분',
      description: '계절에 맞는 트렌디한 디자인',
      features: ['시즌 트렌드 반영', '특별 재료 사용', '인스타그램 촬영 서비스']
    },
    {
      name: '커플 네일',
      price: '120,000원',
      duration: '150분',
      description: '연인이 함께하는 페어룩 네일',
      features: ['커플 매칭 디자인', '2인 동시 진행', '기념품 제공']
    }
  ];

  const additionalServices = [
    { name: '네일 케어', price: '25,000원', description: '큐티클 정리, 보습 관리' },
    { name: '네일 리무버', price: '15,000원', description: '안전한 젤 제거 서비스' },
    { name: '핸드 마사지', price: '20,000원', description: '손 피로 해소 마사지' },
    { name: '파라핀 케어', price: '30,000원', description: '깊은 보습과 영양 공급' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            네일 서비스 메뉴
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            전문 아티스트가 제공하는 다양한 네일 서비스를 만나보세요.
            당신의 스타일과 예산에 맞는 완벽한 서비스를 선택하세요.
          </p>
        </div>
      </section>

      {/* 기본 서비스 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            기본 네일 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {basicServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 bg-primary hover:bg-secondary text-white py-2 rounded-full font-medium transition-colors duration-300">
                  예약하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 디자인 서비스 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            디자인 네일 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-secondary/20">
                <h3 className="text-xl font-semibold text-secondary mb-2">{service.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 bg-secondary hover:bg-primary text-white py-2 rounded-full font-medium transition-colors duration-300">
                  예약하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 패키지 서비스 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            스페셜 패키지
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageServices.map((service, index) => (
              <div key={index} className={`rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative ${
                service.popular ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary' : 'bg-white'
              }`}>
                {service.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    인기
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-colors duration-300 ${
                  service.popular 
                    ? 'bg-primary hover:bg-secondary text-white' 
                    : 'bg-secondary hover:bg-primary text-white'
                }`}>
                  예약하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 서비스 */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            추가 케어 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-xl font-bold text-accent mb-2">{service.price}</p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 예약 안내 */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            나만의 특별한 네일 아트를 예약하세요
          </h2>
          <p className="text-lg mb-8 opacity-90">
            전문 상담을 통해 당신에게 가장 어울리는 스타일을 찾아드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              온라인 예약
            </Link>
            <a
              href="tel:02-1234-5678"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              전화 상담
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;