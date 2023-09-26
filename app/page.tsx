import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hi, I&rsquo;m Bruno</h1>

      <p>
        I&rsquo;m a software engineer, focused on transforming ideas into reality and creating software that leaves a
        lasting impact.
      </p>

      <p>
        I currently work at <a href="https://smarthis.com">Smarthis</a>, where I aim to support our clients in their
        digital transformation journey.
      </p>

      <Button size="lg" asChild>
        <Link href="/projects" className="no-underline">
          Explore My Projects
        </Link>
      </Button>
    </div>
  )
}
