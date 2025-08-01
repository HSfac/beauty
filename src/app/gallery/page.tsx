'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            네일 아트 갤러리
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            전문 아티스트들이 정성껏 만든 다양한 네일 아트 작품들을 만나보세요.
            당신의 스타일에 맞는 완벽한 디자인을 찾아보세요.
          </p>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="bg-white border-b border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 카테고리 필터 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">카테고리</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* 스타일 필터 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">스타일</h3>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedStyle === style
                        ? 'bg-secondary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리 그리드 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-600">
              총 <span className="font-semibold text-primary">{filteredItems.length}</span>개의 작품
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                {/* 이미지 플레이스홀더 */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-500 text-sm">네일 아트 이미지</span>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-primary px-4 py-2 rounded-full font-medium">
                      자세히 보기
                    </button>
                  </div>
                </div>

                {/* 작품 정보 */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {item.style}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-bold text-primary">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 더 많은 작품 로드 버튼 */}
          <div className="text-center mt-12">
            <button className="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              더 많은 작품 보기
            </button>
          </div>
        </div>
      </section>

      {/* 인스타그램 연동 섹션 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            인스타그램에서 더 많은 작품을 만나보세요
          </h2>
          <p className="text-gray-600 mb-8">
            실시간으로 업데이트되는 네일 아트 작품들과 고객 후기를 확인하세요
          </p>
          <a
            href="https://instagram.com/nailart_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @nailart_studio 팔로우하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;