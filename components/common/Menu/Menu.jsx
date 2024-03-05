import styles from "./Menu.module.css";
import styles2 from "./Menu2.module.css";
import logoWhite from "@/public/assets/logos/WMB - ICON LOGO - WHITE.png";
import phone from "@/public/assets/services icons/contact icons/contact icons-10.png";
import mail from "@/public/assets/services icons/contact icons/contact icons-06.png";
import instagram from "@/public/assets/services icons/contact icons/contact icons-07.png";
import linkedin from "@/public/assets/services icons/contact icons/contact icons-08.png";
import tiktok from "@/public/assets/services icons/contact icons/contact icons-09.png";

import { fadeInRightBig } from "react-animations";
import { keyframes, styled } from "styled-components";
import { useCallback, useState } from "react";
import successIcon from "@/public/assets/CONTACTS PAGE/site icons-08.png";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const fadInKeyFrame = keyframes`${fadeInRightBig}`;

const FadeInDiv = styled.div`
  animation: 0.5s ${fadInKeyFrame};
`;
const FadeInDiv2 = styled.div`
  animation: 1s ${fadInKeyFrame};
`;

const Menu = ({ closeMenu }) => {
  const navigate = useRouter();
  const location = usePathname();
  const active = location === "/" ? true : false;
  const [contactModal, setContactModal] = useState(false);
  const openContact = () => {
    setContactModal(true);
  };
  const closeContactMenu = () => {
    setContactModal(false);
  };
  return (
    <>
      {contactModal && <ContactUsMenu closeMenu={closeMenu}></ContactUsMenu>}

      <div className={styles.bigMenuContainer}>
        <FadeInDiv
          className={styles.nonBigMenu}
          onClick={closeMenu}
        ></FadeInDiv>
        <FadeInDiv2 className={styles.bigMenu}>
          <div className={styles.cross_icon}>
            <RxCross2 onClick={closeMenu} />
          </div>

          <div className={`${styles.menuWrapperGrid} ${styles.menu1}`}>
            <div className={styles.brand__text_div}>
              <div className={styles.brand__text}>
                <div className={styles.menuLogo}>
                  <img
                    src={logoWhite}
                    alt='logo-white'
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>

                <div className={styles.menuGetInTouch}>
                  <div className={styles.heading}>
                    <h1 className={styles.heading1}>Get in Touch</h1>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.infoIcon}>
                      <img src={phone} alt='mobile-icon' />
                    </div>
                    <p className={styles.infoText1}>07852 126 551</p>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={styles.infoIcon}>
                      <img src={mail} alt='email' />
                    </div>
                    <p className={styles.infoText2}>info@wemakebrandsltd.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.centerContainer}></div>

            <div className={styles.rightContainer}>
              <div className={styles.menuNav}>
                <div className={`${styles.menuNavHeading}`}>
                  <h1>Menu</h1>
                </div>
                <div
                  className={`${styles.menuNavItem} ${active && styles.active}`}
                >
                  <Link to='/#header' onClick={closeMenu}>
                    Home
                  </Link>
                </div>
                <div
                  className={`${styles.menuNavItem} ${
                    !active && styles.active
                  }`}
                >
                  <Link to='/Projects' onClick={closeMenu}>
                    Our Work
                  </Link>
                </div>
                <div className={`${styles.menuNavItem}`}>
                  <Link to='/#services' onClick={closeMenu}>
                    Services
                  </Link>
                </div>
                <div className={`${styles.menuNavItem}`}>
                  <Link to='/#process' onClick={closeMenu}>
                    Process
                  </Link>
                </div>
                <div className={`${styles.menuNavItem}`}>
                  <Link onClick={openContact}>Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menuWrapperGrid}>
            <div className={styles.followText}>
              <p className={`${styles.follow__us__text}`}>
                Follow us on Socials
              </p>
            </div>
            <div className={styles.middle}>
              <hr className={styles.Follow__us__line} />
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.icons}>
                <img src={instagram} alt='instagram' />
                <img src={tiktok} alt='tiktok' />
                <img src={linkedin} alt='linkedin' />

                {/* <Instagram /> */}
                {/* <Tiktok />
              <Linkedin /> */}
              </div>
            </div>
          </div>
        </FadeInDiv2>
      </div>
      {contactModal && (
        <ContactUsMenu closeMenu={closeContactMenu}></ContactUsMenu>
      )}
    </>
  );
};

Menu.propTypes = { closeMenu: PropTypes.func.isRequired };

