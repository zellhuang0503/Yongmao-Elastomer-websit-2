'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-base font-medium transition-colors ${
        isActive ? 'text-accent' : 'text-gray-600 hover:text-accent'
      }`}
    >
      {children}
    </Link>
  )
}