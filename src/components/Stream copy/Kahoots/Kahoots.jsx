import { KahootBackground, KahootBox } from './Kahoots.styled';

export const Kahoots = ({
  sectionWidth,
  sectionHeight,
  isKahootOpen,
  isOpenedLast,
}) => {
  const desktopWidth = (sectionWidth / 3) * 2;
  const mobileWidth = sectionWidth / 2;

  return (
    <>
      <KahootBox
        className={isKahootOpen ? 'shown' : 'hidden'}
        style={isOpenedLast === 'kahoot' ? { zIndex: '2' } : { zIndex: '0' }}
      >
        <KahootBackground>
          <iframe
            id="kahoot-window"
            title="kahoot-pin"
            src="https://kahoot.it/"
            frameBorder="0"
            width={sectionWidth > 768 ? desktopWidth : mobileWidth}
            height={sectionHeight}
          ></iframe>
        </KahootBackground>
      </KahootBox>
    </>
  );
};
