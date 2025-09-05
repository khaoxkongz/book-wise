import { books } from "@/books"
import { BookCover } from "@/components/book-cover"
import { Container, ContainerWrapper } from "@/components/container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_web/profile")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col pb-10">
      <ContainerWrapper>
        <Container className="flex gap-10">
          <section className="theme-container md:basis-1/2">
            <Card className="flex flex-col gap-8 gradient-blue">
              <CardHeader className="flex items-center gap-4">
                <Avatar className="size-24 outline-8 outline-[#333C5C33]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-1.5">
                  <div className="flex shrink-0 items-center gap-1.5">
                    <img src="/icons/verified.svg" alt="Verified Icon" width={16} height={16} />
                    <span className="text-sm text-[#D6E0FF]">Verified Student</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <CardTitle className="text-2xl font-semibold">Adrian</CardTitle>
                    <CardDescription className="text-[#D6E0FF]">contact@jsmastery.pro</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col gap-8">
                <div className="flex flex-col gap-2.5">
                  <div className="text-lg font-normal text-[#D6E0FF]">University</div>
                  <div className="text-xl font-semibold">JS Mastery Pro</div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <div className="text-lg font-normal text-[#D6E0FF]">Student ID</div>
                  <div className="text-xl font-semibold">234567856</div>
                </div>
              </CardContent>

              <CardFooter>
                <div className="relative flex w-full flex-col gap-6 overflow-hidden rounded-lg border py-4">
                  <picture className="absolute inset-0 -z-0">
                    <img
                      src="/images/profile-card-background.png"
                      alt=""
                      width={417}
                      height={245}
                      className="size-full object-fill"
                    />
                  </picture>
                  <picture className="absolute inset-0 -z-0 opacity-70">
                    <img
                      src="/images/profile-card-noise-background.png"
                      alt=""
                      width={417}
                      height={245}
                      className="size-full object-fill"
                    />
                  </picture>

                  <div className="z-10 flex items-center justify-center gap-10">
                    <picture className="absolute top-2 left-1/12">
                      <img
                        src="/images/profile-card-university.png"
                        alt=""
                        width={90}
                        height={90}
                        className="object-fill"
                      />
                    </picture>

                    <div className="flex flex-1 flex-col items-center justify-center gap-px">
                      <div className="text-lg font-bold">JS Mastery University</div>
                      <div className="w-full border-y-2 border-muted-foreground/30 px-0 py-1 text-center">
                        Empowering Dreams, Inspiring Futures
                      </div>
                    </div>
                  </div>

                  <div className="z-10 flex items-center gap-4 px-10">
                    <img src="/images/profile-card-user.png" alt="" width={92} height={96} className="outline-4" />

                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div>Student ID</div>
                        <div>:</div>
                        <div className="font-bold">98765432</div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div>Full Name</div>
                        <div>:</div>
                        <div className="font-bold">John Smith</div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div>Department</div>
                        <div>:</div>
                        <div className="font-bold">Web Development</div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div>Date of Birth</div>
                        <div>:</div>
                        <div className="font-bold">02/14/1998</div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div>Contact No</div>
                        <div>:</div>
                        <div className="font-bold">+1 (555) 987-6543</div>
                      </div>
                    </div>
                  </div>

                  <div className="z-10 flex items-center gap-4 px-10 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div>University No</div>
                      <div>:</div>
                      <div className="font-bold">+1 (800) 456-7890</div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div>Website</div>
                      <div>:</div>
                      <div className="font-bold">www.jsmastery.pro</div>
                    </div>
                  </div>

                  <picture className="absolute right-4 bottom-4">
                    <img src="/images/profile-card-qr.png" alt="" width={72} height={72} className="object-fill" />
                  </picture>
                </div>
              </CardFooter>
            </Card>
          </section>

          <section className="flex flex-col gap-6 theme-container md:basis-1/2">
            <div className="text-3xl font-semibold text-[#D6E0FF]">Borrowed books</div>

            <div className="grid grid-cols-2 gap-5">
              {books.splice(0, 4).map((book) => (
                <Card key={book.id} className="relative w-full rounded-2xl gradient-vertical">
                  <div className="relative mx-auto overflow-hidden rounded-lg border px-16 py-6">
                    <div
                      style={{ backgroundColor: `${book.coverColor}4D` }}
                      className="absolute inset-0 size-full opacity-30"
                    ></div>
                    <BookCover size="md" {...book} className="shadow-2xl" />
                  </div>

                  <CardHeader className="px-4">
                    <CardTitle>{book.title}</CardTitle>
                    <CardDescription className="text-[#D6E0FF] italic">{book.genre}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex items-baseline-last justify-between px-4">
                    <div className="flex flex-col gap-1.5 text-sm text-[#D6E0FF]">
                      <div className="flex shrink-0 items-center gap-1.5">
                        <img
                          src="/icons/book-2.svg"
                          alt="Book Icon"
                          width={16}
                          height={16}
                          className="pointer-events-none size-4 shrink-0"
                        />
                        <span>Borrowed on Dec 31</span>
                      </div>

                      <div className="flex shrink-0 items-center gap-1.5">
                        <img
                          src="/icons/calendar.svg"
                          alt="Book Icon"
                          width={16}
                          height={16}
                          className="pointer-events-none size-4 shrink-0"
                        />
                        <span>04 days left to due</span>
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" style={{ backgroundColor: `${book.coverColor}4D` }}>
                          <img src="/icons/receipt.svg" alt="Receipt Icon" width={16} height={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#111624]">
                        <div className="relative flex flex-col gap-6 rounded-lg rounded-b-none bg-[#232839] px-8 py-10">
                          <div className="flex items-center gap-1.5">
                            <img src="/icons/logo.svg" alt="Book Wise Logo" width={40} height={32} />
                            <div className="text-3xl font-semibold">Book Wise</div>
                          </div>

                          <DialogHeader className="border-b border-muted-foreground/70 pb-6">
                            <DialogTitle>Borrow Receipt</DialogTitle>
                            <DialogDescription>
                              <div className="flex items-center gap-1.5">
                                <div>Receipt ID</div>
                                <div>:</div>
                                <div className="font-bold text-[#EED1AC]">[#12345]</div>
                              </div>

                              <div className="flex items-center gap-1.5">
                                <div>Date Issued</div>
                                <div>:</div>
                                <span className="font-bold text-[#EED1AC]">[DD/MM/YYYY]</span>
                              </div>
                            </DialogDescription>
                          </DialogHeader>

                          <div className="flex flex-col gap-4 border-b border-muted-foreground/70 pb-6">
                            <div className="text-lg font-bold">Book Details:</div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="rounded-md border border-muted-foreground/70 px-4 py-2">
                                <div className="text-muted-foreground">Title</div>
                                <div className="font-bold">{book.title}</div>
                              </div>
                              <div className="rounded-md border border-muted-foreground/70 px-4 py-2">
                                <div className="text-muted-foreground">Author</div>
                                <div className="font-bold">{book.author}</div>
                              </div>
                              <div className="rounded-md border border-muted-foreground/70 px-4 py-2">
                                <div className="text-muted-foreground">Genre</div>
                                <div className="font-bold">{book.genre}</div>
                              </div>
                              <div className="rounded-md border border-muted-foreground/70 px-4 py-2">
                                <div className="text-muted-foreground">Borrowed on</div>
                                <div className="font-bold">[Borrow Date]</div>
                              </div>
                              <div className="rounded-md border border-muted-foreground/70 px-4 py-2">
                                <div className="text-muted-foreground">Due Date</div>
                                <div className="font-bold">[Due Date]</div>
                              </div>
                              <div className="rounded-md border border-muted-foreground/70 px-4 py-2">
                                <div className="text-muted-foreground">Duration</div>
                                <div className="font-bold">[X Days]</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <div className="text-lg font-bold">Terms</div>

                            <ul className="list-disc px-6">
                              <li className="text-muted-foreground">Please return the book by the due date.</li>
                              <li className="text-muted-foreground">
                                Lost or damaged books may incur replacement costs.
                              </li>
                            </ul>
                          </div>

                          <DialogFooter className="border-t border-muted-foreground/70 pt-6 sm:justify-start">
                            <div className="flex flex-col gap-px">
                              <div className="flex items-center gap-1.5">
                                <div>Thank you for using</div>
                                <div className="font-bold text-[#EED1AC]">BookWise!</div>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div>Website</div>
                                <div>:</div>
                                <div className="font-bold text-[#EED1AC]">[bookwise.example.com]</div>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div>Email</div>
                                <div>:</div>
                                <div className="font-bold text-[#EED1AC]">support@bookwise.example.com</div>
                              </div>
                            </div>
                          </DialogFooter>

                          <div className="absolute -bottom-2 left-2 z-10 mx-auto flex items-center gap-3.5">
                            {Array.from({ length: 13 }).map((_, index) => (
                              <div key={index} className="h-5 w-6 rounded-full bg-[#111624]"></div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
