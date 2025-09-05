import { createFileRoute } from "@tanstack/react-router"
import { Card } from "@/components/ui/card"
import { z } from "zod/v4"
import { DataTable } from "@/modules/account-requests/components/data-table"
import { columns } from "@/modules/account-requests/components/columns"

const schema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  joinedAt: z.date(),
  universityId: z.string(),
})

const searchSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
})

export const Route = createFileRoute("/_dashboard/account-requests")({
  loader: () => ({
    users: [
      {
        id: "URQ-00001",
        fullName: "Darrell Steward",
        email: "steward@gmail.com",
        joinedAt: new Date("Dec 19, 2023"),
        universityId: "90324423789",
      },
      {
        id: "URQ-00002",
        fullName: "Marc Atenson",
        email: "marcinee@mial.com",
        joinedAt: new Date("Dec 19, 2023"),
        universityId: "45641243423",
      },
      {
        id: "URQ-00003",
        fullName: "Susan Drake",
        email: "contact@susandrake.io",
        joinedAt: new Date("Dec 19, 2023"),
        universityId: "78318342289",
      },
    ] satisfies z.infer<typeof schema>[],
  }),
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { users } = Route.useLoaderData()
  const { page, limit } = Route.useSearch()

  const total = users.length
  const safeLimit = Math.max(1, limit) // ป้องกัน division by zero
  const totalPages = total === 0 ? 1 : Math.ceil(total / safeLimit)

  // ถ้าต้องการบังคับ page ให้ไม่เกินขอบเขต
  const currentPage = Math.min(Math.max(1, page), totalPages)

  const start = (currentPage - 1) * safeLimit
  const pagedUsers = users.slice(start, start + safeLimit)

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
          data={pagedUsers}
        />
      </Card>
    </div>
  )
}
