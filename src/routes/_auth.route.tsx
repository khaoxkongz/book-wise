import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col bg-[url(/images/pattern.webp)] bg-cover bg-top-left bg-no-repeat p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-md flex-col gap-4 rounded-lg p-10 gradient-vertical">
            <div className="flex justify-center gap-2 md:justify-start">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <img src="/icons/logo.svg" alt="Book Wise Logo" width={32} height={32} className="size-8" />
                <span className="text-3xl">Book Wise</span>
              </Link>
            </div>

            <Outlet />
          </div>
        </div>
      </div>

      <div className="relative hidden bg-muted lg:block">
        <img src="/images/auth-illustration.png" alt="Image" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
  )
}
