'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function IndustriesPage() {
  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-content').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-noto bg-white text-gray-700">
      {/* Main Content */}
      <main>
        {/* Page Header */}
        <section className="bg-subtle-bg py-12">
          <div className="container mx-auto px-6 text-center section-content">
            <h1 className="text-4xl font-bold text-primary">產業應用</h1>
            <p className="text-lg text-gray-600 mt-2">Industry Applications</p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 section-content">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                詠楙的彈性體解決方案，專為滿足各個高要求產業的嚴苛標準而設計。從半導體的潔淨室到航太的極端環境，我們的產品都能提供卓越的性能與可靠性。
              </p>
            </div>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-16 md:py-20 bg-subtle-bg">
          <div className="container mx-auto px-6 section-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Card 1: Semiconductor */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/FDBA74/1F2937?text=Semiconductor" 
                  alt="半導體製造業" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">半導體製造業</h3>
                  <p className="text-gray-600 mb-4 flex-grow">提供耐高溫、高潔淨度的密封件，確保製程環境的穩定與純淨。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Machinery */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/1F2937/FFFFFF?text=Machinery" 
                  alt="機械製造業" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">機械製造業</h3>
                  <p className="text-gray-600 mb-4 flex-grow">耐磨損、耐油的密封解決方案，提升設備運轉效率與壽命。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Food */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/FDBA74/1F2937?text=Food+Grade" 
                  alt="食品製造業" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">食品製造業</h3>
                  <p className="text-gray-600 mb-4 flex-grow">符合FDA標準的無毒矽膠材料，確保食品生產過程的安全衛生。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Sports */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/1F2937/FFFFFF?text=Sports" 
                  alt="運動器材" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">運動器材</h3>
                  <p className="text-gray-600 mb-4 flex-grow">高回彈、耐疲勞的橡膠零件，提升運動器材的性能與耐用度。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 5: Aerospace */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/FDBA74/1F2937?text=Aerospace" 
                  alt="航太配件" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">航太配件</h3>
                  <p className="text-gray-600 mb-4 flex-grow">能承受極端溫差與化學腐蝕的材料，滿足最嚴苛的航太應用標準。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 6: Music */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/1F2937/FFFFFF?text=Music" 
                  alt="樂器配件" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">樂器配件</h3>
                  <p className="text-gray-600 mb-4 flex-grow">提供絕佳減震與手感的精密零件，提升樂器演奏的品質。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center section-content">
            <h2 className="text-3xl font-bold text-primary mb-4">準備好開始您的專案了嗎？</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">立即聯絡我們的技術團隊，取得專業諮詢與解決方案。</p>
            <Link href="/contact" className="bg-accent text-white font-bold py-3 px-8 rounded-lg btn-press">立即諮詢</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/logo/YM-logo-M-noBG-WhiteWords.png" 
                alt="詠楙企業 Logo" 
                width={120}
                height={48}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">提供最高品質的客製化彈性體解決方案，是您最信賴的合作夥伴。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">網站導覽</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white">關於我們</Link></li>
                <li><Link href="/industries" className="text-gray-400 hover:text-white">產業應用</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white">產品類別</Link></li>
                <li><Link href="/elastomer-intro" className="text-gray-400 hover:text-white">彈性體介紹</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>242新北市新莊區福營路227巷8號</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(02) 2908-8686</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>service@yongmao.com.tw</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">保持聯繫</h4>
              <p className="text-gray-400 text-sm mb-2">訂閱以獲取最新的技術文章與資訊。</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="您的電子郵件" 
                  className="bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none w-full"
                />
                <button className="bg-accent text-white px-4 rounded-r-md btn-press">訂閱</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>&copy; 2024 詠楙企業股份有限公司. All Rights Reserved. | <Link href="/privacy" className="hover:underline">隱私權政策</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
