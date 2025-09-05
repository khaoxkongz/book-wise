import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowLeftIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants, Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { z } from "zod/v4"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const Route = createFileRoute("/_dashboard/books-management/create")({
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      totalCopies: undefined,
      coverUrl: undefined,
      coverColor: "#000000",
      videoUrl: "",
      summary: "",
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
                    <Input
                      placeholder="Enter the book title"
                      className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]"
                      {...field}
                    />
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
                    <Input
                      placeholder="Enter the author name"
                      className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]"
                      {...field}
                    />
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
                    <Input
                      placeholder="Enter the genere of the book"
                      className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]"
                      {...field}
                    />
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
                    <Input
                      type="number"
                      placeholder="Enter the total number of books"
                      className="h-14 border border-[#CBD5E1] bg-[#F9FAFB]"
                      {...field}
                    />
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
                    <Textarea
                      placeholder="Write a brief summary of the book"
                      className="min-h-64 border border-[#CBD5E1] bg-[#F9FAFB]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="h-14 bg-[#25388C] text-primary-foreground">Create Book</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
