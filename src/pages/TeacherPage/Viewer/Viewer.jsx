import {
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
} from 'components/Stream/Kahoots/Kahoots.styled';
import { ViewerBox } from './Viewer.styled';
import { useState } from 'react';

export const Viewer = ({ isViewerOpen, isOpenedLast, sectionWidth }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'viewer' ? '4' : '1',
      width: isFullScreen ? sectionWidth : sectionWidth / 10 * 4,
    };
  };

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

  return (
    <>
      <ViewerBox
        className={isViewerOpen ? 'shown' : 'hidden'}
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
          id="3d-window"
          title="3d-pin"
          src="https://3dviewer.net/#"
          width="100%"
          height="100%"
        ></iframe>
      </ViewerBox>
    </>
  );
};
