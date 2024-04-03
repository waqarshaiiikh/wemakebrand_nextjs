"use client"
import styles from './Projects_Showcase.module.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn, zoomIn , zoomInUp} from 'react-animations';
import Image from 'next/image';
import Link from 'next/link';
const fadInKeyFrame = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 1.5s ${fadInKeyFrame};
`


const Projects_Showcase = ({ projects}: {projects: any[]}) => {

  return (
    <div className={styles.Projects_Showcase}>
        <div className={styles.gridContainer}>
          {projects.map((project) => {
            const { id, img, title, text } = project
            return (
              <Link key={id} href={`/projects/${id}`} className={`${styles.gridItem} group overflow-hidden`} style={{cursor: 'pointer'}} >
                <Image  src={img} alt='project image' placeholder='blur' className='group-hover:scale-105 transition duration-1000 '/>
                  <FadeInDiv className={`${styles.overlay} group-hover:flex`}>
                    <div className={styles.content}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                  </FadeInDiv>
              </Link>
            )
          })}
        </div>
    </div>
  );
}

export default Projects_Showcase