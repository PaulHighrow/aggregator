import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import { useState } from 'react';
import {
  Description,
  DescriptionMoreText,
  DescriptionSiteText,
  DescriptionTrigger,
  DescriptionUnderlineLong,
  DescriptionUnderlineShort,
  HeroSection,
  LesserTitle,
  Title
} from './Hero.styled';
import { HeroSwiperDeu } from './HeroSwiper/HeroSwiperDeu';

export const HeroDeutsch = ({ toggleModal }) => {
  const [isMore, setIsMore] = useState(false);
  // const [isSketchHidden, setIsSketchHidden] = useState(true);
  // const [isSubtitleHidden, setIsSubtitleHidden] = useState(true);
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  // });

  const showMore = () => {
    setIsMore(isMore => !isMore);
  };

  // useEffect(() => {
  //   const showSubtitle = setTimeout(() => {
  //     setIsSubtitleHidden(isHidden => (isHidden = false));
  //   }, 1500);

  //   const showSketch = setTimeout(() => {
  //     setIsSketchHidden(isHidden => (isHidden = false));
  //   }, 3500);

  //   return () => {
  //     clearTimeout(showSubtitle);
  //     clearTimeout(showSketch);
  //   };
  // }, []);

  return (
    <HeroSection id="hero">
      <Box>
        <Title>
          НІМЕЦЬКА МОВА
          {/* <TitleBlock>VON NULL</TitleBlock> ZUM{' '}
          <SubTitle ref={ref}>
            HELDEN{inView && !isSketchHidden && <TitleSketchDeu />}
            {!isSubtitleHidden && <HeldenVector />}
          </SubTitle> */}
        </Title>
        <LesserTitle>Німецька мова - з нуля!</LesserTitle>
        <LeadBtn onClick={toggleModal}>
          {width >= 400 ? 'ШВИДКА КОНСУЛЬТАЦІЯ' : 'КОНСУЛЬТАЦІЯ'}
        </LeadBtn>
        <Description>
          <span>
            Ласкаво просимо до AP Education Center! {isMore ? ',' : '...'}
          </span>
          <DescriptionMoreText
            className={isMore ? 'more-shown' : 'more-hidden'}
          >
            {' '}
            Обравши наш онлайн-курс німецької мови, ви обираєте особливе
            навчання, де з кожним уроком ви відкриватимете для себе новий формат
            вивчення німецької мови. У Вас буде можливість обрати зручний формат
            навчання: самостійне вивчення або індивідуальне з репетитором. Наше
            навчання підходить як для дорослих, так і для дітей. Ми піклуємося
            про наших студентів, тому ми{' '}
            <b>
              даруємо навчальний ноутбук
            </b>{' '}
            для зручного доступу та комфортного навчання.{' '}
            <DescriptionSiteText>
              На нашому веб-сайті ви знайдете всю необхідну інформацію, що
              стосується нашого освітнього центру. Приєднуйтеся до нас вже
              сьогодні та розпочніть свою захоплюючу подорож у світ німецької
              мови!
            </DescriptionSiteText>
          </DescriptionMoreText>
        </Description>
        <DescriptionTrigger onClick={showMore}>
          {isMore ? 'Згорнути' : 'Дізнатись більше'}
          {isMore ? (
            <DescriptionUnderlineShort />
          ) : (
            <DescriptionUnderlineLong />
          )}
        </DescriptionTrigger>
      </Box>
      <HeroSwiperDeu toggleModal={toggleModal} />
    </HeroSection>
  );
};
