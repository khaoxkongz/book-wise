import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod/v4"
import { Card } from "@/components/ui/card"
import { DataTable } from "@/modules/borrow-requests/components/data-table"
import { columns } from "@/modules/borrow-requests/components/columns"

const schema = z.object({
  id: z.string(),
  title: z.string(),
  coverColor: z.string(),
  coverUrl: z.string(),
  userRequest: z.object({
    fullName: z.string(),
    email: z.string(),
  }),
  status: z.enum(["Borrowed", "Returned", "Late Return"]).default("Borrowed"),
  borrowedDate: z.date(),
  returnedDate: z.date(),
  dueDate: z.date(),
})

const searchSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
})

export const Route = createFileRoute("/_dashboard/borrow-requests")({
  loader: () => ({
    borrowRequests: [
      {
        id: "BRQ-00001",
        title: "CSS in Depth",
        coverColor: "#1e2a4b",
        coverUrl: "https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png",
        userRequest: {
          fullName: "Darrell Steward",
          email: "steward@gmail.com",
        },
        status: "Borrowed",
        borrowedDate: new Date("Dec 19 2023"),
        returnedDate: new Date("Dec 29 2023"),
        dueDate: new Date("Dec 31 2023"),
      },
      {
        id: "BRQ-00002",
        title: "HTML and CSS: Design and Build Websites",
        coverColor: "#3a2931",
        coverUrl: "https://ik.imagekit.io/pwd17k26p/books/covers/file_1pCoBDI11.png",
        userRequest: {
          fullName: "Marc Atenson",
          email: "marcinee@mial.com",
        },
        status: "Late Return",
        borrowedDate: new Date("Dec 21 2024"),
        returnedDate: new Date("Jan 17 2024"),
        dueDate: new Date("Jan 12 2024"),
      },
      {
        id: "BRQ-00003",
        title: "System Design Interview",
        coverColor: "#363b63",
        coverUrl: "https://ik.imagekit.io/pwd17k26p/books/covers/file_CmVaNeXrQ.png",
        userRequest: {
          fullName: "Susan Drake",
          email: "contact@susandrake.io",
        },
        status: "Returned",
        borrowedDate: new Date("Dec 31 2023"),
        returnedDate: new Date("Jan 15 2023"),
        dueDate: new Date("Jan 25 2023"),
      },
      {
        id: "BRQ-00004",
        title: "CSS in Depth",
        coverColor: "#1e2a4b",
        coverUrl: "https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png",
        userRequest: {
          fullName: "David Smith",
          email: "davide@yahoo.com",
        },
        status: "Borrowed",
        borrowedDate: new Date("Dec 19 2023"),
        returnedDate: new Date("Dec 29 2023"),
        dueDate: new Date("Dec 31 2023"),
      },
    ] satisfies z.infer<typeof schema>[],
  }),
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { borrowRequests } = Route.useLoaderData()
  const { page, limit } = Route.useSearch()

  const total = borrowRequests.length
  const safeLimit = Math.max(1, limit) // ป้องกัน division by zero
  const totalPages = total === 0 ? 1 : Math.ceil(total / safeLimit)

  // ถ้าต้องการบังคับ page ให้ไม่เกินขอบเขต
  const currentPage = Math.min(Math.max(1, page), totalPages)

  const start = (currentPage - 1) * safeLimit
  const pagedBorrowRequests = borrowRequests.slice(start, start + safeLimit)

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
          data={pagedBorrowRequests}
        />
      </Card>
    </div>
  )
}
