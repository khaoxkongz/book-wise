import { books } from "@/books"
import { BookCover } from "@/components/book-cover"
import { Container, ContainerWrapper } from "@/components/container"
import { Button } from "@/components/ui/button"
import { createFileRoute } from "@tanstack/react-router"
import { StarIcon } from "lucide-react"

export const Route = createFileRoute("/_web/")({
  loader: () => ({ books: books.splice(0, 6) }),
  component: App,
})

function App() {
  const { books } = Route.useLoaderData()

  return (
    <div className="flex flex-1 flex-col gap-20">
      <ContainerWrapper>
        <Container>
          <section className="flex items-center justify-center gap-4 theme-container">
            <div className="flex flex-col gap-6 md:basis-1/2">
              <div className="text-7xl font-semibold">Origin</div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5 text-xl">
                  <div>
                    By <span className="font-semibold text-[#EED1AC]">Dan Brown</span>
                  </div>

                  <div>
                    Category: <span className="font-semibold text-[#EED1AC]">Thriller / Suspense</span>
                  </div>

                  <div className="inline-flex shrink-0 items-center gap-1.5">
                    <StarIcon className="pointer-events-none size-4 shrink-0 stroke-2" />
                    <div className="font-semibold text-[#EED1AC]">4.5/5</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xl">
                  <div>
                    Total books: <span className="font-semibold text-[#EED1AC]">100</span>
                  </div>
                  <div>
                    Available books: <span className="font-semibold text-[#EED1AC]">42</span>
                  </div>
                </div>
              </div>

              <div className="text-xl">
                Origin is a 2017 mystery-thriller novel by American author Dan Brown. It is the fifth installment in the
                Robert Langdon series, following previous bestsellers such as The Da Vinci Code and Angels &
                Demons.{" "}
              </div>

              <Button size="lg" className="w-fit bg-[#EED1AC] font-semibold uppercase">
                <img src="/icons/book.svg" alt="" width={16} height={16} />
                <span>Borrow Book Request</span>
              </Button>
            </div>

            <div className="relative flex flex-1 items-center justify-center md:basis-1/2">
              <BookCover
                size="xl"
                className="z-10"
                coverColor="#1e2a4b"
                coverUrl="https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png"
              />

              <div className="absolute top-10 right-30 rotate-12 opacity-40 blur-xs max-sm:hidden">
                <BookCover
                  size="xl"
                  className="z-10"
                  coverColor="#1e2a4b"
                  coverUrl="https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png"
                />
              </div>
            </div>
          </section>
        </Container>
      </ContainerWrapper>

      <ContainerWrapper>
        <Container>
          <section className="flex flex-col gap-10 theme-container">
            <div className="text-3xl font-semibold">Popular Books</div>

            <div className="grid grid-cols-6 gap-4">
              {books.map((book) => (
                <div key={book.id} className="flex flex-col gap-4">
                  <BookCover size="md" className="z-10" coverColor={book.coverColor} coverUrl={book.coverUrl} />

                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="line-clamp-2 text-xl font-semibold">{book.title}</div>
                    <div className="mt-auto text-base font-normal text-[#D6E0FF] italic">{book.genre}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
