import { Button } from "@/components/ui/button"
import type { Table } from "@tanstack/react-table"
import { X } from "lucide-react"
import { DataTableViewOptions } from "@/components/data-table-view-options"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between px-4 lg:px-6">
      <div className="flex flex-1 items-center gap-2">
        <div className="text-xl font-semibold">Borrow Book Requests</div>

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

      <DataTableViewOptions table={table} />
    </div>
  )
}

export { DataTableToolbar }
