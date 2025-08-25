'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ChevronDown, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { industryItems, productItems } from '@/lib/constants'
import NavLink from './NavLink'
import NavDropdown from './NavDropdown'

export default function Navigation() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname])

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo/YM-elastomer-LOGO-white-words-1.svg"
              alt="詠楙企業 Logo"
              width={84}
              height={34}
              className="h-[34px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">首頁</NavLink>
            <NavLink href="/about">關於詠楙</NavLink>

            <NavDropdown
              title="產業應用"
              href="/industries"
              items={industryItems}
              isOpen={activeDropdown === 'industries'}
              onMouseEnter={() => handleDropdownEnter('industries')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => handleDropdownClick('industries')}
              pathname={pathname}
            />

            <NavDropdown
              title="產品類別"
              href="/products"
              items={productItems}
              isOpen={activeDropdown === 'products'}
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
              onClick={() => handleDropdownClick('products')}
              pathname={pathname}
            />

            <NavLink href="/elastomer-intro">彈性體介紹</NavLink>

            <Link
              href="/contact"
              className="bg-accent text-white font-bold py-2 px-5 rounded-md btn-press"
            >
              聯絡我們
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="開啟選單">
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <Image
                src="/logo/YM-elastomer-LOGO-white-words-1.svg"
                alt="詠楙企業 Logo"
                width={84}
                height={34}
                className="h-[34px] w-auto"
              />
            </Link>
            <button onClick={toggleMobileMenu} aria-label="關閉選單">
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-lg" onClick={toggleMobileMenu}>
            <NavLink href="/">首頁</NavLink>
            <NavLink href="/about">關於詠楙</NavLink>
            <div className="flex flex-col space-y-2">
              <NavLink href="/industries">產業應用</NavLink>
              <div className="flex flex-col pl-4 space-y-2 text-base">
                {industryItems.map(item => (
                  <Link key={item.href} href={item.href} className="text-gray-600 hover:text-accent py-1">{item.label}</Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <NavLink href="/products">產品類別</NavLink>
              <div className="flex flex-col pl-4 space-y-2 text-base">
                {productItems.map(item => (
                  <Link key={item.href} href={item.href} className="text-gray-600 hover:text-accent py-1">{item.label}</Link>
                ))}
              </div>
            </div>
            <NavLink href="/elastomer-intro">彈性體介紹</NavLink>
            <Link
              href="/contact"
              className="bg-accent text-white font-bold py-3 px-6 rounded-md btn-press text-center mt-4"
            >
              聯絡我們
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}