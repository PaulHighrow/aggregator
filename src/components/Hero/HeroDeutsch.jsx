import { Box } from 'components/Box/Box.styled';
import { ButtonBox, HeroSectionNew, LeadBtnNew, TitleNew } from './Hero.styled';
import { HeroSwiperDe } from './HeroSwiper/HeroSwiperDe';

export const HeroDeutsch = ({ toggleModal, toggleTrialModal }) => {
  return (
    <HeroSectionNew id="hero">
      <Box>
        <TitleNew>Вивчення німецької з нуля</TitleNew>

        <ButtonBox>
          <LeadBtnNew onClick={toggleModal}>КОНСУЛЬТАЦІЯ</LeadBtnNew>

          {/* <AddBtnNew onClick={toggleTrialModal}>ПРОБНИЙ УРОК</AddBtnNew> */}
        </ButtonBox>
      </Box>
      <HeroSwiperDe toggleModal={toggleModal} />
    </HeroSectionNew>
  );
};
