import styles from './MainSlider.module.css';
import 'react-multi-carousel/lib/styles.css';
// import Carousel from 'react-multi-carousel';
import { MenuText, MainTitles  } from "../Common/FontStyle/Fonts";
import slide1 from './Main Slider/images-01.webp'
import slide2 from './Main Slider/images-02.webp'
import slide3 from './Main Slider/images-03.webp'
import slide4 from './Main Slider/images-04.webp'
import slide5 from './Main Slider/images-05.webp'
import { styled } from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Autoplay, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { useCallback, useState } from 'react';



const TriangleDiv = styled.div((props)=>({
  height:   '100%',
  width:    '410px',
  backgroundColor: `rgb(${props.bgColor})`,
  clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 46% 100%)',
  opacity: '0.75'
}));

const ImageDiv = styled.div((props)=>({
  backgroundImage : `url('${props.url}')`,

}));

const SwipperStyle = styled.div(()=>({
  '& .swiper':{
    width: '100%',
  },
  '& .swiper-slide':{
    display: 'flex',
    justifyContent: 'end',
    // transition: 'opacity 0.5s ease',
    opacity: 0,
    animation: 'fadeOut 1.5s !important',
  },
  '& .swiper-slide-active':{
    opacity: 1,
    animation: 'none !important',
  },
  '& .swiper-pagination':{
    position: 'unset',
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: 'calc(100% - 500px)',
    paddingTop : '20px'
  },
  '& .swiper-pagination-bullet':{
    width: '12px !important',
    height: '12px !important',
  },
  '& .swiper-pagination-bullet-active':{
    background: '#fe9e1b !important'
    
  },
  '& .swiper-wrapper ':{
    cursor: 'default',
  },
  '@media screen and (min-width: 600px) and (max-width: 900px)':{
    '& .swiper-slide':{
      justifyContent: 'center',
    },
  }
  


}))


const MainSlider = () => {
  const sliderArray = [
  { bgColor: '49, 179, 187', image: slide1, heading:"ADVERTISEMENT", text:"We translate marketing objectives into visually captivating designs that engage, inform, and persuade your target audience." }, 
  { bgColor: '37, 157, 143', image: slide2, heading: "WEB DESIGN", text: "We will enhance your brand by creating a visually appealing, user-friendly website that will engage visitors, and drive desired user actions." },
  { bgColor: '0, 145, 146', image: slide3, heading: "BRANDING", text: "When creating a brand we think about strategic visual design, considering your brand's values, personality, and positioning in the market." },
  { bgColor: '216, 12, 13', image: slide4, heading:"PUSHING BOUNDARIES", text:"We like to break conventional design approaches and explore new avenues, creating designs that captivate, challenge, and inspire." },
  { bgColor: '245, 186, 39', image: slide5, heading:"INNOVATIVE CONTENT", text: "Visually compelling & innovative content are essential in creating a strong online presence, engaging audiences and driving business growth." }];
  const [backgroundColor, setBgColor] = useState(0);


  const handleSlideChange = useCallback((swiper)=>{
      // console.clear();
      // console.table(swiper);
     setBgColor(swiper.activeIndex);
    //  setBgColor(prev=>{ return (prev+1)%sliderArray.length});
  },[])

  return (
    <div className={styles.main__slider}>
      <div className={styles.intro__container}>
        <div className={styles.intro__container__design}>
          
          <div className={`${styles.content} default__padding--left`}>
            <h1 className={styles.heading}>
              COMMUNICATING VISIONS THROUGH COHERENT DESIGN.
            </h1>
            <p className={styles.paragraph}>
              Based in London UK, we specialize in timeless logo design and systematic brand solutions. Helping companies connect with their audiences and scale their business.
            </p>
          </div>
          <TriangleDiv bgColor={sliderArray[backgroundColor].bgColor} className={styles.bgColor} ></TriangleDiv>
        </div>
      </div>

      <SwipperStyle className={`${styles.intro__slider} default__margin--right`} >
        <Swiper
          fadeEffect={{
            crossFade: true
          }}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          
          slidesPerGroupSkip={1}
          spaceBetween={0}
          grabCursor={true}
          slidePrevClass={styles.prev__slide}
          keyboard={{
            enabled: true,
          }}
          onSlideChange={handleSlideChange}
          // loop={true}
          breakpoints={{
            769: {
              slidesPerView: 1,
              slidesPerGroupSkip: 1,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          speed={1000}
          modules={[Keyboard, Autoplay , Pagination]}
          className="mySwiper"
        >
          {
            sliderArray.map((slide, i) => {

              return (
                <SwiperSlide key={i}>

                  <ImageDiv
                    url={slide.image}
                    className={styles.slider__image__individual}
                    
                  >
                    <div className={styles.image__content}>
                      <MainTitles >{slide.heading}</MainTitles>
                      <MenuText >{slide.text}</MenuText>
                    </div>
                  </ImageDiv>
                </SwiperSlide>

              )
            })
          }
        </Swiper>
      </SwipperStyle>
    </div> 
  )
}

export default MainSlider