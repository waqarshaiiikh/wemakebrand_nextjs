import styles from './Services.module.css';
import icon1 from '@/public/assets/OUR SERVICES/OUR SERVICES - ICONS-03.png';
import icon2 from '@/public/assets/OUR SERVICES/OUR SERVICES - ICONS-04.png';
import icon3 from '@/public/assets/OUR SERVICES/OUR SERVICES - ICONS-05.png';
import icon4 from '@/public/assets/OUR SERVICES/OUR SERVICES - ICONS-06.png';
import icon5 from '@/public/assets/OUR SERVICES/OUR SERVICES - ICONS-07.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Services = () => {
  const navigate = useRouter();
  return (
    <div className={styles.wrapper} id='services'>
      <div className={`${styles.heading__wrapper} default__padding--left default__padding--right`}>
        <h1 className={styles.heading}>OUR SERVICES</h1>
      </div>
      <div className={`${styles.service__collection} default__padding--left default__padding--right`}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>

            <div className={styles.icon}>
              <Image alt='icons' src={icon1} />
            </div>
            <div className={styles.content}>
              <h1>LOGO DESIGN</h1>
              <p>A well-designed logo should be memorable, versatile, and easily recognizable. It should convey the personality, values, and core message of the brand while resonating with the target audience.</p>
            </div>
          </div>

          <div className={styles.design}>

            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <Image alt='icon' src={icon2} />
              </div>
              <div className={styles.content}>
                <h1>PRINT DESIGN</h1>
                <p>Well-designed print materials are an essential marketing and communication strategy. We provide physical content that will effectively convey your information, attract attention, and leave a lasting impression on recipients.</p>
              </div>
            </div>
          </div>
          
         

          

          <div className={styles.identity}>
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <Image alt='icon' src={icon4} />
              </div>
              <div className={styles.content}>
                <h1>BRAND IDENTITY</h1>
                <p>We go beyond visual elements and extend to the overall experience and perception that customers have when interacting with your brand. Encompassing factors such as packaging, advertising, and the overall brand experience.</p>
              </div>
            </div>
          </div>
          <div className={styles.web}>
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <Image alt='icon' src={icon5} />
              </div>
              <div className={styles.content}>
                <h1>WEB DESIGN</h1>
                <p>By combining aesthetics, usability, and functionality we aim to produce an engaging and user-friendly website which will effectively communicate your brand&apos;s message. </p>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <Image alt='icon' src={icon3} />
              </div>
              <div className={styles.content}>
                <h1>SOCIAL CONTENT</h1>
                <p>We create engaging visuals using social assets and tailored content, capturing the attention of the target audience. Conveying your message effectively and encouraging user interaction on social platforms.</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.gridItem} ${styles.anyQuestionGrid}`} onClick={()=>navigate.push("/contact-us")}>
            < div className={styles.anyquestion}>
              <p className={styles.paragraph}>ANY QUESTIONS?</p> 
              <span className={styles.contacts}>CONTACT US</span>
            </div>
          </div>
          {/* {contactModal && <ContactUsMenu closeMenu={closeMenu}></ContactUsMenu>} */}

        </div>
      </div>
    </div>
  )
}

export default Services