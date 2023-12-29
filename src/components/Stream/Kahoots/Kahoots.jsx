import { useState } from 'react';
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
import toast from 'react-hot-toast';

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
  const desktopWidth = isFullScreen ? sectionWidth : (sectionWidth / 3) * 2;
  const mobileWidth = isFullScreen ? sectionWidth : sectionWidth / 2;

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
            onChange={e => {
              localStorage.setItem('userName', e.target.value);
            }}
          />
          <ClipBoardSubmitBtn>Submit</ClipBoardSubmitBtn>
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
      <KahootBox
        className={isKahootOpen ? 'shown' : 'hidden'}
        style={isOpenedLast === 'kahoot' ? { zIndex: '3' } : { zIndex: '1' }}
      >
        <KahootBackground>
          <iframe
            id="kahoot-window"
            title="kahoot-pin"
            src="https://kahoot.it/"
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
          <ClipBoardBtn onClick={handleUsernameBtn}>
            {username ? <ClipBoardCopy /> : <ClipBoardAdd />}
          </ClipBoardBtn>
        </KahootBackground>
      </KahootBox>
    </>
  );
};
