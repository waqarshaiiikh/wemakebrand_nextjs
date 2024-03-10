"use client"
import styles from './Projects_Showcase.module.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Image from 'next/image';
import Link from 'next/link';
const fadInKeyFrame = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
animation: 0.5s ${fadInKeyFrame};
`
const Projects_Showcase = ({ projects}: {projects: any[]}) => {

  return (
    <div className={styles.Projects_Showcase}>
        <div className={styles.gridContainer}>
          {projects.map((project) => {
            const { id, img, title, text } = project
            return (
              <Link key={id} href={`/projects/${id}`} className={`${styles.gridItem} group`} style={{cursor: 'pointer'}} >
                  <FadeInDiv className={`${styles.overlay} group-hover:flex`}>
                    <div className={styles.content}>
                      <h1>{title}</h1>
                      <p>{text}</p>
                    </div>
                  </FadeInDiv>
                <Image src={img} alt='project image' placeholder='blur' />
              </Link>
            )
          })}
        </div>
    </div>
  );
}

export default Projects_Showcase