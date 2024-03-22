import Footer from "@/components/common/Footer/Footer"
import Projects from "@/components/our-work/project_showcase/Projects_Showcase"
import Menu from '@/components/our-work/MenuWrapper'
import { Metadata } from "next"

const Page = () => {

  return (
      <div>
        <Menu/>
        <Projects/>
        <Footer/>
      </div>
    )
}

export default Page;


export const metadata: Metadata = {
  title: "Projects | WeMakeBrands",
  description: "Explore a collection of our diverse projects showcasing logo design, branding, social content, and more. From iconic brands to startups, discover how we bring creativity and strategy together to elevate businesses."
};
