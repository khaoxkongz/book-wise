import { Checkbox } from "@/components/ui/checkbox"
import type { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { z } from "zod/v4"
import { DataTableRowActions } from "./data-table-row-actions"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { BookCover } from "@/components/book-cover"

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
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Book Title" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <BookCover size="xs" coverColor={row.original.coverColor} coverUrl={row.original.coverUrl} />
        <div className="w-full max-w-[155px] truncate font-semibold">{row.original.title}</div>
      </div>
    ),
  },
  {
    accessorKey: "author",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Author" />,
    cell: ({ row }) => <p className="w-full max-w-[150px] truncate text-muted-foreground">{row.original.author}</p>,
  },
  {
    accessorKey: "genre",
    header: ({ column }) => <DataTableColumnHeader column={column} title="genre" />,
    cell: ({ row }) => <p className="truncate text-muted-foreground">{row.original.genre}</p>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date Created" />,
    cell: ({}) => <p className="truncate text-muted-foreground">{format("Dec 19, 2023", "MMM dd, yyyy")}</p>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
