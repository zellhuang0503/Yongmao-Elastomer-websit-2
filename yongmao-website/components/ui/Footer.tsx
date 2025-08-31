'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-primary text-white ${className}`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info & Contact */}
          <div>
            <Image 
              src="/logo/YM-elastomer-LOGO-white-words-1-1.svg" 
              alt="詠楙企業 Logo" 
              width={96}
              height={38}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-6">
              提供最高品質的客製化彈性體解決方案，是您最信賴的合作夥伴。
            </p>
            <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="font-medium text-white mr-2">公司名稱:</span>
                <span>詠楙企業有限公司</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-white mr-2">英文名稱:</span>
                <span>YONG MAO RUBBER CO., LTD.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-white mr-2">統一編號:</span>
                <span>27446363</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>04-26391847</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>臺中市龍井區龍西里龍門路120號1樓</span>
                  <span className="text-xs mt-1">1 F., No. 120, Longmen Rd., Longxi Vil., Longjing Dist., Taichung City 43450, Taiwan (R.O.C.)</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>service@yongmao.com.tw</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">網站導覽</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  關於詠楙
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  機械製造業
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  運動器材
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  食品製造業
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  半導體製造業
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  航太配件
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  樂器配件
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  O型環/墊圈
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  矽膠封條
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  橡膠墊片
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  矽膠片
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  客製化矽橡膠
                </Link>
              </li>
              <li>
                <Link href="/elastomer-intro" className="text-gray-400 hover:text-white transition-colors">
                  彈性體介紹
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">保持聯繫</h4>
            <p className="text-gray-400 text-sm mb-4">
              訂閱以獲取最新的技術文章與資訊。
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="您的電子郵件" 
                className="bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none w-full"
              />
              <Button variant="accent" size="sm" className="rounded-l-none">
                訂閱
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>
            &copy; 2024 詠楙企業股份有限公司. All Rights Reserved. | 
            <Link href="/privacy" className="hover:underline ml-1">
              隱私權政策
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };