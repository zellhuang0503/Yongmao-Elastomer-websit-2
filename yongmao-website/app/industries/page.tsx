'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/ui/Footer';
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

      <Footer />
    </div>
  );
}
