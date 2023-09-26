import Link from "next/link"
import prisma from "lib/prisma"

export default async function ProjectTagsPage({
  params,
}: {
  params: {
    name: string
  }
}) {
  const tag = await prisma.tag.findUnique({
    where: {
      name: params.name,
    },
  })
  const projects = await prisma.project.findMany({
    where: {
      tags: {
        some: {
          tagId: tag?.id,
        },
      },
    },
  })

  return (
    <div>
      <h1>{tag?.name}</h1>
      <p>
        {projects.map((project) => (
          <Link href={`/projects/${project.name}`} key={project.id}>
            {project.name}
          </Link>
        ))}
      </p>
    </div>
  )
}
