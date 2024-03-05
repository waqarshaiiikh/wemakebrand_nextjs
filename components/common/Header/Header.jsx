"use client";
import styles from "./Header.module.css";
import MainLogoBlack from "@/public/assets/WMB - MAIN LOGO - BLACK.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const closeMenu = () => {
    setMenuVisibility(false);
  };

  

  return (
    <div className={`${styles.Header} default__spacing`} id='header'>
      <div className={styles.logo__container}>
        <Link href='/'>
          <Image
            src={MainLogoBlack}
            alt='logo'
            sizes='(max-width: 1150px) 100px, 500px'
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.goto__menu__container}>
        <div className={styles.goto__container}>
          <div className={styles.goto}>
            <Link className={`${styles.menu} ${styles.active}`} href='/#header'>
              HOME
            </Link>
          </div>
          <div className={styles.goto}>
            <Link href='/Projects' className={styles.menu}>
              OUR WORK
            </Link>
          </div>
          <div className={styles.goto}>
            <Link className={styles.menu} href='/#services'>
              SERVICES
            </Link>
          </div>
          <div className={styles.goto}>
            <Link className={styles.menu} href='/#process'>
              PROCESS
            </Link>
          </div>
          <div className={styles.goto}>
            <Link className={styles.menu} href='/contact-us' > 
              CONTACT US
            </Link>
          </div>
        </div>
        <div
          className={styles.menuIcon}
          onClick={() => setMenuVisibility(true)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      {menuVisibility && <Menu closeMenu={closeMenu} />}

    </div>
  );
};

export default Header;
