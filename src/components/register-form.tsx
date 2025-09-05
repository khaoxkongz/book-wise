import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold">Create Your Library Account</h1>
        <p className="text-sm text-[#D6E0FF]">
          Please complete all fields and upload a valid university ID to gain access to the library
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Full Name</Label>
          <Input id="email" type="email" placeholder="m@example.com" className="h-14 dark:bg-[#232839]" />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" className="h-14 dark:bg-[#232839]" />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">University ID Number</Label>
          <Input id="email" type="password" placeholder="eg: 394365762" className="h-14 dark:bg-[#232839]" />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="At least 8 characters long"
            className="h-14 dark:bg-[#232839]"
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Upload University ID Card (file upload)</Label>
          <Input id="email" type="password" placeholder="eg: 394365762" className="h-14 dark:bg-[#232839]" />
        </div>

        <Button type="submit" size="lg" className="h-14 w-full bg-[#E7C9A5] font-semibold">
          Register
        </Button>
      </div>

      <div className="text-center text-sm">
        Have an account already?{" "}
        <Link to="/login" className="font-bold text-[#E7C9A5] underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  )
}

export { RegisterForm }
