'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: '首頁' },
    { href: '/about', label: '關於詠楙' },
    { href: '/industries', label: '產業應用' },
    { href: '/products', label: '產品類別' },
    { href: '/elastomer-intro', label: '彈性體介紹' },
  ]

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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-gray-600 hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
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