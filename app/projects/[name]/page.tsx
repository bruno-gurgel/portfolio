import Link from "next/link"
import prisma from "lib/prisma"

export default async function ProjectsPage({
  params,
}: {
  params: {
    name: string
  }
}) {
  const name = decodeURI(params.name)

  const project = await prisma.project.findUnique({
    where: {
      name,
    },
  })

  const tags = await prisma.tag.findMany({
    where: {
      projects: {
        some: {
          projectId: project?.id,
        },
      },
    },
  })

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {tags.map((tag) => (
          <Link href={`/tags/${tag.name}`} key={tag.id}>
            {tag.name}
          </Link>
        ))}
      </p>
    </div>
  )
}
