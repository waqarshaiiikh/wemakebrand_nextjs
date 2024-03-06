import { useRouter } from 'next/navigation';
import {  MenuText, SelectedMenuText } from '../../common/FontStyle/Fonts';
import styles from './ContactUs.module.css';
import {FaArrowRight} from 'react-icons/fa'
const ContactUs = () => {
    const navigate = useRouter();
  return (
    <div className={styles.ContactUs} id='contact'>
        <div className={`${styles.container__text__btn} default__padding--left default__padding--right`}>
            <div>

                <div className={styles.contents}>
                <MenuText className={styles.what__next}>
                WHERE DO YOU GO FROM HERE?
                </MenuText>
                <SelectedMenuText className={styles.from__you}>
                    WE ARE HERE TO HELP

                </SelectedMenuText>
                <SelectedMenuText className={styles.touch}>
                    GET IN TOUCH!
                </SelectedMenuText>
                </div>
                <div className={styles.pencilemark}>
                <div className={styles.line}></div>
                <div className={styles.pencilIcon}>
                 <svg className={styles.pencilSvg}width="20" height="20" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg"><path d="M36.204 1.044C32.02 2.814 5.66 31.155 4.514 35.116c-.632 2.182-1.75 5.516-2.483 7.409-3.024 7.805-1.54 9.29 6.265 6.265 1.893-.733 5.227-1.848 7.41-2.477 3.834-1.105 4.473-1.647 19.175-16.27 0 0 10.63-10.546 15.21-15.125C53 8.997 42.021-1.418 36.203 1.044Zm7.263 5.369c3.56 3.28 4.114 4.749 2.643 6.995l-1.115 1.7-4.586-4.543-4.585-4.544 1.42-1.157C39.311 3.18 40.2 3.4 43.467 6.413ZM37.863 13.3l4.266 4.304-11.547 11.561-11.547 11.561-4.48-4.446-4.481-4.447 11.404-11.418c6.273-6.28 11.566-11.42 11.762-11.42.197 0 2.277 1.938 4.623 4.305ZM12.016 39.03l3.54 3.584-3.562 1.098-5.316 1.641c-1.665.516-1.727.455-1.211-1.21l1.614-5.226c1.289-4.177.685-4.191 4.935.113Z"></path></svg>
                </div>
                </div>

            </div>

            <div className={`${styles.rightArrow} default__margin--right`} onClick={()=>{navigate.push("/contact-us")}}>
                <FaArrowRight className={styles.FaArrowRight}></FaArrowRight>
            </div>
        </div>
    </div>
  )
}

export default ContactUs