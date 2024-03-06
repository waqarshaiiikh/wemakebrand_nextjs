import styles from './Testimonials.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/scrollbar";
import "./swiperStyles.css";

import commas from '@/public/assets/services icons/testimonials icons/quote mark - orange.png'

import logo1 from '@/public/assets/testimonials/Artboard 1.png'
import logo2 from '@/public/assets/testimonials/Artboard 7.png'
// import logo3 from '@/public/assets/testimonials/Artboard P9.png'
import logo4 from '@/public/assets/testimonials/Artboard 2.png'
import logo5 from '@/public/assets/testimonials/Artboard 5.png'
import { styled } from 'styled-components';
import Image from 'next/image';

const testimonials = [
  { text: 'Always deliver high level assets which are above and beyond what we expect. Have been working with these guys for the past few years and we have a great understanding, and long may it continue!', brandLogo: logo5 },
  { text: "We didn't know what to expect but when they took charge a massive weight was lifted off of our shoulders, we felt we could trust them in their decisions. The final product was better than we could have imagined!", brandLogo: logo2 },
  { text: 'They captured our personalities perfectly through the artwork, we were blown away. We have had so many compliments on the logo since we got it made!', brandLogo: logo1 },
  { text: 'Really loved working with these guys, they always make time for us and have set a very high standard when it comes to their designs.', brandLogo: logo4 },
  // { text: "Fantastic, I'm always totally blown away by the creative visuals and the conceptual work you guys  present to us!", brandLogo: logo3 },
]

const WrapperDivSwipperCss = styled.div(() => ({
  '& .swiper-scrollbar-drag': {
    backgroundColor: 'rgb(255, 159, 28) !important'
  },
  '& .swiper-slide': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& .swiper': {
    width: '100%',
    height: '100%',

  }
}));

const Testimonials = () => {
  return (
    <WrapperDivSwipperCss className={`${styles.wrapper} default__padding--left default__padding--right`}>
      {/* <div className={styles.brands}>
        <img src={brands} />
      </div> */}
      <div className={styles.testimonials}>
        <Swiper
          slidesPerView={1}
          fadeEffect={{
            crossFade: true
          }}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={50}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          breakpoints={
            {
              200:{
                slidesPerView: 1,
                slidesPerGroupSkip: 1,
              },

              600: {
                slidesPerView: 1,
                slidesPerGroupSkip: 1,
              },
              900: {
                slidesPerView: 2,
                slidesPerGroupSkip: 1,
              },
            }
          }
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map(({ text, brandLogo }, i) =>
            <SwiperSlide key={i}>
              <div className={styles.card}>

                <div className={styles.comas}>
                  <Image src={commas} alt='commas' />
                </div>
                <div className={styles.comments}>
                  <p>{text}</p>
                </div>
                <div className={styles.brandLogo}>
                  <Image src={brandLogo} alt='brand logo' />
                </div>
              </div>
            </SwiperSlide>)}
        </Swiper>
      </div>
    </WrapperDivSwipperCss>

  )
}

export default Testimonials