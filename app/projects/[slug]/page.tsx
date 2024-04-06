import React from 'react'
import Project from "@/components/Individual__Project"
import projectData, { RecentProjects, slugArray } from "@/components/common/data"
import { notFound } from 'next/navigation'

type Props = {
    params: { slug: string }
}


export default function page({ params }: Props) {

    const fetchProject = projectData.find(project=>project.slug === params.slug ) || RecentProjects.find(project=>project.slug === params.slug )
    
    if(fetchProject === undefined){ 
      return   notFound();
    }
   
    return (
      <Project project={fetchProject}/>
    )

}


export const generateStaticParams = async () => {
 

  return slugArray
   .reduce((acc, curr) => acc.includes(curr)? acc : [...acc, curr], [] as string[])
   .map(slug => ({
     slug: slug,
   }));
};

export async function generateMetadata({ params }: Props) {
  const fetchProject = projectData.find(project=>project.slug === params.slug ) || RecentProjects.find(project=>project.slug === params.slug )

  return {
    title: fetchProject?.seoTitle, //+' | WeMakeBrands',
    description: fetchProject?.seoDescription,
  }
}