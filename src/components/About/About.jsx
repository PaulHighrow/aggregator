import { Box } from 'components/Box/Box.styled';
import { useInView } from 'react-intersection-observer';
import {
  AboutAccent,
  AboutImg,
  AboutLeadBtn,
  AboutList,
  AboutListItem,
  AboutPic,
  AboutSection,
  AboutText,
  SectionTitle,
  Sketch,
} from './About.styled';

import { aboutImgsIndex } from 'img/aboutUs/aboutImgs';
const {
  about1Jpeg,
  about1Webp,
  about2Jpeg,
  about2Webp,
  about3Jpeg,
  about3Webp,
} = aboutImgsIndex;

export const About = ({ toggleModal }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <AboutSection id="aboutus">
      <Box>
        <SectionTitle ref={ref}>
          Про нас
          {inView && <Sketch />}
        </SectionTitle>
        <AboutList>
          <AboutListItem>
            <AboutText>
              <AboutAccent>А ми такі, нічогенькі:</AboutAccent> Skillhub
              Education – надає можливість вступити в навчальний заклад, поїхати
              на стажування, отримати роботу та в разі потреби - пройти курси
              підвищення кваліфікації.
            </AboutText>
            <AboutPic>
              <source srcSet={`${about1Webp} 1x`} type="image/webp" />
              <AboutImg src={`${about1Jpeg}`} alt="About us 1 image" />
            </AboutPic>
          </AboutListItem>
          <AboutListItem>
            <AboutPic>
              <source srcSet={`${about2Webp} 1x`} type="image/webp" />
              <AboutImg src={`${about2Jpeg}`} alt="About us 2 image" />
            </AboutPic>
            <AboutText>
              <AboutAccent>Можемо й краще, але шо вже:</AboutAccent> Skillhub
              Education – надає можливість вступити в навчальний заклад, поїхати
              на стажування, отримати роботу та в разі потреби - пройти курси
              підвищення кваліфікації.
            </AboutText>
          </AboutListItem>
          <AboutListItem>
            <AboutText>
              <AboutAccent>Купляй в нас щось або заявку залиши:</AboutAccent>{' '}
              Skillhub Education – надає можливість вступити в навчальний
              заклад, поїхати на стажування, отримати роботу та в разі потреби -
              пройти курси підвищення кваліфікації.
            </AboutText>
            <AboutPic>
              <source srcSet={`${about3Webp} 1x`} type="image/webp" />
              <AboutImg src={`${about3Jpeg}`} alt="About us 3 image" />
            </AboutPic>
          </AboutListItem>
        </AboutList>
        <AboutLeadBtn onClick={toggleModal}>Надіслати заявку</AboutLeadBtn>
      </Box>
    </AboutSection>
  );
};
