import { Box } from 'components/Box/Box.styled';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  BohateraVector,
  Description,
  DescriptionMoreText,
  DescriptionSiteText,
  DescriptionTrigger,
  DescriptionUnderlineLong,
  DescriptionUnderlineShort,
  HeroSection,
  SubTitle,
  Title,
  TitleBlock,
  TitleSketchPol,
} from './Hero.styled';
import { HeroSwiperPol } from './HeroSwiper/HeroSwiperPol';

export const HeroPolski = ({ toggleModal }) => {
  const [isMore, setIsMore] = useState(false);
  const [isSketchHidden, setIsSketchHidden] = useState(true);
  const [isSubtitleHidden, setIsSubtitleHidden] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const showMore = () => {
    setIsMore(isMore => !isMore);
  };

  useEffect(() => {
    const showSubtitle = setTimeout(() => {
      setIsSubtitleHidden(isHidden => (isHidden = false));
    }, 1500);

    const showSketch = setTimeout(() => {
      setIsSketchHidden(isHidden => (isHidden = false));
    }, 4300);

    return () => {
      clearTimeout(showSubtitle);
      clearTimeout(showSketch);
    };
  }, []);

  return (
    <HeroSection id="hero">
      <Box>
        <Title>
          <TitleBlock>OD ZERA DO</TitleBlock>{' '}
          <SubTitle ref={ref}>
            BOHATERA{inView && !isSketchHidden && <TitleSketchPol />}
            {!isSubtitleHidden && <BohateraVector />}
          </SubTitle>
        </Title>
        <Description>
          <span>
            Ласкаво просимо до AP Education Center! Обравши нас, ви обираєте
            особливий шлях навчання {isMore ? ',' : '...'}
          </span>
          <DescriptionMoreText
            className={isMore ? 'more-shown' : 'more-hidden'}
          >
            {' '}
            де кожен етап – це унікальне відкриття. Від оформлення заявки до
            отримання навчального ноутбука ми пильнуємо, щоб ваша подорож з нами
            була не лише легкою, але й повною приємних бонусів.{' '}
            <DescriptionSiteText>
              На нашому веб-сайті ви знайдете всю необхідну інформацію, що
              стосується нашого освітнього центру. Приєднуйтеся до нас зараз та
              розпочніть Ваш унікальний шлях навчання!
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
      <HeroSwiperPol toggleModal={toggleModal} />
    </HeroSection>
  );
};