export const ContactUsMenu = ({ closeMenu }) => {
  const navigate = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [service, setService] = useState("none");
  const [find, setFind] = useState("none");
  const [message, setMessage] = useState("");

  const [submitState, setSubmitState] = useState(false);
  const handleSubmit = () => {
    // setSubmitState(true);
    sendEmail();
  };
  const sendEmail = useCallback(() => {
    if (
      firstName == "" ||
      lastName == "" ||
      company == "" ||
      email == "" ||
      phoneNum == "" ||
      service == "" ||
      message == ""
    ) {
      alert("Please fill all the required information.");
    } else {
      const templateParams = {
        firstName,
        lastName,
        company,
        email,
        phoneNum,
        service,
        find,
        message,
        from_name: "WeMakeBrandsMailer",
      };

      emailjs
        .send(
          "service_59ymy4e",
          "template_0sg3ete",
          templateParams,
          "cbq1u1HwAD6X96uZP"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitState(true);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
    //   const consfig = {
    //     Host : "smtp.elasticemail.com",
    //     Username : "username",
    //     Password : "password",
    //     Port : "port",

    //     To : 'them@website.com',
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    //   };

    //   Email.send({

    //   }).then(

    //   message => alert(message)
    // );
  }, [firstName, lastName, company, email, find, phoneNum, service, message]);

  return <div className={styles2.bigMenuContainer}>
      <FadeInDiv2
        className={styles2.nonBigMenu}
        onClick={closeMenu}
      ></FadeInDiv2>
      <FadeInDiv2 className={`${styles2.bigMenu} ${styles2.contactUsBigMenu}`}>
        <div className={styles2.menu1Wrapper}>
          <div
            className={`${styles2.menuWrapperGrid} ${styles2.menu1}  ${styles2.contactUs}`}
          >
            <div className={styles2.brand__text_div}>
              <div className={styles2.brand__text}>
                <div className={styles2.menuLogo}>
                  <Link href='/'>
                    <Image src={logoWhite} alt='logo in white background' />
                  </Link>
                </div>

                <div className={styles2.menuGetInTouch}>
                  <div className={styles2.heading}>
                    <h1 className={styles2.heading1}>Get in Touch</h1>
                  </div>
                  <div className={styles2.info}>
                    <div className={styles2.infoIcon}>
                      <Image src={phone} alt='contact' />
                    </div>
                    <p className={styles2.infoText1}>07852 126 551</p>
                  </div>
                  <div className={`${styles2.info} ${styles2.margin}`}>
                    <div className={styles2.infoIcon}>
                      <Image src={mail} alt='email' />
                    </div>
                    <p className={styles2.infoText2}>
                      info@wemakebrandsltd.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles2.menu2}`}>
              <div className={styles2.followText}>
                <p className={`${styles2.follow__us__text}`}>
                  Follow us on Socials
                </p>
              </div>
              <div className={styles2.rightContainer}>
                <div
                  className={`${styles2.icons} ${styles2.icon__on__contact}`}
                >

                  <Image src={instagram} alt='instagram' />
                  <Image src={tiktok} alt='tiktok' />
                  <Image src={linkedin} alt='linkedin' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles2.contact__Us__Form}>
          {!submitState && (
            <div className={styles2.Form__Container}>
              <div className={styles2.formHeading}>
                CONTACT US... <br /> LETS WORK
              </div>
              <div className={styles2.FormInput1}>
                <input
                  type='text'
                  required
                  placeholder='FIRST NAME'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={styles2.FormInput2}>
                <input
                  type='text'
                  required
                  placeholder='LAST NAME'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles2.FormInput3}>
                <input
                  type='text'
                  required
                  placeholder='COMPANY'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className={styles2.FormInput4}>
                <input
                  type='email'
                  required
                  placeholder='EMAIL ADDRESS'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles2.FormInput5}>
                <input
                  type='phone'
                  required
                  placeholder='PHONE NUMBER'
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
              </div>
              <div className={styles2.FormInput6}>
                <select
                  name='subject'
                  required
                  id='subject'
                  className={styles.selectBox}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value='none' disabled hidden>
                    SERVICE
                  </option>
                  <option value='Logo Design'>
                    {/* <h1>  */}
                    Logo Design
                    {/* </h1> */}
                  </option>
                  <option value='Print Design'>Print Design</option>
                  <option value='Social Content'>Social Content</option>
                  <option value='Brand Identity'>Brand Identity</option>
                  <option value='Web Design'>Web Design</option>
                  <option value='others'>Other</option>
                </select>
              </div>
              <div className={styles2.FormInput9}>
                <select
                  name='find'
                  required
                  id='find'
                  className={styles.selectBox}
                  value={find}
                  onChange={(e) => setFind(e.target.value)}
                >
                  <option value='none' disabled hidden>
                    How did you find us?
                  </option>
                  <option value='Instagram'>Instagram</option>
                  <option value='TikTok'>TikTok</option>
                  <option value='LinkedIn'>LinkedIn</option>
                  <option value='Google'>Google</option>
                  <option value='Friends & Family'>Friends & Family</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className={styles2.FormInput7}>
                <textarea
                  required
                  type='text'
                  placeholder='LET US KNOW HOW WE CAN HELP...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className={styles2.FormInput8}>
                <button type='submit' onClick={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            </div>
          )}

          {submitState && (
            <div className={styles2.statusContainer}>
              <div className={styles2.success__container}>
                <div>
                  <h1>
                    <span className={styles2.gotIt}>GOT IT!</span> We will be
                    <br /> in touch asap. Looking forward to working together!
                  </h1>
                </div>
                <div className={styles2.successIcon}>
                  <Image src={successIcon} alt='submit' />
                </div>
              </div>
              {/* <h1>
                in touch asap. Looking forward to working together!
              </h1> */}
            </div>
          )}
        </div>
      </FadeInDiv2>
    </div>
};

export default Menu;
