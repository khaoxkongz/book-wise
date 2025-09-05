import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import type { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { z } from "zod/v4"
import { DataTableRowActions } from "./data-table-row-actions"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { BookCover } from "@/components/book-cover"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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

export const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "book",
    header: () => <p className="font-normal text-[#3A354E]">Book</p>,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <BookCover size="xs" coverColor={row.original.coverColor} coverUrl={row.original.coverUrl} />
        <div className="w-full max-w-[155px] truncate font-semibold">{row.original.title}</div>
      </div>
    ),
  },
  {
    accessorKey: "user",
    header: ({ column }) => <DataTableColumnHeader column={column} title="User Requested" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <Avatar className="size-10">
          <AvatarImage />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-px text-sm">
          <div className="font-semibold">{row.original.userRequest.fullName}</div>
          <div className="text-xs text-[#64748B]">{row.original.userRequest.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <p className="font-normal text-[#3A354E]">Status</p>,
    cell: ({ row }) => (
      <Badge
        className={cn("bg-[#F9F5FF] text-[#6941C6]", {
          "bg-destructive/5 text-destructive-foreground": row.original.status === "Late Return",
          "bg-[#F0F9FF] text-[#026AA2]": row.original.status === "Returned",
        })}
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "borrowedDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Borrowed date" />,
    cell: ({ row }) => (
      <p className="truncate text-muted-foreground">{format(row.original.borrowedDate, "MMM dd, yyyy")}</p>
    ),
  },
  {
    accessorKey: "returnedDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Return date" />,
    cell: ({ row }) => (
      <p className="truncate text-muted-foreground">{format(row.original.returnedDate, "MMM dd, yyyy")}</p>
    ),
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Due Date" />,
    cell: ({ row }) => <p className="truncate text-muted-foreground">{format(row.original.dueDate, "MMM dd, yyyy")}</p>,
  },
  {
    accessorKey: "receipt",
    header: () => <p className="font-normal text-[#3A354E]">Receipt</p>,
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            disabled={row.original.status !== "Borrowed"}
            className="bg-[#F8F8FF] text-[#25388C] hover:bg-[#25388C]/90 hover:text-[#F8F8FF]"
          >
            <img src="/icons/admin/receipt.svg" alt="Receipt Icon" width={16} height={16} />
            <span>Generate</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="gap-6 border-none bg-[#111624] text-primary-foreground">
          <div className="flex items-center gap-1.5 border-b border-[#232839] pb-4">
            <img src="/icons/logo.svg" alt="Book Wise Logo" width={40} height={32} />
            <span className="text-3xl font-semibold">BookWise</span>
          </div>

          <DialogHeader>
            <DialogTitle>
              Your Receipt for <span className="font-semibold text-[#EED1AC]">[{row.original.title}]</span> is Ready!
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-6 text-[#D6E0FF]">
            <div>
              Hi <span className="font-semibold text-[#EED1AC]">[{row.original.userRequest.fullName}]</span>,
            </div>

            <div className="flex flex-col gap-px">
              <div>Your receipt for borrowing [{row.original.title}] has been generated. Here are the details:</div>
              <ul className="list-disc px-8">
                <li>
                  Borrowed On:{" "}
                  <span className="font-semibold text-[#EED1AC]">
                    [{format(row.original.borrowedDate, "MMM dd, yyyy")}]
                  </span>
                </li>
                <li>
                  Due Date:{" "}
                  <span className="font-semibold text-[#EED1AC]">[{format(row.original.dueDate, "MMM dd, yyyy")}]</span>
                </li>
              </ul>
            </div>

            <div className="">You can download the receipt here:</div>

            <Button className="h-12 bg-[#EED1AC] text-[#111624]">Download Receipt</Button>

            <div className="flex flex-col gap-px">
              <div>Keep the pages turning,</div>
              <div>The BookWise Team</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    id: "actions",
    header: () => <p className="font-normal text-[#3A354E]">Actions</p>,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
