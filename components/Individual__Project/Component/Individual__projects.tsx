import styles from './individual__projects.module.css';
import logo from '@/public/assets/logos/WMB - MAIN LOGO - BLACK.png'
import { RxCross2 } from 'react-icons/rx'
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { projectsType } from '@/components/common/data';
import { useRouter } from 'next/navigation';
const Individual__projects = ({ project }: { project: projectsType }) => {
    const navigate = useRouter();
    const openHome = () => {
        navigate.push('/');
    }
    const onClose = () => {
        navigate.back();
    }
    const openContact = () => {
        navigate.push("/contact-us");
    }

    return (
        <div className={styles.Individual__projects}>
            <div className={styles.outer__close__btn} onClick={onClose} >
                <RxCross2 />
            </div>
            <div className={styles.Images__container}>
                <div className={styles.project__description} >

                    <div className={styles.logo_color_template}>
                        <div className={styles.logo}>
                            <Image src={logo} alt='WeMakeBrand-logo' onClick={openHome} />
                        </div>
                        <div className={styles.color_template}>
                            <div className={styles.group_color}>
                                {project?.color?.map((color, i) => {
                                    return (
                                        <div key={i} style={{ backgroundColor: `rgb(${color})`, border: color === '255,255,255' ? '1px solid #cccccc' : 'none' }} className={` ${styles.color_div}`}></div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className={styles.projects__description}>
                        <p className={styles.paragraph}>Client</p>
                        <h3 className={styles.heading}>{project?.client}</h3>

                        <p className={styles.paragraph}>Deliverables</p>
                        <h3 className={styles.heading}>{project?.text}</h3>

                        <p className={styles.paragraph}>Summary</p>
                        <h3 className={styles.heading}>{project?.summary}</h3>
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
                    </div>

                </div>
                <div className={styles.Images}>

                    {project?.multipleImages ? project.images.map(
                        (image, i) => <div className={styles.Image} key={i}>
                             <Image src={image} placeholder='blur' quality={40} alt="Project image" />
                            </div>
                        ) :
                        <div className={styles.Image}>
                            <Image src={project?.img} placeholder='blur' quality={40} alt="Project image" />
                        </div>
                    }
                    {project?.hasVideo &&
                        <video
                            className={styles.Video}
                            width="100%"
                            controls
                            // frameborder="0" 
                            // allowfullscreen
                            autoPlay={false}
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
                            // frameborder="0" 
                            title='to'
                            allow="autoplay; fullscreen; picture-in-picture"
                        // allowfullscreen
                        >

                        </iframe>
                    }


                </div>
            </div>
        </div>
    )
}

export default Individual__projects