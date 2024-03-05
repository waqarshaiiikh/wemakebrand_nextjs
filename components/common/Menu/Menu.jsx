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
  const openContact = () => {
    setContactModal(true);
  };
  const closeContactMenu = () => {
    setContactModal(false);
  };
  return (
    <>

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
                  <Image
                    src={logoWhite}
                    alt='logo in white color'
                    onClick={() => {
                      navigate.push("/");
                    }}
                  />
                </div>

                <div className={styles.menuGetInTouch}>
                  <div className={styles.heading}>
                    <h1 className={styles.heading1}>Get in Touch</h1>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.infoIcon}>
                      <Image src={phone} alt='mobile-icon' />
                    </div>
                    <p className={styles.infoText1}>07852 126 551</p>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={styles.infoIcon}>
                      <Image src={mail} alt='email' />
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
                  <Link href='/#header' onClick={closeMenu}>
                    Home
                  </Link>
                </div>
                <div
                  className={`${styles.menuNavItem} ${
                    !active && styles.active
                  }`}
                >
                  <Link href='/Projects' onClick={closeMenu}>
                    Our Work
                  </Link>
                </div>
                <div className={`${styles.menuNavItem}`}>
                  <Link href='/#services' onClick={closeMenu}>
                    Services
                  </Link>
                </div>
                <div className={`${styles.menuNavItem}`}>
                  <Link href='/#process' onClick={closeMenu}>
                    Process
                  </Link>
                </div>
                <div className={`${styles.menuNavItem}`}>
                  <Link href='/contact-us'>Contact Us</Link>
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
                <Image src={instagram} alt='instagram' />
                <Image src={tiktok} alt='tiktok' />
                <Image src={linkedin} alt='linkedin' />
              </div>
            </div>
          </div>
        </FadeInDiv2>
      </div>
     
    </>
  );
};

Menu.propTypes = { closeMenu: PropTypes.func.isRequired };


export default Menu;
