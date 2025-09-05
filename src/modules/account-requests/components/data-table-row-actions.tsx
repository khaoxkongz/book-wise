import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import type { Row } from "@tanstack/react-table"
import { XIcon, CircleAlertIcon, CircleCheckIcon } from "lucide-react"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

function DataTableRowActions<TData>({}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex items-center gap-5">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-[#ECFDF3] text-[#027A48]">Approve Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="gap-5">
          <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-[#4C7B62]/10">
            <div className="mx-auto flex size-20 shrink-0 items-center justify-center rounded-full bg-[#4C7B62]">
              <CircleCheckIcon className="pointer-events-none size-7 shrink-0 stroke-1 text-primary-foreground" />
            </div>
          </div>

          <AlertDialogHeader className="items-center justify-center text-center">
            <AlertDialogTitle>Approve Book Request</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Approve the student's account request and grant access. A confirmation email will be sent upon approval.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col gap-1.5 sm:flex-col">
            <AlertDialogCancel className="h-12">Cancel</AlertDialogCancel>
            <AlertDialogAction className="h-12 bg-[#4C7B62]">Approve & Send Confirmation</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="icon"
            variant="destructive"
            className="size-5 rounded-full border border-destructive bg-background text-destructive-foreground hover:text-primary-foreground"
          >
            <XIcon className="size-2.5" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="gap-5">
          <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-[#F46F70]/10">
            <div className="mx-auto flex size-20 shrink-0 items-center justify-center rounded-full bg-[#F46F70]">
              <CircleAlertIcon className="pointer-events-none size-7 shrink-0 stroke-1 text-primary-foreground" />
            </div>
          </div>

          <AlertDialogHeader className="items-center justify-center text-center">
            <AlertDialogTitle>Deny Account Request</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Denying this request will notify the student they're not eligible due to unsuccessful ID card
              verification.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col gap-1.5 sm:flex-col">
            <AlertDialogCancel className="h-12">Cancel</AlertDialogCancel>
            <AlertDialogAction className="h-12 bg-[#F46F70]">Deny & Notify Student</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export { DataTableRowActions }
