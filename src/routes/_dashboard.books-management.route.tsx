import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_dashboard/books-management")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  )
}
