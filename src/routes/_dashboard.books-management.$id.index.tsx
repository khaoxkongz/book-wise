import { createFileRoute, Link } from "@tanstack/react-router"
import { books } from "@/books"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import { BookCover } from "@/components/book-cover"
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeRange,
  VideoPlayerTimeDisplay,
  VideoPlayerMuteButton,
  VideoPlayerVolumeRange,
} from "@/components/ui/shadcn-io/video-player"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/_dashboard/books-management/$id/")({
  loader: ({ params }) => ({ book: books.find((book) => book.id === params.id) }),
  component: RouteComponent,
})

function RouteComponent() {
  const { book } = Route.useLoaderData()

  if (!book) return null

  return (
    <div className="flex flex-col gap-6">
      <Link to="/books-management" className={cn(buttonVariants({ variant: "outline" }), "w-fit")}>
        <ArrowLeftIcon />
        <span>Go Back</span>
      </Link>

      <div className="grid grid-cols-[266px_1fr] gap-9">
        <div
          style={{ backgroundColor: `${book.coverColor}0D` }}
          className="flex w-full max-w-[266px] items-center justify-center rounded-lg py-6"
        >
          <BookCover size="lg" coverColor={book.coverColor} coverUrl={book.coverUrl} />
        </div>

        <div className="flex flex-col items-start justify-between gap-1.5 text-base font-normal">
          <div className="inline-flex items-center gap-1 text-[#64748B]">
            <div>Created at:</div>
            <div className="inline-flex items-center gap-1">
              <img src="/icons/admin/calendar.svg" alt="Calendar Icon" width={16} height={16} />
              <span>12/01/24</span>
            </div>
          </div>
          <div className="text-2xl font-semibold">{book.title}</div>
          <div className="font-semibold">By {book.author}</div>
          <div className="text-[#64748B]">{book.genre}</div>
          <Link
            to="/books-management/$id/edit"
            params={{ id: book.id }}
            className={cn(buttonVariants(), "h-11 w-full max-w-[422px] bg-[#25388C] font-bold text-primary-foreground")}
          >
            <img src="/icons/admin/edit.svg" alt="Edit Icon" width={16} height={16} />
            <span>Edit Book</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 items-start gap-10">
        <div className="flex flex-col gap-4">
          <div className="font-semibold">Summary</div>

          <div className="flex w-full max-w-xl flex-col gap-2.5 text-pretty text-[#64748B]">
            {book.summary.split("\n").map((sm, index) => (
              <div key={index}>{sm}</div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-semibold">Video</div>

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
      </div>
    </div>
  )
}
