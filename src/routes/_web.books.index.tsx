import { books } from "@/books"
import { BookCover } from "@/components/book-cover"
import { Container, ContainerWrapper } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import { SearchIcon, StarIcon } from "lucide-react"
import { z } from "zod/v4"

const searchSchema = z.object({
  q: z.string().nullable().optional(),
})

export const Route = createFileRoute("/_web/books/")({
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { q } = Route.useSearch()
  const navigate = useNavigate()

  const booksFiltered = q
    ? books.filter((book) => book.author.includes(q) || book.genre.includes(q) || book.title.includes(q))
    : books

  return (
    <div className="flex flex-1 flex-col gap-10 pb-16">
      <ContainerWrapper>
        <Container>
          <section className="flex flex-col items-center justify-center gap-4 text-center theme-container">
            <div className="text-lg font-semibold text-[#D6E0FF] uppercase">Discover Your Next Great Read:</div>
            <div className="w-full max-w-2xl text-6xl font-semibold">
              Explore and Search for <span className="text-[#EED1AC]">Any Book</span> In Our Library
            </div>

            <div className="relative inline-flex w-full shrink-0 items-center justify-center">
              <SearchIcon className="pointer-events-none absolute start-1/4 shrink-0 -translate-y-0.5 text-[#EED1AC]" />

              <Input
                value={q || ""}
                onChange={(e) => navigate({ to: "/books", search: { q: e.target.value } })}
                placeholder="Search books by title, author, or genre."
                className="h-16 w-full max-w-2xl pl-12 dark:bg-[#232839]"
              />
            </div>
          </section>
        </Container>
      </ContainerWrapper>

      <ContainerWrapper>
        <Container>
          <section className="flex flex-col gap-10">
            {q ? (
              <div className="text-3xl font-semibold text-[#D6E0FF]">
                Search Results for <span className="text-[#EED1AC]">{q}</span>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="text-3xl font-semibold text-[#D6E0FF]">Search Results</div>

                <Select>
                  <SelectTrigger className="w-[180px] data-[placeholder]:text-[#D6E0FF]">
                    <SelectValue placeholder="Filter By:" defaultValue="light" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      Filter By: <span className="font-semibold text-[#EED1AC]">Light</span>
                    </SelectItem>
                    <SelectItem value="dark">
                      Filter By: <span className="font-semibold text-[#EED1AC]">Dark</span>
                    </SelectItem>
                    <SelectItem value="system">
                      Filter By: <span className="font-semibold text-[#EED1AC]">System</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {booksFiltered.length === 0 ? (
              <div className="col-span-6 flex flex-col items-center justify-center gap-6 text-center">
                <picture>
                  <img src="/images/no-books.png" alt="No Book Found" width={200} height={200} />
                </picture>

                <div className="flex flex-col gap-3.5">
                  <div className="text-2xl font-semibold">No Results Found</div>
                  <div className="w-full max-w-sm text-[#D6E0FF]">
                    We couldn't find any books matching your search. Try using different keywords or check for typos.
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-fit bg-[#EED1AC] font-semibold uppercase"
                  onClick={() => navigate({ to: "/books", search: () => ({ q: undefined }) })}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-6 items-start gap-4">
                {booksFiltered.map((book) => (
                  <Tooltip>
                    <TooltipTrigger>
                      <div key={book.id} className="flex flex-col items-start justify-start gap-4 text-start">
                        <Link to="/books/$id" params={{ id: book.id }}>
                          <BookCover size="md" className="z-10" coverColor={book.coverColor} coverUrl={book.coverUrl} />
                        </Link>

                        <div className="flex flex-1 flex-col gap-1.5">
                          <div className="line-clamp-2 text-xl font-semibold">
                            <Link to="/books/$id" params={{ id: book.id }}>
                              {book.title}
                            </Link>
                          </div>
                          <div className="mt-auto text-base font-normal text-[#D6E0FF] italic">{book.genre}</div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-[#232839] text-[#D6E0FF] [&_svg]:bg-[#232839] [&_svg]:fill-[#232839]"
                    >
                      <div className="flex flex-col gap-2.5">
                        <div>{book.title}</div>

                        <div className="flex flex-col gap-2.5">
                          <div>
                            By <span className="font-semibold text-[#EED1AC]">{book.author}</span>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div>
                              Category: <span className="font-semibold text-[#EED1AC]">{book.genre}</span>
                            </div>

                            <div className="inline-flex shrink-0 items-center gap-1.5">
                              <StarIcon className="pointer-events-none size-4 shrink-0 stroke-2" />
                              <div className="font-semibold text-[#EED1AC]">{book.rating}/5</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div>
                              Total books: <span className="font-semibold text-[#EED1AC]">{book.totalCopies}</span>
                            </div>
                            <div>
                              Available books:{" "}
                              <span className="font-semibold text-[#EED1AC]">{book.availableCopies}</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full max-w-xs">{book.description}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
                <Pagination className="col-span-6">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" className="bg-[#232839]" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        className="bg-[#EED1AC] text-primary-foreground data-[active]:bg-[#232839]"
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis className="bg-[#232839]" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="bg-[#232839]">
                        10
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" className="bg-[#232839]" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </section>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
