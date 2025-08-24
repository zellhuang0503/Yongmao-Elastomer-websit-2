'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const industryItems = [
    { href: '/industries#semiconductor', label: '半導體製造業' },
    { href: '/industries#machinery', label: '機械製造業' },
    { href: '/industries#food', label: '食品製造業' },
    { href: '/industries#sports', label: '運動器材' },
    { href: '/industries#aerospace', label: '航太配件' },
    { href: '/industries#music', label: '樂器配件' },
  ]

  const productItems = [
    { href: '/products#o-ring', label: 'O型環/墊圈' },
    { href: '/products#silicone-seal', label: '矽膠封條' },
    { href: '/products#rubber-gasket', label: '橡膠墊片' },
    { href: '/products#silicone-sheet', label: '矽膠片' },
    { href: '/products#custom', label: '客製化矽橡膠' },
  ]

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image 
              src="/logo/YM-logo-M-noBG-BlackWords.png" 
              alt="詠楙企業 Logo" 
              width={60}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${
                pathname === '/'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-accent'
              }`}
            >
              首頁
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium transition-colors ${
                pathname === '/about'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-accent'
              }`}
            >
              關於詠楙
            </Link>
            
            {/* 產業應用下拉選單 */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/industries"
                className={`text-base font-medium transition-colors flex items-center ${
                  pathname === '/industries'
                    ? 'text-accent'
                    : 'text-gray-600 hover:text-accent'
                }`}
              >
                產業應用
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {industryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 產品類別下拉選單 */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/products"
                className={`text-base font-medium transition-colors flex items-center ${
                  pathname === '/products'
                    ? 'text-accent'
                    : 'text-gray-600 hover:text-accent'
                }`}
              >
                產品類別
                <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/elastomer-intro"
              className={`text-base font-medium transition-colors ${
                pathname === '/elastomer-intro'
                  ? 'text-accent'
                  : 'text-gray-600 hover:text-accent'
              }`}
            >
              彈性體介紹
            </Link>
            
            <Link 
              href="/contact" 
              className="bg-accent text-white font-bold py-2 px-5 rounded-md btn-press"
            >
              聯絡我們
            </Link>
          </nav>
          <div className="md:hidden">
            <button><Menu className="w-6 h-6 text-primary" /></button>
          </div>
        </div>
      </div>
    </header>
  )
}