import { useState } from 'react';
import {
  KahootBackground,
  KahootBox,
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
} from './Kahoots.styled';

export const Kahoots = ({
  sectionWidth,
  sectionHeight,
  isKahootOpen,
  isOpenedLast,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const desktopWidth = isFullScreen ? sectionWidth : (sectionWidth / 3) * 2;
  const mobileWidth = isFullScreen ? sectionWidth : sectionWidth / 2;

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

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
          <KahootFullScreenBtn onClick={toggleFullScreen}>
            {isFullScreen ? (
              <KahootExitFullScreenIcon />
            ) : (
              <KahootFullScreenIcon />
            )}
          </KahootFullScreenBtn>
        </KahootBackground>
      </KahootBox>
    </>
  );
};
