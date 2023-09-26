import prisma from "@/lib/prisma"
import { Navbar } from "./Navbar"

export default async function NavbarWithProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  })

  console.log({ projects })

  return <Navbar projects={projects} />
}
