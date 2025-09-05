import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, type LinkOptions } from "@tanstack/react-router"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: {
        to: "/dashboard",
      },
      icon: "/icons/admin/home.svg",
    },
    {
      title: "All Users",
      url: {
        to: "/user",
      },
      icon: "/icons/admin/users.svg",
    },
    {
      title: "All Books",
      url: {
        to: "/books-management",
      },
      icon: "/icons/admin/book.svg",
    },
    {
      title: "Borrow Requests",
      url: {
        to: "/borrow-requests",
      },
      icon: "/icons/admin/bookmark.svg",
    },
    {
      title: "Account Requests",
      url: {
        to: "/account-requests",
      },
      icon: "/icons/admin/user.svg",
    },
  ] as {
    title: string
    url: LinkOptions
    icon: string
  }[],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" className="bg-background" {...props}>
      <SidebarHeader className="border-b-2 border-dashed bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-[#25388C] text-[#25388C]">
                  <img src="/icons/logo.svg" alt="Book Wise Logo" width={20} height={20} className="size-5" />
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-2xl font-semibold text-[#25388C]">BookWise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-background">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter className="bg-background">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
