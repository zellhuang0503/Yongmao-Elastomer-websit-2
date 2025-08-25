import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

type DropdownItem = {
  href: string
  label: string
}

type NavDropdownProps = {
  title: string
  href: string // For the main link and active state check
  items: DropdownItem[]
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
  pathname: string
}

export default function NavDropdown({
  title,
  href,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClick,
  pathname,
}: NavDropdownProps) {
  const isParentActive = pathname.startsWith(href)

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onClick}
        className={`text-base font-medium transition-colors flex items-center ${
          isParentActive ? 'text-accent' : 'text-gray-600 hover:text-accent'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          onClick={onMouseLeave} // Close menu when an item is clicked
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}