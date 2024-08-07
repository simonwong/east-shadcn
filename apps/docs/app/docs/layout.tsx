import { DocsSidebarNav } from "@/components/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="w-full h-full">
        <div className="h-full py-6 pr-6 lg:py-8">
          <DocsSidebarNav
            config={[
              {
                title: 'Getting Started',
                items: [
                  {
                    title: 'Introduction',
                    href: "/docs",
                  },
                  {
                    title: 'Installation',
                    href: "/docs/guide/installation",
                  }
                ]
              }
            ]}
          />
        </div>
      </aside>
      {children}
    </div>
  )
}
