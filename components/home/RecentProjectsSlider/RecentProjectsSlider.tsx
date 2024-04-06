import Carousel from 'react-multi-carousel'
import styles from './RecentProjectsSlider.module.css'
import { styled } from 'styled-components'
import { RecentProjects } from '../../common/data'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import IndividualProject from '../../Individual__Project'

// const ImageDiv = styled.div((props)=>({
//   backgroundImage : `url('${props.url}')`,

// }));

const RecentProjectsSlider = () => {
 
  return (
    <div className={styles.wrapper} id='our-work'>
      <div className={`${styles.heading} default__padding--left`}>
        <h2 className={styles.mainheading}>RECENT PROJECTS</h2>
      </div>
      <div className={`${styles.project__slider}  default__padding--left`} >
        <Carousel
          className=" slider__image__individual"
          containerClass={styles.slider__container}
          itemClass={styles.SliderImageContainer}
          arrows={true}
          draggable={false}
          partialVisible
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4
            },
            mobile: {
              breakpoint: {
                max: 480,
                min: 0
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 480
              },
              items: 2
            }
          }}
          sliderClass=""
          slidesToSlide={1}
        >
          {/* <div style={{width:'40px'}} className={'default__padding--left'}></div> */}
          {RecentProjects.slice(0, 8).map(slides =>
            <div  
              key={slides.id}
              className={`relative ${styles.slider__image__individual}`}>
              <Image src={slides.img} alt='slider images' quality={10} placeholder='blur' fill  />
              <Link href={'/projects/'+slides.slug}  className={`${styles.image__content} absolute`}>
                <p className={styles.view}>VIEW PROJECT</p>
              </Link>
            </div>
          )}
        </Carousel>
      </div>
    </div>
    
  )
}

export default RecentProjectsSlider