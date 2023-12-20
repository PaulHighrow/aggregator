import { SupportBackground, SupportBox } from './Support.styled';

export const Support = ({ isSupportOpen, isOpenedLast, sectionWidth }) => {
  const desktopWidth = (sectionWidth / 3) * 2;
  const mobileWidth = sectionWidth / 2;

  return (
    <>
      <SupportBox
        className={isSupportOpen ? 'shown' : 'hidden'}
        style={
          (isOpenedLast === 'support' ? { zIndex: '3' } : { zIndex: '0' },
          sectionWidth > 768
            ? { width: `${desktopWidth}px` }
            : { width: `${mobileWidth}px` })
        }
      >
        <SupportBackground
          width={sectionWidth > 768 ? `${desktopWidth}px` : `${mobileWidth}px`}
        >
          <h3>Поширені запитання та прості відповіді</h3>
          <ul>
            <li>Як включити максимальну якість відео?</li>
            <li>Як включити звук?</li>
            <li>Чому я не можу писати в чаті? </li>
            <li>Як відкрити чат? </li>
            <li>Як відкрити Кахут?</li>
            <li>Як зайти на Кахут?</li>
            <li>Як відкрити Кахут на ввесь екран?</li>
          </ul>
        </SupportBackground>
      </SupportBox>
    </>
  );
};
