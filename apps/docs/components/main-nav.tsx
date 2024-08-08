'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@easy-shadcn/utils"

interface MainNavProps { }

const MainNav: React.FC<MainNavProps> = () => {
  const pathname = usePathname()

  const links = [
    {
      href: '/docs/guide',
      light: '/docs/guide',
      title: 'Docs'
    },
    {
      href: '/docs/components/button',
      light: '/docs/components',
      title: 'Components'
    },
  ]

  return (
    <div className="container">
      <div className="flex py-4">
        <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
          <span className="font-bold lg:inline-block">
            Easy shadcn/ui
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {
            links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname.includes(link.light) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.title}
              </Link>
            ))
          }
        </nav>
      </div>
    </div>
  )
}

export default MainNav
