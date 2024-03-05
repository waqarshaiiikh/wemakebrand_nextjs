import Individual__projects from './Component/Individual__projects';
import { fadeInDown} from 'react-animations';
import { keyframes, styled } from 'styled-components';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const fadInKeyFrame = keyframes`${fadeInDown}`;

const FadeInDiv = styled.div`
  // animation: 2s ${fadInKeyFrame};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index:20000;
  background-color: white;
  @media screen and (max-width: 900px) {
    overflow-y: scroll;
  }
`

const Index = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal( 

  <FadeInDiv>
      <Individual__projects project={project} onClose={onClose} />
      {/* <Footer/> */}
  </FadeInDiv> ,  document.getElementById('modal'));
}

export default Index;