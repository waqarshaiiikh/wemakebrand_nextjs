import styles from './Footer.module.css'
import logo from '../../assets/logos/WMB - MAIN LOGO - WHITE.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { GrYoutube } from 'react-icons/gr'
import { FaPinterestSquare, FaVimeoSquare } from 'react-icons/fa'
import location__image from '../../assets/services icons/location.svg';
import { FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { ContactUsMenu } from '../Menu/Menu'
import phone from '../../assets/services icons/contact icons/contact icons-10.png';
import mail from '../../assets/services icons/contact icons/contact icons-06.png';
import { GiDividedSpiral } from 'react-icons/gi'
import emailjs from 'emailjs-com'
import useNotify from './useNotify'


const Footer = () => {
  const [contactModal, setContactModal] = useState(false);
  const openContact = () => {
    setContactModal(true);
  }
  const closeMenu = () => {
    setContactModal(false);
  }
  const location = useLocation();
  const isProject = location.pathname !== '/';

  const {notify, setNotify} = useNotify();
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
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

  return (
    <div style={{ paddingTop: `${isProject && '0'}` }} className={`${styles.footer} default__padding--left default__padding--right `}>
      <hr style={{ display: `${isProject && 'none'}` }} className={`${styles.line2} `}></hr>
      <div className={styles.upperSection}>

        <div className={styles.branding}>
          <div
            //  onClick={() => {
            //     navigate('/')
            //   }} 
            className={styles.logoWrapper}>
            <HashLink to='/#header'>
              <img src={logo} className={styles.logo} />
            </HashLink>

          </div>
          <p className={styles.caption}>
            At WMB, we believe that design is not just about aesthetics; it's about creating meaningful experiences that leave a lasting impact. We are a multi-disciplinary team of passionate designers, dedicated to helping businesses and individuals bring their visions to life through captivating visual storytelling.
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
            <div className={styles.infoIcon}><img src={phone} alt="mobile-icon" /> </div>
            <p className={styles.infoText1}>07852 126 551</p>
          </div>
          <div className={styles.info}>
            <div className={styles.infoIcon}><img src={mail} alt='email' /></div>
            <p className={styles.infoText2}>info@wemakebrandsltd.com</p>
          </div>
          {/* <div className={styles.info}>
              <div className={styles.infoIcon}><img src={location__image} alt='location'/></div>
              <p className={styles.infoText3}>Grosvenor House, 11 St. Paul's Square, Birmingham B3 1RB</p>
            </div> */}

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
            <div className={styles.footerLink}><HashLink className={styles.list} to='/#header'>Home</HashLink></div>
            <div className={styles.footerLink}><Link className={styles.list} to='/Projects'>Our Work</Link></div>
            <div className={styles.footerLink}><HashLink className={styles.list} to='/#services'>Services</HashLink></div>
            <div className={styles.footerLink}><HashLink className={styles.list} to='/#process' >Process</HashLink></div>
            <div className={styles.footerLink}><HashLink className={styles.list} onClick={openContact}>Contact Us</HashLink></div>
          </div>
          {contactModal && <ContactUsMenu closeMenu={closeMenu}></ContactUsMenu>}

          <div className={styles.sendUsABrief} onClick={openContact} >
            <p><span>————— </span>  Send us a brief</p>
          </div>

        </div>

        <div className={styles.lowerSection}>
          <div className={styles.left}>
            <span className={styles.copyrights1}>
              We Make Brands
            </span>
            <span className={styles.line}> | </span>
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