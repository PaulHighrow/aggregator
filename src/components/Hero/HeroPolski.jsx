import { Box } from 'components/Box/Box.styled';
import { ButtonBox, HeroSectionNew, LeadBtnNew, TitleNew } from './Hero.styled';
import { HeroSwiperPl } from './HeroSwiper/HeroSwiperPl';

export const HeroPolski = ({ toggleModal, toggleTrialModal }) => {
  return (
    <HeroSectionNew id="hero">
      <Box>
        <TitleNew>Вивчення польської з нуля</TitleNew>

        <ButtonBox>
          <LeadBtnNew onClick={toggleModal}>КОНСУЛЬТАЦІЯ</LeadBtnNew>

          {/* <AddBtnNew onClick={toggleTrialModal}>ПРОБНИЙ УРОК</AddBtnNew> */}
        </ButtonBox>
      </Box>
      <HeroSwiperPl toggleModal={toggleModal} />
    </HeroSectionNew>
  );
};
