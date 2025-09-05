import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router"
import { SearchIcon } from "lucide-react"
import { z } from "zod/v4"

const searchSchema = z.object({
  q: z.string().nullable().optional(),
})

export const Route = createFileRoute("/_dashboard")({
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { q } = Route.useSearch()
  const navigate = useNavigate()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden border border-[#EDF1F1] bg-[#F8F8FF]">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col gap-1">
            <div className="text-xl font-semibold">Welcome, Adrian</div>
            <div className="text-muted-foreground">Monitor all of your projects and tasks here</div>
          </div>

          <div className="relative inline-flex w-full max-w-[450px] shrink-0 items-center justify-center">
            <SearchIcon className="pointer-events-none absolute start-4 shrink-0 translate-y-0 stroke-1 text-muted-foreground" />

            <Input
              value={q || ""}
              onChange={(e) => navigate({ to: "/books", search: { q: e.target.value } })}
              placeholder="Search users, books by title, author, or genre."
              className="h-12 w-full bg-background pl-12"
            />
          </div>
        </div>

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
