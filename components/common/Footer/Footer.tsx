"use client";
import styles from './Footer.module.css'
import logo from '@/public/assets/logos/WMB - MAIN LOGO - WHITE.png'
import { FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import phone from '@/public/assets/services icons/contact icons/contact icons-10.png';
import mail from '@/public/assets/services icons/contact icons/contact icons-06.png';
import emailjs from 'emailjs-com'
import useNotify from './useNotify'
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {

  const location = usePathname();
  const isProject = location !== '/';

  const {notify, setNotify} = useNotify();
  const [email, setEmail] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const templateParams = {
      email,
    }


    emailjs.send('service_59ymy4e', 'template_m1sbowv', templateParams, 'cbq1u1HwAD6X96uZP')
    .then(function () {
        setNotify({ status: true, text: 'Thank you for subscribing' })
        setEmail('')
      }, function () {
        setNotify({ status: true, text: 'Try again later' })
      });
  }

  const navigate = useRouter();
  return (
    <div style={{ paddingTop: `${isProject && '0'}` }} className={`${styles.footer} default__padding--left default__padding--right `}>
      <hr style={{ display: `${isProject && 'none'}` }} className={`${styles.line2} `}></hr>
      <div className={styles.upperSection}>

        <div className={styles.branding}>
          <div
            className={styles.logoWrapper}>
            <Link href='/#header' >
              <Image src={logo} width={272} height={85}  alt='weMakeBrand log' className={styles.logo+ ' w-auto h-auto'} />
            </Link>

          </div>
          <p className={styles.caption}>
            At WMB, we believe that design is not just about aesthetics; it&apos;s about creating meaningful experiences that leave a lasting impact. We are a multi-disciplinary team of passionate designers, dedicated to helping businesses and individuals bring their visions to life through captivating visual storytelling.
          </p>
          <div className={styles.hr}></div>

          <div className={styles.socialIconsWrapper}>
            <h1 className={styles.socialheading}>Follow us</h1>

            <div className={styles.socialIcon}><FaInstagram /></div>
            <div className={styles.socialIcon}><FaTiktok /></div>
            <div className={styles.socialIcon}><FaLinkedinIn /></div>
            <div className={styles.hr}></div>

          </div>

        </div>
        <div className={styles.contactInfo}>
          <div className={styles.heading}>
            <h2 className={styles.heading1}>Get in touch</h2>
          </div>
          <div className={styles.info}>
            <div className={styles.infoIcon}><Image src={phone} alt="mobile-icon" /> </div>
            <p className={styles.infoText1}>07852 126 551</p>
          </div>
          <div className={styles.info}>
            <div className={styles.infoIcon}><Image src={mail} alt='email' /></div>
            <p className={styles.infoText2}>info@wemakebrandsltd.com</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stayInTouch}>
            <div className={styles.hr}></div>

            <div className={styles.heading}>

              <h2 className={styles.heading2}>Stay in touch</h2>
            </div>

            <div className={styles.stayInTouchText}>
              <p>Get up to date with new projects and updates!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styles.subscription}>
                <input className={styles.input} type='email' placeholder=' Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className={styles.button} type='submit' >SUBSCRIBE</button>
              </div>
            </form>
            {notify.status && <div className={styles.notify}>
              <p>{notify.text}</p>
            </div>}
          </div>

        </div>
      </div>

      <div className={styles.footer2}>

        <div className={styles.menu}>

          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLink}><Link className={styles.list} href='/#header'>Home</Link></div>
            <div className={styles.footerLink}><Link className={styles.list} href='/projects'>Our Work</Link></div>
            <div className={styles.footerLink}><Link className={styles.list} href='/#services'>Services</Link></div>
            <div className={styles.footerLink}><Link className={styles.list} href='/#process' >Process</Link></div>
            <div className={styles.footerLink}><Link className={styles.list} href='/contact-us'>Contact Us</Link></div>
          </div>

          <div className={styles.sendUsABrief} onClick={()=>{navigate.push("/contact-us")}} >
            <p><span>————— </span>  Send us a brief</p>
          </div>

        </div>

        <div className={styles.lowerSection}>
          <div className={styles.left}>
            <span className={styles.copyrights1}>
              We Make Brands
            </span>
            <span className='hidden sm:block '> | </span>
            <span>Company Reg 11353687</span>

          </div>  

          <div className={styles.right}>
            <span className={styles.copyrights2}>
              Copyright &copy; 2024 All Rights Reserved
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer