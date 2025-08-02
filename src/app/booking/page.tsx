'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const services = [
    { id: 'gel', name: '기본 젤 네일', price: '40,000원', duration: '60분' },
    { id: 'french', name: '프렌치 네일', price: '45,000원', duration: '70분' },
    { id: 'gradient', name: '그라데이션 네일', price: '50,000원', duration: '80분' },
    { id: 'art', name: '디자인 아트', price: '60,000원', duration: '90분' },
    { id: 'bridal', name: '신부 패키지', price: '150,000원', duration: '180분' },
  ];

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 서버로 데이터를 전송하는 로직이 들어갑니다
    alert('예약이 완료되었습니다! 곧 확인 연락을 드리겠습니다.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      {/* 헤더 섹션 */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                온라인 예약
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              간편하고 빠른 온라인 예약으로<br />
              <span className="text-primary font-semibold">당신만의 특별한 네일 아트를 시작하세요</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 예약 폼 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 서비스 선택 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  01. 서비스 선택
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <motion.label
                    key={service.id}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={selectedService === service.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                      <p className="text-primary font-bold">{service.price}</p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* 날짜 및 시간 선택 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  02. 날짜 & 시간 선택
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    예약 날짜
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    예약 시간
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">시간을 선택하세요</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 고객 정보 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  03. 고객 정보
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="성함을 입력해주세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="010-0000-0000"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    특별 요청사항
                  </label>
                  <textarea
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="원하시는 디자인이나 색상, 알레르기 등 특별한 요청사항이 있으시면 알려주세요"
                  />
                </div>
              </div>
            </div>

            {/* 예약 완료 버튼 */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:to-primary text-white py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💅 예약 완료하기
            </motion.button>
          </motion.form>

          {/* 예약 안내사항 */}
          <motion.div
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">📋 예약 안내사항</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                예약 확정은 담당자 확인 후 개별 연락드립니다.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                예약 변경/취소는 최소 24시간 전에 연락주세요.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                시술 시간은 선택하신 서비스에 따라 달라질 수 있습니다.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                문의사항이 있으시면 언제든 연락주세요: 02-1234-5678
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;