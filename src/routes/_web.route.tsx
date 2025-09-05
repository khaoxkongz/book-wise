import { Container, ContainerWrapper } from "@/components/container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_web")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative z-10 flex min-h-svh flex-col bg-[url(/images/pattern.webp)] bg-cover bg-top-left bg-no-repeat">
      <header className="py-16">
        <ContainerWrapper>
          <Container className="flex items-center justify-between">
            <Link to="/" className="inline-flex shrink-0 items-center gap-1.5">
              <img src="/icons/logo.svg" alt="BookWise Logo" width={32} height={32} />
              <span className="text-3xl font-semibold">BookWise</span>
            </Link>

            <div className="flex items-center gap-8 text-xl">
              <nav>
                <ul className="flex items-center gap-8">
                  <li>
                    <Link
                      to="/"
                      activeProps={{ className: "text-[#EED1AC]" }}
                      className="text-[#D6E0FF] transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      activeProps={{ className: "text-[#EED1AC]" }}
                      className="text-[#D6E0FF] transition-colors duration-200"
                    >
                      Search
                    </Link>
                  </li>
                </ul>
              </nav>

              <Link to="/profile" className="flex items-center gap-1.5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span className="font-semibold text-[#D6E0FF]">Adrian</span>
              </Link>

              <Button size="icon" variant="ghost">
                <img src="/icons/logout.svg" alt="" width={32} height={32} className="size-8" />
              </Button>
            </div>
          </Container>
        </ContainerWrapper>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  )
}
