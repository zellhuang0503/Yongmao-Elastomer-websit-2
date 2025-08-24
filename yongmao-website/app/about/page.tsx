'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/ui/Footer';
import { Beaker, ShieldCheck, Users } from 'lucide-react';

export default function AboutPage() {
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
            <h1 className="text-4xl font-bold text-primary">關於我們</h1>
            <p className="text-lg text-gray-600 mt-2">About Us</p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 section-content">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-primary mb-4">我們的使命</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  詠楙企業致力於透過不斷的技術創新與對品質的堅持，為全球客戶提供最可靠的彈性體解決方案。我們的使命是成為您在關鍵應用領域中，不可或缺的合作夥伴。
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image 
                  src="https://placehold.co/600x400/FDBA74/1F2937?text=Factory" 
                  alt="公司/工廠圖片" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 bg-subtle-bg">
          <div className="container mx-auto px-6 section-content">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">發展歷程</h2>
              <p className="text-md text-gray-600 mt-2">見證我們的成長與承諾</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-semibold text-primary">2005年 - 公司成立</h3>
                  <p className="text-gray-600 mt-1">詠楙企業於台灣成立，專注於基礎橡膠製品的生產。</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-semibold text-primary">2012年 - 導入ISO 9001認證</h3>
                  <p className="text-gray-600 mt-1">全面提升品質管理系統，確保產品與服務的一致性與可靠性。</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-semibold text-primary">2018年 - 擴建研發中心</h3>
                  <p className="text-gray-600 mt-1">投入大量資源於材料科學研究，開始提供高階客製化解決方案。</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-semibold text-primary">2025年 - 成為業界領導者</h3>
                  <p className="text-gray-600 mt-1">在半導體與航太領域取得關鍵突破，成為亞洲領先的彈性體供應商。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 section-content">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">我們的專業團隊</h2>
              <p className="text-md text-gray-600 mt-2">以系統化的專業分工，為您的專案護航</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <Beaker className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">核心研發團隊</h3>
                <p className="text-gray-600">持續投入材料科學研究，不斷創新，以應對最前沿的技術挑戰。</p>
              </div>
              <div className="p-6">
                <ShieldCheck className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">嚴格品保團隊</h3>
                <p className="text-gray-600">從原料到成品，透過精密儀器與標準化流程，確保每一件產品的最高品質。</p>
              </div>
              <div className="p-6">
                <Users className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">客戶技術支援</h3>
                <p className="text-gray-600">由資深工程師組成，提供專業諮詢，協助客戶解決應用上的任何問題。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-subtle-bg">
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