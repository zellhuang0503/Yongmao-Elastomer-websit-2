'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 ${className}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image 
              src="/logo/YM-logo-M-noBG-BlackWords.png" 
              alt="詠楙企業 Logo" 
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-base font-medium text-gray-600 hover:text-accent transition-colors"
            >
              關於詠楙
            </Link>
            <Link 
              href="/industries" 
              className="text-base font-medium text-gray-600 hover:text-accent transition-colors"
            >
              產業應用
            </Link>
            <Link 
              href="/products" 
              className="text-base font-medium text-gray-600 hover:text-accent transition-colors"
            >
              產品類別
            </Link>
            <Link 
              href="/elastomer-intro" 
              className="text-base font-medium text-gray-600 hover:text-accent transition-colors"
            >
              彈性體介紹
            </Link>
            <Button variant="accent" size="sm">
              <Link href="/contact">聯絡我們</Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };