import { Collapsible } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Link, type LinkOptions } from "@tanstack/react-router"

function NavMain({
  items,
}: {
  items: {
    title: string
    url: LinkOptions
    icon: string
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className="gap-2.5">
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link
                  to={item.url.to}
                  className="h-12"
                  activeProps={{ className: "bg-[#25388C] text-primary-foreground" }}
                >
                  <img src={item.icon} alt="Icon" width={20} height={20} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export { NavMain }
