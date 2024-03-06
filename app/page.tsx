"use client";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';
import Header from '@/components/common/Header/Header'
import MainSlider from '@/components/home/MainSlider/MainSlider';
import RecentProjectsSlider from '@/components/home/RecentProjectsSlider/RecentProjectsSlider';
import Services from '@/components/home/Services/Services';
import Process from '@/components/home/Process/Process';
import LogoCollection from '@/components/home/LogoCollection/logoCollection'
import Testimonials from "@/components/home/Testimonials/Testimonials"
import ContactUs from "@/components/home/ContactUs/ContactUs"
import Footer from  "@/components/home/Footer/Footer"


const fadInKeyFrame = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 2s ${fadInKeyFrame};
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
  
`
export default function Home() {

  return (
    <>
      <Head>
        <meta property="og:title" content="WeMakeBrands" />
        <meta property="og:description" content="Based in London UK, we specialize in timeless logo design and systematic brand solutions. Helping companies connect with their audiences and scale their business." />
        <meta property="og:image" content="https://www.wemakebrandsltd.com/assets/WMB%20-%20MAIN%20LOGO%20-%20BLACK-96578e01.png" />
        <meta property="og:url" content="https://www.wemakebrandsltd.com/" />
      </Head>

      <FadeInDiv>
        <Header />
        <MainSlider />
        <RecentProjectsSlider />
        <Services />
        <Process />
        <LogoCollection />
        <Testimonials />
        <ContactUs />
        <Footer />
      </FadeInDiv>
    </>
  );
}
