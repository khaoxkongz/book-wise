import { Button, buttonVariants } from "@/components/ui/button"
import type { Row } from "@tanstack/react-table"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"
import { z } from "zod/v4"

const schema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  rating: z.number(),
  coverUrl: z.string(),
  coverColor: z.string(),
  description: z.string(),
  totalCopies: z.number(),
  availableCopies: z.number(),
  videoUrl: z.string(),
  summary: z.string(),
})

interface DataTableRowActionsProps {
  row: Row<z.infer<typeof schema>>
}

function DataTableRowActions({ row }: DataTableRowActionsProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Link
        to="/books-management/$id"
        params={{ id: row.original.id }}
        className={cn(buttonVariants({ size: "icon", variant: "ghost" }), "rounded-full")}
      >
        <img src="/icons/admin/edit.svg" alt="Edit Icon" width={16} height={16} />
      </Link>

      <Button size="icon" variant="ghost" className="rounded-full">
        <img src="/icons/admin/trash.svg" alt="Edit Icon" width={16} height={16} />
      </Button>
    </div>
  )
}

export { DataTableRowActions }
