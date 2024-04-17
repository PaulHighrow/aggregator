import { Box } from 'components/Box/Box.styled';
import { useEffect } from 'react';
import {
  AddBtnNew,
  ButtonBox,
  HeroSectionNew,
  LeadBtnNew,
  TitleNew,
} from './Hero.styled';
import { HeroSwiperEn } from './HeroSwiper/HeroSwiperEn';

export const HeroEnglish = ({ toggleModal, toggleTrialModal }) => {
  useEffect(() => {}, []);

  return (
    <HeroSectionNew id="hero">
      <Box>
        <TitleNew>Вивчення англійської з нуля</TitleNew>

        <ButtonBox>
          <LeadBtnNew onClick={toggleModal}>КОНСУЛЬТАЦІЯ</LeadBtnNew>

          <AddBtnNew onClick={toggleTrialModal}>ПРОБНИЙ УРОК</AddBtnNew>
        </ButtonBox>
      </Box>
      <HeroSwiperEn toggleModal={toggleModal} />
    </HeroSectionNew>
  );
};
