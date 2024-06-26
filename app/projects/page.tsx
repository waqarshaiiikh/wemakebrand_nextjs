import Footer from "@/components/common/Footer/Footer"
import Projects from "@/components/our-work/project_showcase/Projects_Showcase"
import projectsData from '@/components/common/data'
import Menu from '@/components/our-work/MenuWrapper'
import { Metadata } from "next";

const Index = () => {
  return (
      <div>
        <Menu/>
        <Projects projects={projectsData}/>
        <Footer/>
      </div>
    )
}

export default Index;

export const metadata: Metadata = {
  title: "Showcase of Creative Excellence | WeMakeBrands",
  description: "Explore our curated showcase of innovative projects at 'We Make Brands', where creativity meets functionality. From vibrant branding to immersive digital experiences, each project is a testament to our commitment to excellence and innovation. Dive into our diverse portfolio and discover how we bring unique visions to life, setting new benchmarks in the design industry",
  // title: "Projects | WeMakeBrands",
  // description: "Explore a collection of our diverse projects showcasing logo design, branding, social content, and more. From iconic brands to startups, discover how we bring creativity and strategy together to elevate businesses."
};


