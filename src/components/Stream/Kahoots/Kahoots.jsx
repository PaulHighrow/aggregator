import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import {
  ClipBoardAdd,
  ClipBoardBtn,
  ClipBoardCopy,
  ClipBoardFormText,
  ClipBoardInput,
  ClipBoardInputForm,
  ClipBoardSubmitBtn,
  KahootBackground,
  KahootBox,
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
  KahootNumbersBtn,
  KahootPicker,
} from './Kahoots.styled';

export const Kahoots = ({
  sectionWidth,
  sectionHeight,
  isKahootOpen,
  isOpenedLast,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem('userName') || ''
  );
  const [kahoots, setKahoots] = useState({});
  const [activeKahoot, setActiveKahoot] = useState(1);

  let location = useLocation();

  const trialsSwitch = path => {
    switch (path) {
      case 'trial-en':
        return 'trials';
      case 'trial-de':
        return 'trials_de';
      case 'trial-pl':
        return 'trials_pl';
      case 'trial-kids':
        return 'trials_kids';
      default:
        break;
    }
  };

  const page = location.pathname.includes('streams-kids')
    ? location.pathname.match(/\/([^/]+)\/?$/)[1] + 'kids'
    : location.pathname.includes('trial')
    ? trialsSwitch(location.pathname.match(/\/([^/]+)\/?$/)[1])
    : location.pathname.match(/\/([^/]+)\/?$/)[1];

  const kahootWidth = isFullScreen ? sectionWidth : (sectionWidth / 10) * 4;

  const getLinksForLocation = () => {
    const entries = [];
    Object.values(kahoots[page].links).map(entry => {
      entries.push(entry);
      return entries;
    });
    return entries;
  };

  const kahootLinksRefresher = async e => {
    if (e.target === e.currentTarget) {
      setKahoots((await axios.get('/kahoots')).data);
    }
  };

  const setKahootNumber = async e => {
    const kahootNumber = parseInt(e.currentTarget.innerText);
    setKahoots((await axios.get('/kahoots')).data);
    setActiveKahoot(kahootNumber);
  };

  useLayoutEffect(() => {
    const getLinksRequest = async () => {
      try {
        setKahoots((await axios.get('/kahoots')).data);
      } catch (error) {
        console.log(error);
      }
    };

    getLinksRequest();
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

  const createNameInput = btn => {
    btn.disabled = true;
    toast(
      t => (
        <ClipBoardInputForm
          onSubmit={e => {
            e.preventDefault();
            toast.dismiss(t.id);
            setUsername(
              username => (username = localStorage.getItem('userName'))
            );
            btn.disabled = false;
            copyToClipboard();
          }}
        >
          <ClipBoardFormText>
            Введіть ваше ім'я в це поле, щоб вам не доводилося вводити його
            декілька разів під час уроку, бажана максимальна кількість символів
            - не більше 15, бо Кахут обріже зайве.
          </ClipBoardFormText>
          <ClipBoardInput
            placeholder="Ім'я"
            onChange={e => {
              localStorage.setItem('userName', e.target.value);
            }}
          />
          <ClipBoardSubmitBtn>Зберегти</ClipBoardSubmitBtn>
        </ClipBoardInputForm>
      ),
      { duration: Infinity }
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(localStorage.getItem('userName'));
    toast.success(
      <ClipBoardFormText>
        Ваше ім'я додано в буфер обміну, можете вставити його у відповідне поле!
      </ClipBoardFormText>
    );
  };

  const handleUsernameBtn = e => {
    const btn = e.currentTarget;
    username ? copyToClipboard() : createNameInput(btn);
  };

  return (
    <>
      {Object.keys(kahoots).length && (
        <KahootBox
          className={isKahootOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'kahoot' ? { zIndex: '3' } : { zIndex: '1' }}
          onTransitionEnd={kahootLinksRefresher}
        >
          <KahootPicker>
            {Object.values(kahoots[page].links).map((link, i) => (
              <KahootNumbersBtn
                key={i}
                onClick={setKahootNumber}
                className={activeKahoot === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </KahootNumbersBtn>
            ))}
          </KahootPicker>

          {getLinksForLocation().map(
            (link, i) =>
              activeKahoot === i + 1 && (
                <KahootBackground key={i}>
                  <iframe
                    id="kahoot-window"
                    title="kahoot-pin"
                    src={link}
                    width={kahootWidth}
                    height={sectionHeight}
                  ></iframe>
                  <KahootFullScreenBtn onClick={toggleFullScreen}>
                    {isFullScreen ? (
                      <KahootExitFullScreenIcon />
                    ) : (
                      <KahootFullScreenIcon />
                    )}
                  </KahootFullScreenBtn>
                  <ClipBoardBtn onClick={handleUsernameBtn}>
                    {username ? <ClipBoardCopy /> : <ClipBoardAdd />}
                  </ClipBoardBtn>
                </KahootBackground>
              )
          )}
        </KahootBox>
      )}
    </>
  );
};
