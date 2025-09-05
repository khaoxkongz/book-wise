import { cn } from "@/lib/utils"
import * as React from "react"

function Container({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("container-wrapper", className)} {...props}>
      {children}
    </div>
  )
}

function ContainerWrapper({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  )
}

export { Container, ContainerWrapper }
