import { Box } from 'components/Box/Box.styled';
import { useEffect } from 'react';
import {
  AddBtnNew,
  ButtonBox,
  HeroSectionNew,
  LeadBtnNew,
  TitleNew
} from './Hero.styled';
import { HeroSwiperNew } from './HeroSwiper/HeroSwiperNew';

export const HeroNew = ({ toggleModal }) => {

  const swapBtnText = e => {
    const sillyTexts = [
      'Кнопка (щоб кнопать)',
      'Кніпка',
      'Хіп-хопка',
      'Гоп-стопка',
      'Женя не знає, нащо ця кнопка, тому вона (кнопка) робить хуйню',
      'Віхтур блядь, що ця кнопка має робити',
      'Яна, привіт',
      'Куди йдем обідати',
      'КНОПЦІЯ',
      'Баттон',
      'Knopka',
      'ЗЛОЇБУЧЕ КНОПІЩЕ',
      'Please, try again later'
    ];
    e.target.textContent = sillyTexts[Math.floor(Math.random()*sillyTexts.length)]
  };

  useEffect(() => {}, []);

  return (
    <HeroSectionNew id="hero">
      <Box>
        <TitleNew>AP Education Center – знання, що змінюють майбутнє</TitleNew>

        <ButtonBox>
          <LeadBtnNew onClick={toggleModal}>КОНСУЛЬТАЦІЯ</LeadBtnNew>

          <AddBtnNew onClick={swapBtnText}>КНОПКА</AddBtnNew>
        </ButtonBox>

        {/* <Description>
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
        </DescriptionTrigger> */}
      </Box>
      <HeroSwiperNew toggleModal={toggleModal} />
    </HeroSectionNew>
  );
};
