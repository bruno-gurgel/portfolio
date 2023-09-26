import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
// Create an API endpoint in Next 13 that imports the prisma client from @/lib/prisma and uses it to query the database for the projects.

export async function GET(_request: Request) {
  const projects = await prisma.project.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  })

  return NextResponse.json(projects)
}
