'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      {/* 헤더 섹션 */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                네일 서비스
              </span>
              <br />
              <span className="text-foreground">메뉴</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              전문 아티스트가 제공하는 다양한 네일 서비스를 만나보세요.<br />
              <span className="text-primary font-semibold">당신의 스타일과 예산에 맞는 완벽한 서비스를 선택하세요.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 기본 서비스 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                기본 네일 서비스
              </span>
            </h2>
            <p className="text-gray-600 text-lg">깔끔하고 우아한 베이직 네일 케어</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {basicServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      💅
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 text-center">{service.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{service.price}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{service.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      예약하기
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 디자인 서비스 */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                디자인 네일 서비스
              </span>
            </h2>
            <p className="text-gray-600 text-lg">개성 있고 창의적인 아트 디자인</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-secondary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      🎨
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 text-center">{service.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">{service.price}</span>
                      <span className="text-sm text-gray-500 bg-secondary/10 px-3 py-1 rounded-full">{service.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button 
                      className="w-full bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      예약하기
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 패키지 서비스 */}
      <section className="py-16 px-4 bg-gradient-to-br from-accent/5 to-primary/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                스페셜 패키지
              </span>
            </h2>
            <p className="text-gray-600 text-lg">특별한 날을 위한 프리미엄 서비스</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12 }}
              >
                <div className={`rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                  service.popular 
                    ? 'bg-gradient-to-br from-white via-primary/5 to-secondary/5 border-2 border-primary/30' 
                    : 'bg-white'
                }`}>
                  {service.popular && (
                    <motion.span 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐ 인기 ⭐
                    </motion.span>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${
                        service.popular 
                          ? 'from-primary via-secondary to-accent' 
                          : 'from-secondary to-accent'
                      } rounded-3xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.popular ? '👑' : '✨'}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{service.name}</h3>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-3xl font-bold ${
                        service.popular 
                          ? 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'
                          : 'bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent'
                      }`}>{service.price}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">{service.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-center">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <motion.svg 
                            className={`w-5 h-5 mr-3 ${service.popular ? 'text-primary' : 'text-secondary'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            whileHover={{ scale: 1.2 }}
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </motion.svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button 
                      className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl ${
                        service.popular 
                          ? 'bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:to-primary text-white' 
                          : 'bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      지금 예약하기
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 서비스 */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                추가 케어 서비스
              </span>
            </h2>
            <p className="text-gray-600 text-lg">완벽한 네일 케어를 위한 부가 서비스</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-accent/30">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-xl shadow-md"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    🌿
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">{service.price}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 예약 안내 */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              나만의 특별한<br />
              <span className="text-yellow-300">네일 아트</span>를 예약하세요
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              전문 상담을 통해 당신에게 가장 어울리는<br />
              <span className="text-yellow-300 font-semibold">스타일을 찾아드립니다</span>
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/booking"
                  className="inline-block bg-white text-primary hover:bg-yellow-50 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  💅 온라인 예약
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:02-1234-5678"
                  className="inline-block border-3 border-white text-white hover:bg-white hover:text-primary px-12 py-5 rounded-full text-xl font-bold transition-all duration-300"
                >
                  📞 전화 상담
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: '⏰', text: '빠른 예약' },
                { icon: '👩‍🎨', text: '전문 아티스트' },
                { icon: '✨', text: '프리미엄 재료' },
                { icon: '💎', text: '맞춤 디자인' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium opacity-90">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;