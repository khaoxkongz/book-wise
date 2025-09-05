import { books } from "@/books"
import { BookCover } from "@/components/book-cover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { createFileRoute } from "@tanstack/react-router"
import { ChevronDownIcon, ChevronUpIcon, EyeIcon, PlusIcon } from "lucide-react"

export const Route = createFileRoute("/_dashboard/dashboard")({
  loader: () => ({ books }),
  component: RouteComponent,
})

function RouteComponent() {
  const { books } = Route.useLoaderData()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex items-center gap-1.5">
            <CardDescription className="font-medium">Barrowed Books</CardDescription>
            <div className="inline-flex shrink-0 items-center gap-px">
              <ChevronDownIcon className="size-6 shrink-0 fill-current stroke-1 text-[#E27233]" />
              <span className="text-[#E27233]">2</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">145</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-1.5">
            <CardDescription className="font-medium">Total Users</CardDescription>
            <div className="inline-flex shrink-0 items-center gap-px">
              <ChevronUpIcon className="size-6 shrink-0 fill-current stroke-1 text-[#2CC171]" />
              <span className="text-[#2CC171]">4</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">317</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-1.5">
            <CardDescription className="font-medium">Total Books</CardDescription>
            <div className="inline-flex shrink-0 items-center gap-px">
              <ChevronUpIcon className="size-6 shrink-0 fill-current stroke-1 text-[#2CC171]" />
              <span className="text-[#2CC171]">2</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">163</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <Card className="basis-1/2">
            <CardHeader>
              <CardTitle>Borrow Requests</CardTitle>
              <CardAction className="rounded-lg bg-[#F8F8FF] px-3.5 py-3 text-[#25388C] hover:underline hover:underline-offset-4">
                View All
              </CardAction>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-5 mask-b-from-75%">
              {books.splice(0, 3).map((book) => (
                <div
                  key={book.id}
                  className={cn(
                    "rounded-lg border border-[#F8F8FF] bg-[#F8F8FF] px-4 py-3.5",
                    "grid auto-rows-min items-start gap-3 has-data-[slot=card-action]:grid-cols-[auto_1fr_auto]"
                  )}
                >
                  <BookCover size="sm" {...book} />

                  <div className="flex flex-col gap-1.5">
                    <div>{book.title}</div>
                    <div className="flex w-full flex-1 items-center gap-1.5 text-xs text-muted-foreground">
                      <div className="w-fit">By {book.author}</div>
                      <div className="size-1 rounded-full bg-[#25388C]"></div>
                      <div className="w-fit">{book.genre}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Avatar className="size-4">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <span>Darrell Stewards</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <picture>
                          <img src="/icons/admin/calendar.svg" alt="Calendar Icon" width={16} height={16} />
                        </picture>

                        <span>12/01/24</span>
                      </div>
                    </div>
                  </div>

                  <div data-slot="card-action" className="col-start-3 self-start justify-self-end">
                    <Button size="icon" variant="outline">
                      <EyeIcon />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* <CardContent className="flex flex-1 flex-col items-center justify-center gap-5">
              <picture>
                <img
                  src="/images/borrow-request-Illustration.png"
                  alt=""
                  width={144}
                  height={144}
                  className="mx-auto object-fill"
                />
              </picture>

              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">No Pending Book Requests</div>
                <div className="text-xs text-muted-foreground">
                  There are no borrow book requests awaiting your review at this time.
                </div>
              </div>
            </CardContent> */}
          </Card>

          <Card className="basis-1/2">
            <CardHeader>
              <CardTitle>Account Requests</CardTitle>
              <CardAction className="rounded-lg bg-[#F8F8FF] px-3.5 py-3 text-[#25388C] hover:underline hover:underline-offset-4">
                View All
              </CardAction>
            </CardHeader>

            <CardContent className="grid grid-cols-3 gap-4 mask-b-from-75%">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-lg bg-[#F8F8FF] p-3.5"
                >
                  <Avatar className="size-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-center justify-center gap-px">
                    <div>Marc Atenson</div>
                    <div className="text-sm text-muted-foreground">marcnine@gmai.com</div>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* <CardContent className="flex flex-1 flex-col items-center justify-center gap-5">
              <picture>
                <img
                  src="/images/account-request-Illustration.png"
                  alt=""
                  width={144}
                  height={144}
                  className="mx-auto object-fill"
                />
              </picture>

              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold">No Pending Account Requests</div>
                <div className="text-xs text-muted-foreground">
                  There are currently no account requests awaiting approval.
                </div>
              </div>
            </CardContent> */}
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recently Added Books</CardTitle>
            <CardAction className="rounded-lg bg-[#F8F8FF] px-3.5 py-3 text-[#25388C] hover:underline hover:underline-offset-4">
              View All
            </CardAction>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <Button size="lg" className="h-20 w-full justify-start bg-[#F8F8FF] text-primary">
              <div className="flex aspect-square size-12 items-center justify-center rounded-full bg-background text-[#25388C]">
                <PlusIcon className="size-5" />
              </div>
              <span className="text-lg font-medium">Add New Book</span>
            </Button>

            <div className="flex flex-col gap-6 mask-b-from-75%">
              {books.splice(0, 6).map((book) => (
                <div key={book.id} className="flex items-center gap-3">
                  <BookCover size="sm" {...book} />

                  <div className="flex w-full flex-col gap-1.5">
                    <div>{book.title}</div>
                    <div className="flex w-full flex-1 items-center gap-1.5 text-xs text-muted-foreground">
                      <div>By {book.author}</div>
                      <div className="size-1 rounded-full bg-[#25388C]"></div>
                      <div className="w-full">{book.genre}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <picture>
                        <img src="/icons/admin/calendar.svg" alt="Calendar Icon" width={16} height={16} />
                      </picture>

                      <span>12/01/24</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
