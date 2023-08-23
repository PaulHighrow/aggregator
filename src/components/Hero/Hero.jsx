import { Box } from 'components/Box/Box.styled';
import {
  BtnUnderlay,
  HeroLeadBtn,
  HeroSection,
  LoveBotIcon,
  LoveTopIcon,
  ScreamBotIcon,
  ScreamTopIcon,
  SubTitle,
  Title,
} from './Hero.styled';


export const Hero = ({ toggleModal }) => {
  return (
    <HeroSection id='hero'>
      <Box>
        <ScreamTopIcon/>
        <ScreamBotIcon/>
        <LoveTopIcon/>
        <LoveBotIcon/>
        <Title>SKILLHUB</Title>
        <SubTitle as={'h2'}>твоя платформа можливостей</SubTitle>
        <BtnUnderlay>
          <HeroLeadBtn onClick={toggleModal}>Надіслати заявку</HeroLeadBtn>
        </BtnUnderlay>
      </Box>
    </HeroSection>
  );
};
