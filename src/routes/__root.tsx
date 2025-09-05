import { TanstackDevtools } from "@tanstack/react-devtools"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import { ThemeProvider } from "@/components/theme-provider"

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="group/body overscroll-none font-sans text-foreground antialiased">
          <Outlet />
        </div>
        {/* <Toaster richColors position="top-center" /> */}
      </ThemeProvider>
      <TanstackDevtools
        config={{ position: "bottom-left" }}
        plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
      />
    </>
  ),
})
