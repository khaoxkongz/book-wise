import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowLeftIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants, Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { z } from "zod/v4"
import { useForm } from "react-hook-form"
import { books } from "@/books"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookCover } from "@/components/book-cover"

export const Route = createFileRoute("/_dashboard/books-management/$id/edit")({
  loader: ({ params }) => ({ book: books.find((book) => book.id === params.id) }),
  component: RouteComponent,
})

const formSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  totalCopies: z.number(),
  coverUrl: z.string(),
  coverColor: z.string(),
  videoUrl: z.string(),
  summary: z.string(),
})

function RouteComponent() {
  const { book } = Route.useLoaderData()

  if (!book) return null

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      totalCopies: book.totalCopies,
      coverUrl: "",
      coverColor: book.coverColor,
      videoUrl: "",
      summary: book.summary,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex flex-col gap-9">
      <Link to="/books-management" className={cn(buttonVariants({ variant: "outline" }), "w-fit")}>
        <ArrowLeftIcon />
        <span>Go Back</span>
      </Link>

      <div className="grid grid-cols-3 gap-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="col-span-2 flex flex-col gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Title</FormLabel>
                  <FormControl>
                    <Input className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Input className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="totalCopies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total number of books</FormLabel>
                  <FormControl>
                    <Input className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Image</FormLabel>
                  <FormControl>
                    <Input type="file" className="border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coverColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Primary Color</FormLabel>
                  <FormControl>
                    <Input className="border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="videoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Video</FormLabel>
                  <FormControl>
                    <Input type="file" className="border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Summary</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-64 border border-[#CBD5E1] bg-[#F9FAFB]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="h-14 bg-[#25388C] text-primary-foreground">Update Book</Button>
          </form>
        </Form>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">Preview Book</div>

            <div
              style={{ backgroundColor: `${book.coverColor}4D` }}
              className="flex items-center justify-center rounded-lg py-6"
            >
              <BookCover size="xl" coverUrl={book.coverUrl} coverColor={book.coverColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
