import { createFileRoute } from "@tanstack/react-router"
import { Card } from "@/components/ui/card"
import { DataTable } from "@/modules/book-management/components/data-table"
import { z } from "zod/v4"
import { columns } from "@/modules/book-management/components/columns"
import { books } from "@/books"

const searchSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
})

export const Route = createFileRoute("/_dashboard/books-management/")({
  loader: () => ({ books }),
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { books } = Route.useLoaderData()
  const { page, limit } = Route.useSearch()

  const total = books.length
  const safeLimit = Math.max(1, limit) // ป้องกัน division by zero
  const totalPages = total === 0 ? 1 : Math.ceil(total / safeLimit)

  // บังคับ page ให้ไม่เกินขอบเขต
  const currentPage = Math.min(Math.max(1, page), totalPages)

  const start = (currentPage - 1) * safeLimit
  const pagedBooks = books.slice(start, start + safeLimit)

  return (
    <div className="p-4">
      <Card>
        <DataTable
          columns={columns}
          pagination={{
            page: currentPage,
            limit: safeLimit,
            total,
            totalPages,
          }}
          data={pagedBooks}
        />
      </Card>
    </div>
  )
}
