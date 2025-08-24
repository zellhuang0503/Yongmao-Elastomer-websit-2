'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/ui/Footer';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
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
            <h1 className="text-4xl font-bold text-primary">產品類別</h1>
            <p className="text-lg text-gray-600 mt-2">Product Categories</p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 section-content">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                探索我們全面的高品質彈性體產品線。從標準的O型環到完全客製化的解決方案，我們有能力滿足您最多樣化的需求。
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-20 bg-subtle-bg">
          <div className="container mx-auto px-6 section-content">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Card 1: O-Ring */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/FDBA74/1F2937?text=O-Ring" 
                  alt="O型環/墊圈" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">O型環/墊圈</h3>
                  <p className="text-gray-600 mb-4 flex-grow">提供各種國際標準規格與客製化尺寸，適用於靜態與動態密封。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Silicone Seal */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/1F2937/FFFFFF?text=Silicone+Seal" 
                  alt="矽膠封條" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">矽膠封條</h3>
                  <p className="text-gray-600 mb-4 flex-grow">具備高度的密封性與優異的耐候、耐高溫特性。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Rubber Gasket */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/1F2937/FFFFFF?text=Rubber+Gasket" 
                  alt="橡膠墊片" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">橡膠墊片</h3>
                  <p className="text-gray-600 mb-4 flex-grow">優異的減震與密封性能，可依據不同壓力與環境需求客製。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Silicone Sheet */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow flex flex-col">
                <Image 
                  src="https://placehold.co/600x400/FDBA74/1F2937?text=Silicone+Sheet" 
                  alt="矽膠片" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">矽膠片</h3>
                  <p className="text-gray-600 mb-4 flex-grow">提供多種厚度、硬度與顏色選擇，適用於絕緣、緩衝等多種應用。</p>
                  <Link href="#" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center mt-auto self-start">
                    查看詳情 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Card: Customization */}
            <div className="mt-12 bg-primary rounded-lg shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-white mb-3">客製化矽橡膠</h3>
                  <p className="text-gray-300 mb-6">無論您的需求多麼特殊，我們的工程團隊都能從材料開發到成品製造，為您量身打造專屬的解決方案。我們樂於挑戰，將您的概念化為現實。</p>
                  <Link href="/contact" className="bg-accent text-white font-bold py-3 px-6 rounded-lg btn-press inline-flex items-center">
                    聯絡我們討論需求 <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="order-1 md:order-2 h-full">
                  <Image 
                    src="https://placehold.co/800x600/F97316/FFFFFF?text=Custom+Solution" 
                    alt="客製化解決方案" 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover min-h-[250px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}