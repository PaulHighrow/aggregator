import {
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
} from 'components/Stream/Kahoots/Kahoots.styled';
import { PlatformBox } from './Platform.styled';
import { useState } from 'react';

export const Platform = ({ isPlatformOpen, isOpenedLast, sectionWidth }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'platform' ? '4' : '1',
      width: isFullScreen ? sectionWidth : (sectionWidth / 10) * 4,
    };
  };

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

  return (
    <>
      <PlatformBox
        className={isPlatformOpen ? 'shown' : 'hidden'}
        style={{ ...supportBoxStylesHandler() }}
      >
        <KahootFullScreenBtn onClick={toggleFullScreen}>
          {isFullScreen ? (
            <KahootExitFullScreenIcon />
          ) : (
            <KahootFullScreenIcon />
          )}
        </KahootFullScreenBtn>
        <iframe
          id="platform-window"
          title="platform-pin"
          src="https://online.ap.education/school/"
          // src="https://play.kahoot.it/v2/?quizId=16e6e8dd-e2c6-4a20-a1f8-2ee3e04e275d&hostId=83f139cf-a515-4a63-a3ae-4e592634d7a4"
          width="100%"
          height="100%"
        ></iframe>
      </PlatformBox>
    </>
  );
};
