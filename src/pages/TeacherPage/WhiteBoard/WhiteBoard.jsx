import {
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
} from 'components/Stream/Kahoots/Kahoots.styled';
import { WhiteBoardBox } from './WhiteBoard.styled';
import { useState } from 'react';

export const WhiteBoard = ({
  isWhiteBoardOpen,
  isOpenedLast,
  sectionWidth,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'whiteboard' ? '3' : '1',
      width: isFullScreen ? sectionWidth : (sectionWidth / 10) * 4,
    };
  };

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

  return (
    <>
      <WhiteBoardBox
        className={isWhiteBoardOpen ? 'shown' : 'hidden'}
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
          id="whiteboard window"
          title="whiteboard-pin"
          // src="https://wbo.ophir.dev/boards/i8c4m8cMJhPjy-dWWrMDFLtvhUgmWyM0i77LB19sHmw-"
          src="https://onlineboard.eu/b/DvGmjap6"
          width="100%"
          height="100%"
        ></iframe>
      </WhiteBoardBox>
    </>
  );
};
