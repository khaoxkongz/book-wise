import { Button, buttonVariants } from "@/components/ui/button"
import type { Table } from "@tanstack/react-table"
import { X, PlusIcon } from "lucide-react"
import { DataTableViewOptions } from "@/components/data-table-view-options"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between px-4 lg:px-6">
      <div className="flex flex-1 items-center gap-2">
        <div className="text-xl font-semibold">All Books</div>

        <div className="hidden items-center gap-2 md:flex">
          {/* {table.getColumn("meetingChannel") && (
            <DataTableFacetedFilter
              column={table.getColumn("meetingChannel")}
              title="Meeting Channel"
              options={meetingChannelOptions}
            />
          )} */}
          {isFiltered && (
            <Button variant="ghost" size="sm" onClick={() => table.resetColumnFilters()}>
              Reset
              <X />
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <DataTableViewOptions table={table} />
        <Link to="/books-management/create" className={cn(buttonVariants(), "h-8 bg-[#25388C]")}>
          <PlusIcon />
          <span>Create a New Book</span>
        </Link>
      </div>
    </div>
  )
}
