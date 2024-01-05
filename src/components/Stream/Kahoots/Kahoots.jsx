import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
} from './Kahoots.styled';
import { useLocation } from 'react-router-dom';

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
  const kahootWidth = isFullScreen ? sectionWidth : (sectionWidth / 10) * 4;
  let location = useLocation();
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState({});

  useLayoutEffect(() => {
    const getLinksRequest = async () => {
      try {
        setIsLoading(isLoading => (isLoading = true));
        setLinks((await axios.get('/kahoots')).data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(isLoading => (isLoading = false));
      }
    };

    getLinksRequest();
  }, []);

  console.log(links);
  console.log(location);

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
      {Object.keys(links).length && (
        <KahootBox
          className={isKahootOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'kahoot' ? { zIndex: '3' } : { zIndex: '1' }}
        >
          <KahootBackground>
            <iframe
              id="kahoot-window"
              title="kahoot-pin"
              src="https://kahoot.it/"
              //https://kahoot.it/?pin=1061800&refer_method=link
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
        </KahootBox>
      )}
    </>
  );
};
