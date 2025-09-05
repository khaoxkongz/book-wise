import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "@tanstack/react-router"
import type { Table } from "@tanstack/react-table"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

function DataTablePagination<TData>({ table, pagination }: DataTablePaginationProps<TData>) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4">
      <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex w-full items-center gap-8 lg:w-fit">
        <div className="hidden items-center gap-2 lg:flex">
          <Label htmlFor="rows-per-page" className="text-sm font-medium">
            Rows per page
          </Label>
          <Select
            value={`${pagination.limit}`}
            onValueChange={(value) => {
              navigate({
                replace: true,
                to: "/account-requests",
                search: (prev) => ({
                  ...prev,
                  limit: Number(value),
                  page: 1, // Reset to first page when changing page size
                }),
              })
            }}
          >
            <SelectTrigger size="sm" className="w-20" id="rows-per-page">
              <SelectValue placeholder={pagination.limit} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Page {pagination.page} of {table.getPageCount()}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              navigate({
                replace: true,
                to: "/account-requests",
                search: (prev) => ({
                  ...prev,
                  page: 1,
                }),
              })
            }}
            disabled={pagination.page <= 1}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeftIcon />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => {
              navigate({
                replace: true,
                to: "/account-requests",
                search: (prev) => ({
                  ...prev,
                  page: Math.max(1, pagination.page - 1),
                }),
              })
            }}
            disabled={pagination.page <= 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => {
              navigate({
                replace: true,
                to: "/account-requests",
                search: (prev) => ({
                  ...prev,
                  page: Math.min(pagination.totalPages, pagination.page + 1),
                }),
              })
            }}
            disabled={pagination.page >= pagination.totalPages}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            className="hidden size-8 lg:flex"
            size="icon"
            onClick={() => {
              navigate({
                replace: true,
                to: "/account-requests",
                search: (prev) => ({
                  ...prev,
                  page: pagination.totalPages,
                }),
              })
            }}
            disabled={pagination.page >= pagination.totalPages}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { DataTablePagination }
