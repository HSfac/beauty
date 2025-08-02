'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedStyle, setSelectedStyle] = useState('전체');

  const categories = ['전체', '젤네일', '아크릴', '디자인', '시즌특집'];
  const styles = ['전체', '미니멀', '화려함', '그라데이션', '프렌치', '패턴'];

  // 임시 갤러리 데이터
  const galleryItems = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `네일 아트 작품 ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    style: styles[Math.floor(Math.random() * (styles.length - 1)) + 1],
    description: '섬세하고 우아한 네일 디자인',
    price: `${(Math.floor(Math.random() * 5) + 4) * 10000}원`,
  }));

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === '전체' || item.category === selectedCategory;
    const styleMatch = selectedStyle === '전체' || item.style === selectedStyle;
    return categoryMatch && styleMatch;
  });

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
                네일 아트
              </span>
              <br />
              <span className="text-foreground">갤러리</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              전문 아티스트들이 정성껏 만든 다양한 네일 아트 작품들을 만나보세요.<br />
              <span className="text-primary font-semibold">당신의 스타일에 맞는 완벽한 디자인을 찾아보세요.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-8 px-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 카테고리 필터 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wider uppercase">카테고리</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-primary/30'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* 스타일 필터 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wider uppercase">스타일</h3>
              <div className="flex flex-wrap gap-3">
                {styles.map((style, index) => (
                  <motion.button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                      selectedStyle === style
                        ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-secondary/30'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    {style}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 갤러리 그리드 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600">
              총 <span className="font-bold text-primary text-2xl">{filteredItems.length}</span>개의 작품이 있습니다
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform">
                  {/* 이미지 플레이스홀더 */}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center">
                        {/* 네일 모양 SVG */}
                        <svg width="80" height="100" viewBox="0 0 80 100" className="text-white/40">
                          <path d="M40 15 C55 15, 65 25, 65 45 C65 75, 55 85, 40 85 C25 85, 15 75, 15 45 C15 25, 25 15, 40 15 Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button 
                        className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        자세히 보기
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* 작품 정보 */}
                  <div className="p-6">
                    <h3 className="font-bold text-foreground mb-3 text-lg">{item.title}</h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 rounded-full font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs bg-gradient-to-r from-secondary to-accent text-white px-3 py-1.5 rounded-full font-medium">
                        {item.style}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{item.price}</p>
                      <motion.button
                        className="text-primary hover:text-secondary transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 더 많은 작품 로드 버튼 */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              더 많은 작품 보기 ✨
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 인스타그램 연동 섹션 */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                인스타그램
              </span>에서<br />
              더 많은 작품을 만나보세요
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              실시간으로 업데이트되는 네일 아트 작품들과<br />
              <span className="text-primary font-semibold">고객 후기를 확인하세요</span>
            </p>
            
            <motion.a
              href="https://instagram.com/nailart_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </motion.svg>
              @nailart_studio 팔로우하기 ✨
            </motion.a>
            
            <motion.div 
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { gradient: 'from-pink-400 to-rose-400', icon: '💎' },
                { gradient: 'from-purple-400 to-indigo-400', icon: '✨' },
                { gradient: 'from-amber-400 to-orange-400', icon: '🌟' },
                { gradient: 'from-emerald-400 to-teal-400', icon: '💅' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl shadow-lg`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;