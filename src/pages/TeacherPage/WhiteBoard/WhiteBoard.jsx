import {
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
} from 'components/Stream/Kahoots/Kahoots.styled';
import { WhiteBoardBox } from './WhiteBoard.styled';
import { useState } from 'react';

export const WhiteBoard = ({
  page,
  isWhiteBoardOpen,
  isOpenedLast,
  sectionWidth,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const BOARDS = {
    a0: 'https://onlineboard.eu/b/DvGmjap6',
    a1: 'https://onlnbrd.com/b/y0lH8ANW',
    a2: 'https://onlnbrd.com/b/vaYzVw9w',
    b1: 'https://onlnbrd.com/b/U3VLX7Fv',
    b2: 'https://onlnbrd.com/b/8oB4CiSn',
    a1kids: 'https://onlnbrd.com/b/n5fiVPXJ',
    a2kids: 'https://onlnbrd.com/b/teBJAugT',
    b1kids: 'https://onlnbrd.com/b/S0UDNll5',
    b2kids: 'https://onlnbrd.com/b/Redjgqxd',
    test: 'https://onlineboard.eu/b/DvGmjap6',
    deutsch: 'https://onlnbrd.com/b/ChJwDEJl',
    deutscha2: 'https://onlnbrd.com/b/sIDizJvB',
    polski: 'https://onlnbrd.com/b/X0PgN0TM',
    polskia2: 'https://onlnbrd.com/b/P1ofJtqX',
  };

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
          src={BOARDS[page]}
          width="100%"
          height="100%"
        ></iframe>
      </WhiteBoardBox>
    </>
  );
};
