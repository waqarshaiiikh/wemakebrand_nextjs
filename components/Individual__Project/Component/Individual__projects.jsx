import styles from './individual__projects.module.css';
import logo from '../../../assets/logos/WMB - MAIN LOGO - BLACK.png'
import { RxCross2 } from 'react-icons/rx'
import VideoDisplay from '../../Home/Component/VideoDisplay/VideoDisplay';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { ContactUsMenu } from '../../../Component/Menu/Menu';

const Individual__projects = ({ project, onClose }) => {
    const navigate = useNavigate();
    const openHome = () => {
        navigate('/');
    }
    const [contactModal, setContactModal] = useState(false);
    const openContact = ()=>{
        setContactModal(true);
    }
    const closeMenu = ()=>{
        setContactModal(false);
    }


    return (
        <div className={styles.Individual__projects}>
            {/* <div className={styles.outer__close__btn} onClick={onClose}>
                <div className={styles.inner__close__btn}>
                    <label >Back</label>
                </div>
            </div> */}
            <div className={styles.outer__close__btn} onClick={onClose} >
                <RxCross2 onClick={onClose} />
            </div>
            <div className={styles.Images__container}>
                <div className={styles.project__description} >

                    <div className={styles.logo_color_template}>
                        <div className={styles.logo}>
                            <img src={logo} alt='WeMakeBrand-logo' onClick={openHome} />
                        </div>
                        <div className={styles.color_template}>
                            <div className={styles.group_color}>
                                {project.color.map((color, i) => {
                                    console.log(color);
                                    return (
                                        <div key={i} style={{ backgroundColor: `rgb(${color})`, border: color === '255,255,255' ? '1px solid #cccccc' : 'none' }} className={` ${styles.color_div}`}></div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className={styles.projects__description}>
                        <p className={styles.paragraph}>Client</p>
                        <h3 className={styles.heading}>{project.client}</h3>

                        <p className={styles.paragraph}>Deliverables</p>
                        <h3 className={styles.heading}>{project.text}</h3>

                        <p className={styles.paragraph}>Summary</p>
                        <h3 className={styles.heading}>{project.summary}</h3>
                        <h3 className={styles.heading}>{project?.summary2}</h3>
                        <div className={styles.contactUsContainer} >
                            <div className={styles.contactUsSize}>
                                <div className={styles.contactText} >
                                    <p className={styles.anyQuestion}>ANY QUESTIONS?</p>
                                    <p className={styles.contactUsText}>CONTACT US</p>
                                </div>

                                <div className={styles.rightArrow} onClick={openContact}>
                                    <FaArrowRight className={styles.FaArrowRight}></FaArrowRight>
                                </div>
                            </div>
                        </div>
                       {contactModal && <ContactUsMenu closeMenu={closeMenu}></ContactUsMenu>}
                    </div>

                </div>
                <div className={styles.Images}>

                    {project?.multipleImages ? project.images.map((image, i) => <div className={styles.Image} key={i}><img src={image} alt="Project image" /></div>) :
                        <div className={styles.Image}><img src={project.img} alt="Project image" /></div>
                    }
                    {project?.hasVideo &&
                        <video
                            className={styles.Video}
                            width="100%"
                            // loading='lazy'
                            controls
                            // height={}
                            // height="550"
                            // frameborder="0" 
                            autoPlay={false}
                        // allowfullscreen
                        >
                            <source src={project.videoSrc} type="video/mp4"></source>
                        </video>}
                    {
                        project?.iframe && <iframe src={project.videoSrc}
                            width="100%"
                            // height="600"
                            // className={styles.Video}
                            style={{
                                aspectRatio: '16/9',
                                backgroundColor: 'black'
                            }}
                            frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    }


                </div>
            </div>
        </div>
    )
}

export default Individual__projects