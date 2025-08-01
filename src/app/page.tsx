'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingElement = ({ delay = 0, children, className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 overflow-hidden">
        {/* 배경 애니메이션 요소들 */}
        <div className="absolute inset-0">
          <FloatingElement delay={0} className="top-10 left-10 w-20 h-20 opacity-20">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
          </FloatingElement>
          <FloatingElement delay={1} className="top-32 right-20 w-16 h-16 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-accent"></div>
          </FloatingElement>
          <FloatingElement delay={2} className="bottom-20 left-32 w-12 h-12 opacity-25">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary"></div>
          </FloatingElement>
          <FloatingElement delay={0.5} className="bottom-32 right-10 w-24 h-24 opacity-15">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary"></div>
          </FloatingElement>
          
          {/* 네일 모양 장식 요소들 */}
          <FloatingElement delay={1.5} className="top-1/4 left-1/4 opacity-10">
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
              <path d="M20 5 C25 5, 30 10, 30 20 C30 30, 25 35, 20 35 C15 35, 10 30, 10 20 C10 10, 15 5, 20 5 Z" fill="currentColor"/>
            </svg>
          </FloatingElement>
          <FloatingElement delay={2.5} className="top-1/3 right-1/3 opacity-10">
            <svg width="35" height="35" viewBox="0 0 40 40" className="text-secondary">
              <path d="M20 5 C25 5, 30 10, 30 20 C30 30, 25 35, 20 35 C15 35, 10 30, 10 20 C10 10, 15 5, 20 5 Z" fill="currentColor"/>
            </svg>
          </FloatingElement>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                당신만의
              </span>
              <br />
              <motion.span 
                className="text-foreground"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                특별한 네일 아트
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            우아함과 세련됨이 만나는 프리미엄 네일 아트 스튜디오에서<br />
            <span className="text-primary font-semibold">당신의 아름다움을 완성하세요</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://booking.naver.com"
                target="_blank"
                className="relative inline-block bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10">네이버 예약하기</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gallery"
                className="border-3 border-primary text-primary hover:bg-primary hover:text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                갤러리 보기
              </Link>
            </motion.div>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center text-primary">
              <span className="text-sm mb-2">아래로 스크롤</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 1500, suffix: '+', label: '만족한 고객' },
              { number: 95, suffix: '%', label: '고객 만족도' },
              { number: 10, suffix: '+', label: '년 경력' },
              { number: 300, suffix: '+', label: '디자인 보유' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 특징 섹션 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              왜 <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NailArt Studio</span>일까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최고의 품질과 서비스로 고객님의 특별한 순간을 더욱 빛나게 만들어 드립니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: '전문 아티스트',
                description: '10년 이상의 경력을 가진 전문 네일 아티스트들이 정성껏 디자인해 드립니다.',
                color: 'primary'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                ),
                title: '프리미엄 재료',
                description: '최고급 젤과 안전한 재료만을 사용하여 건강하고 오래가는 네일을 완성합니다.',
                color: 'secondary'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9h-6V7a3 3 0 00-3-3H5v2h5a1 1 0 011 1v2zm1 3a1 1 0 000 2h4a1 1 0 000-2h-4z"/>
                  </svg>
                ),
                title: '맞춤 디자인',
                description: '고객의 취향과 라이프스타일에 맞는 개인 맞춤형 네일 디자인을 제공합니다.',
                color: 'accent'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* 배경 그라데이션 */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br from-${feature.color} to-${feature.color}/70 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-foreground">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">프리미엄</span> 네일 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              당신의 개성을 표현하는 다양한 네일 아트 서비스를 만나보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: '젤 네일', 
                price: '40,000원~', 
                description: '깔끔하고 오래가는 베이직 젤 네일',
                gradient: 'from-pink-400 to-rose-400',
                icon: '💅'
              },
              { 
                name: '아크릴 네일', 
                price: '50,000원~', 
                description: '강하고 다양한 모양 연출 가능',
                gradient: 'from-purple-400 to-indigo-400',
                icon: '✨'
              },
              { 
                name: '디자인 네일', 
                price: '60,000원~', 
                description: '창의적이고 개성 있는 아트 디자인',
                gradient: 'from-amber-400 to-orange-400',
                icon: '🎨'
              },
              { 
                name: '네일 케어', 
                price: '25,000원~', 
                description: '건강한 손톱을 위한 전문 케어',
                gradient: 'from-emerald-400 to-teal-400',
                icon: '🌿'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.name}</h3>
                    <div className={`text-3xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className="inline-block bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                전체 서비스 보기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 갤러리 미리보기 섹션 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              최신 <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">네일 아트</span> 작품
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              매주 업데이트되는 새로운 디자인과 트렌디한 네일 아트를 만나보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { gradient: 'from-pink-300 via-rose-400 to-red-400', design: '플라워 아트' },
              { gradient: 'from-purple-300 via-violet-400 to-indigo-400', design: '그라데이션' },
              { gradient: 'from-amber-300 via-orange-400 to-red-400', design: '골드 액센트' },
              { gradient: 'from-emerald-300 via-teal-400 to-cyan-400', design: '미니멀 라인' },
              { gradient: 'from-blue-300 via-indigo-400 to-purple-400', design: '스톤 네일' },
              { gradient: 'from-rose-300 via-pink-400 to-fuchsia-400', design: '프렌치 변형' },
              { gradient: 'from-yellow-300 via-amber-400 to-orange-400', design: '포인트 아트' },
              { gradient: 'from-slate-300 via-gray-400 to-zinc-400', design: '모던 스타일' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm font-medium">{item.design}</div>
                    </div>
                  </div>
                  
                  {/* 네일 모양 SVG */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg width="60" height="80" viewBox="0 0 60 80" className="text-white/30">
                      <path d="M30 10 C40 10, 50 20, 50 35 C50 60, 40 70, 30 70 C20 70, 10 60, 10 35 C10 20, 20 10, 30 10 Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gallery"
                className="inline-block bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                갤러리 전체보기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA 섹션 */}
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
              특별한 순간을<br />
              <span className="text-yellow-300">더욱 빛나게</span> 만들어보세요
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              전문 아티스트와 함께하는 프리미엄 네일 아트 경험을<br />
              지금 바로 예약하세요
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
                  href="https://booking.naver.com"
                  target="_blank"
                  className="inline-block bg-white text-primary hover:bg-yellow-50 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  네이버 예약하기
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
