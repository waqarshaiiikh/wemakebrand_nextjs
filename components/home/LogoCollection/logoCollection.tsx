import styles from "./LogoCollection.module.css";
import logo1 from "@/public/assets/testimonials/Artboard 1.png";
import logo2 from "@/public/assets/testimonials/Artboard 2.png";
import logo4 from "@/public/assets/testimonials/Artboard 4.png";
import logo5 from "@/public/assets/testimonials/Artboard 5.png";
import logo7 from "@/public/assets/testimonials/Artboard 7.png";
import logo9 from "@/public/assets/testimonials/Artboard 9.png";
import logo10 from "@/public/assets/testimonials/Artboard 10 copy 2.png";
import logo11 from "@/public/assets/testimonials/Artboard 10 copy 3-1.png";
import logo12 from "@/public/assets/testimonials/Artboard 10 copy 3-2.png";
import logo13 from "@/public/assets/testimonials/Artboard 10 copy 3.png";
import logo14 from "@/public/assets/testimonials/Artboard 10 copy.png";
import logo15 from "@/public/assets/testimonials/Artboard 10.png";
import Image from "next/image";

const logos = [
  logo1,
  logo2,
  logo4,
  logo5,
  logo7,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
];


const logoCollection = () => {
  return (
    <div
      className={`${styles.logoCollection} default__padding--left default__padding--right`}
    >
      <div className={styles.where}>
        <h2>OUR CLIENTS</h2>
        <p>
          Here are some of the businesses who we have been
          <br />
          able to collaborate with over the years.
          <br />
          <span> </span>
          We hope to add you to the list!
        </p>
      </div>
      <div className={styles.logosContainer}>
        {logos.map((logo, i) => (
          <div className={styles.logo} key={i}>
            <Image src={logo} alt='clients logo' />
          </div>
        ))}
      </div>
      <hr
        className={`${styles.line2} default__margin--left default__margin--right`}
      ></hr>
      <div className={`${styles.where} ${styles.where2}`}>
        <h2>TESTIMONIALS</h2>
        <p>Here are a few kind words from some of our clients…</p>
      </div>
    </div>
  );
};

export default logoCollection;
