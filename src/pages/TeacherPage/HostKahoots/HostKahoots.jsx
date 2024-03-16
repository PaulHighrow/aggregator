import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import {
  KahootBackground,
  KahootBox,
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
  KahootNumbersBtn,
  KahootPicker,
} from './HostKahoots.styled';

export const HostKahoots = ({
  sectionWidth,
  sectionHeight,
  isKahootOpen,
  isChatOpen,
  isOpenedLast,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [kahoots, setKahoots] = useState({});
  const [activeKahoot, setActiveKahoot] = useState(1);

  const kahootWidth = isFullScreen ? sectionWidth : (sectionWidth / 10) * 4;

  const getLinksForLocation = () => {
    const entries = [];
    Object.values(kahoots.a0.links).map(entry => {
      entries.push(entry);
      return entries;
    });
    return entries;
  };

  const kahootLinksRefresher = async e => {
    if (e.target === e.currentTarget) {
      setKahoots((await axios.get('/host-kahoots')).data);
    }
  };

  const setKahootNumber = async e => {
    const kahootNumber = parseInt(e.currentTarget.innerText);
    setKahoots((await axios.get('/host-kahoots')).data);
    setActiveKahoot(kahootNumber);
  };

  useLayoutEffect(() => {
    const getLinksRequest = async () => {
      try {
        setKahoots((await axios.get('/host-kahoots')).data);
      } catch (error) {
        console.log(error);
      }
    };

    getLinksRequest();
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

  return (
    <>
      {Object.keys(kahoots).length && (
        <KahootBox
          width={isChatOpen ? kahootWidth - 300 : kahootWidth}
          height={sectionHeight}
          className={isKahootOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'kahoot' ? { zIndex: '3' } : { zIndex: '1' }}
          onTransitionEnd={kahootLinksRefresher}
        >
          <KahootFullScreenBtn onClick={toggleFullScreen}>
            {isFullScreen ? (
              <KahootExitFullScreenIcon />
            ) : (
              <KahootFullScreenIcon />
            )}
          </KahootFullScreenBtn>
          <KahootPicker>
            {Object.values(kahoots.test.links).map((link, i) => (
              <KahootNumbersBtn
                key={i}
                onClick={setKahootNumber}
                className={activeKahoot === i + 1 ? 'active' : ''}
                tabIndex={-1}
              >
                {i + 1}
              </KahootNumbersBtn>
            ))}
          </KahootPicker>
          {getLinksForLocation().map((link, i) => (
            <KahootBackground
              key={i}
              className={activeKahoot === i + 1 ? 'active' : ''}
            >
              <iframe
                id={`host-kahoot-window-${i + 1}`}
                title={`host-kahoot-${i + 1}`}
                src={link}
                width={
                  !isChatOpen
                    ? kahootWidth
                    : isFullScreen
                    ? kahootWidth - 300
                    : kahootWidth
                }
                height={sectionHeight}
              ></iframe>
            </KahootBackground>
          ))}
        </KahootBox>
      )}
    </>
  );
};
