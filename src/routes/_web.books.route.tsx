import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_web/books")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
