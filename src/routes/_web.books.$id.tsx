import { books } from "@/books"
import { BookCover } from "@/components/book-cover"
import { Container, ContainerWrapper } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/shadcn-io/video-player"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { createFileRoute, Link } from "@tanstack/react-router"
import { StarIcon } from "lucide-react"

export const Route = createFileRoute("/_web/books/$id")({
  loader: ({ params }) => ({ book: books.find((book) => book.id === params.id) }),
  component: RouteComponent,
})

function RouteComponent() {
  const { book } = Route.useLoaderData()

  if (!book) return null

  const similarBooks = books.filter((sb) => sb.genre.match(book.genre))

  return (
    <div className="flex flex-1 flex-col gap-20 pb-16">
      <ContainerWrapper>
        <Container>
          <section className="flex min-h-[560px] items-center justify-center gap-4 theme-container text-[#D6E0FF]">
            <div className="flex flex-col gap-6 md:basis-1/2">
              <div className="text-7xl font-semibold">{book.title}</div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5 text-xl">
                  <div>
                    By <span className="font-semibold text-[#EED1AC]">{book.author}</span>
                  </div>

                  <div>
                    Category: <span className="font-semibold text-[#EED1AC]">{book.genre}</span>
                  </div>

                  <div className="inline-flex shrink-0 items-center gap-1.5">
                    <StarIcon className="pointer-events-none size-4 shrink-0 stroke-2" />
                    <div className="font-semibold text-[#EED1AC]">{book.rating}/5</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xl">
                  <div>
                    Total books: <span className="font-semibold text-[#EED1AC]">{book.totalCopies}</span>
                  </div>
                  <div>
                    Available books: <span className="font-semibold text-[#EED1AC]">{book.availableCopies}</span>
                  </div>
                </div>
              </div>

              <div className="text-xl">{book.description}</div>

              <Button size="lg" className="w-fit bg-[#EED1AC] font-semibold uppercase">
                <img src="/icons/book.svg" alt="" width={16} height={16} />
                <span>Borrow Book Request</span>
              </Button>
            </div>

            <div className="relative flex flex-1 items-center justify-center md:basis-1/2">
              <BookCover size="xl" className="z-10" coverColor={book.coverColor} coverUrl={book.coverUrl} />

              <div className="absolute top-10 right-30 rotate-12 opacity-40 blur-xs max-sm:hidden">
                <BookCover size="xl" className="z-10" coverColor={book.coverColor} coverUrl={book.coverUrl} />
              </div>
            </div>
          </section>
        </Container>
      </ContainerWrapper>

      <ContainerWrapper>
        <Container className="grid grid-cols-2 gap-5">
          <section className="flex flex-col gap-4 theme-container text-[#D6E0FF]">
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-semibold">Video</div>

              <VideoPlayer className="overflow-hidden rounded-lg border">
                <VideoPlayerContent crossOrigin="" muted preload="auto" slot="media" src={book.videoUrl} />
                <VideoPlayerControlBar>
                  <VideoPlayerPlayButton />
                  <VideoPlayerSeekBackwardButton />
                  <VideoPlayerSeekForwardButton />
                  <VideoPlayerTimeRange />
                  <VideoPlayerTimeDisplay showDuration />
                  <VideoPlayerMuteButton />
                  <VideoPlayerVolumeRange />
                </VideoPlayerControlBar>
              </VideoPlayer>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-3xl font-semibold">Summary</div>

              <div className="flex w-full max-w-xl flex-col gap-2.5 text-pretty">
                {book.summary.split("\n").map((sm, index) => (
                  <div key={index}>{sm}</div>
                ))}
              </div>
            </div>
          </section>

          <aside className="flex flex-col gap-4 text-[#D6E0FF]">
            <div className="text-3xl font-semibold text-[#D6E0FF]">More similar books</div>

            <div className="flex flex-wrap gap-2.5">
              {similarBooks.map((sb) => (
                <Link to="/books/$id" params={{ id: sb.id }}>
                  <Tooltip>
                    <TooltipTrigger>
                      <BookCover size="md" {...sb} />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-[#232839] text-[#D6E0FF] [&_svg]:bg-[#232839] [&_svg]:fill-[#232839]"
                    >
                      <div className="flex flex-col gap-2.5">
                        <div>{sb.title}</div>

                        <div className="flex flex-col gap-2.5">
                          <div>
                            By <span className="font-semibold text-[#EED1AC]">{sb.author}</span>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div>
                              Category: <span className="font-semibold text-[#EED1AC]">{sb.genre}</span>
                            </div>

                            <div className="inline-flex shrink-0 items-center gap-1.5">
                              <StarIcon className="pointer-events-none size-4 shrink-0 stroke-2" />
                              <div className="font-semibold text-[#EED1AC]">{sb.rating}/5</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div>
                              Total books: <span className="font-semibold text-[#EED1AC]">{sb.totalCopies}</span>
                            </div>
                            <div>
                              Available books:{" "}
                              <span className="font-semibold text-[#EED1AC]">{sb.availableCopies}</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full max-w-xs">{sb.description}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              ))}
            </div>
          </aside>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
