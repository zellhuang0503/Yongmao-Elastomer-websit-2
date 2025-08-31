'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cpu, Settings2, ShieldCheck, Factory, Car, Plane, Rocket, Dumbbell, Cookie, ArrowRight } from 'lucide-react';
import { Footer } from '@/components/ui/Footer';

export default function VersionB() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseY, setMouseY] = useState(0);

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

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => setMouseY(e.clientY - window.innerHeight / 2);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="font-noto bg-white text-gray-700 min-h-screen">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full text-center" style={{height: '100vh', overflow: 'hidden'}}>
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
              style={{backgroundImage: `url('/b/hero-image.jpg')`}}
            />
            <div className="absolute inset-0 bg-black opacity-15"></div>
          </div>
          <div className="desktop-content px-6 section-content relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>精準工藝，定義未來彈性體標準</h1>
            
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">詠楙企業：您最值得信賴的高性能彈性體解決方案合作夥伴。</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/products" className="bg-accent text-white font-bold py-4 px-8 rounded-lg btn-press hover:bg-accent/90 transition-colors">探索解決方案</Link>
              <Link href="/contact" className="bg-white text-primary font-bold py-4 px-8 rounded-lg btn-press hover:bg-gray-100 transition-colors">聯絡我們</Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 bg-subtle-bg">
          <div className="desktop-content px-6 section-content">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">我們的核心優勢</h2>
              <p className="text-md text-gray-600 mt-2">以頂尖技術與嚴格品管，為您提供卓越產品</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <Cpu className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">技術專業</h3>
                <p className="text-gray-600">擁有深厚的材料科學知識與應用經驗，解決您最嚴苛的技術挑戰。</p>
              </div>
              <div className="p-6">
                <Settings2 className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">客製化能力</h3>
                <p className="text-gray-600">從材料配方到產品成型，我們提供全方位的客製化服務。</p>
              </div>
              <div className="p-6">
                <ShieldCheck className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">品質保證</h3>
                <p className="text-gray-600">遵循國際標準，以精密的檢測儀器確保每一件產品的卓越品質。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url('/b/industry-image.jpg')`,
                backgroundAttachment: 'fixed'
              }}
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="desktop-content px-6 section-content relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>產業應用</h2>
              <p className="text-md text-white mt-2" style={{textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'}}>我們的產品廣泛應用於各種高要求的工業領域</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              <div className="p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg lift-and-shadow cursor-pointer">
                <Factory className="w-10 h-10 mx-auto text-white mb-3" />
                <h4 className="font-semibold text-white">機械製造</h4>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg lift-and-shadow cursor-pointer">
                <Dumbbell className="w-10 h-10 mx-auto text-white mb-3" />
                <h4 className="font-semibold text-white">運動器材</h4>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg lift-and-shadow cursor-pointer">
                <Cookie className="w-10 h-10 mx-auto text-white mb-3" />
                <h4 className="font-semibold text-white">食品製造</h4>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg lift-and-shadow cursor-pointer">
                <Cpu className="w-10 h-10 mx-auto text-white mb-3" />
                <h4 className="font-semibold text-white">半導體</h4>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg lift-and-shadow cursor-pointer">
                <Rocket className="w-10 h-10 mx-auto text-white mb-3" />
                <h4 className="font-semibold text-white">航太配件</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-16 bg-subtle-bg">
          <div className="desktop-content px-6 section-content">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">產品類別</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow cursor-pointer">
                <Image 
                  src="/products/Whisk_27d5868c1d.jpg" 
                  alt="O型環/墊圈" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">O型環/墊圈</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow cursor-pointer">
                <Image 
                  src="/products/Whisk_a8834f33e9.jpg" 
                  alt="矽膠封條" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">矽膠封條</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden lift-and-shadow cursor-pointer">
                <Image 
                  src="/products/Whisk_8873645b70.jpg" 
                  alt="橡膠墊片" 
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">橡膠墊片</h3>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/products" className="text-accent font-bold hover:underline arrow-nudge inline-flex items-center">
                查看所有產品 <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
              </Link>
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
