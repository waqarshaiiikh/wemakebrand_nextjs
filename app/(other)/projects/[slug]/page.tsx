import React from 'react'
import Project from "@/components/Individual__Project"
import projectData from "@/components/common/data"
import { Metadata, ResolvingMetadata } from 'next'



export default function page({ params }: { params: { slug: string } }) {
    const fetchProject = projectData.find(project=>project.id.toString() === params.slug )

    return (
      <Project project={fetchProject}/>
    )

}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.id.toString(),
  }))
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug
 
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: id,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}