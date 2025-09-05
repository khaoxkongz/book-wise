import { Card } from "@/components/ui/card"
import { createFileRoute } from "@tanstack/react-router"
import { DataTable } from "@/modules/user-management/components/data-table"
import { columns } from "@/modules/user-management/components/columns"
import { z } from "zod/v4"

const schema = z.object({
  fullName: z.string(),
  email: z.string(),
  joinedAt: z.date(),
  role: z.enum(["admin", "user"]).default("user"),
  bookBorrowed: z.number(),
  universityId: z.string(),
})

const searchSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
})

export const Route = createFileRoute("/_dashboard/user")({
  loader: () => ({
    users: [
      {
        fullName: "Darrell Steward",
        email: "darrelsteward@gmail.com",
        joinedAt: new Date("Dec 19 2023"),
        role: "user",
        bookBorrowed: 10,
        universityId: "90324423789",
      },
      {
        fullName: "Marc Atenson",
        email: "marcinee@mial.com",
        joinedAt: new Date("Dec 19 2023"),
        role: "admin",
        bookBorrowed: 32,
        universityId: "90324423789",
      },
      {
        fullName: "Susan Drake",
        email: "contact@susandrake.io",
        joinedAt: new Date("Dec 19 2023"),
        role: "user",
        bookBorrowed: 13,
        universityId: "90324423789",
      },
      {
        fullName: "Darrell Steward",
        email: "darrelsteward@gmail.com",
        joinedAt: new Date("Dec 19 2023"),
        role: "admin",
        bookBorrowed: 10,
        universityId: "90324423789",
      },
      {
        fullName: "Marc Atenson",
        email: "marcinee@mial.com",
        joinedAt: new Date("Dec 19 2023"),
        role: "user",
        bookBorrowed: 32,
        universityId: "90324423789",
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
