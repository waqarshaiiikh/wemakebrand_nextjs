import React from 'react'
import Project from "@/components/Individual__Project"
import projectData from "@/components/common/data"

type Props = {
    params: { slug: string }
}


export default function page({ params }: Props) {

    const fetchProject = projectData.find(project=>project.id.toString() === params.slug )

    return (
      <Project project={fetchProject}/>
    )

}
