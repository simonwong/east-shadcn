'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@easy-shadcn/utils"

interface MainNavProps { }

const MainNav: React.FC<MainNavProps> = () => {
  const pathname = usePathname()

  return (
    <div className="container">
      <div className="flex py-4">
        <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
          <span className="font-bold lg:inline-block">
            Easy shadcn/ui
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/docs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Docs
          </Link>
          <Link
            href="/docs/components"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs/components") &&
                !pathname?.startsWith("/docs/component/chart")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Components
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default MainNav
