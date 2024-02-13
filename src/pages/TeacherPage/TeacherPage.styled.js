import useSize from '@react-hook/size';
import { KahootBackground } from 'components/Stream/Kahoots/Kahoots.styled';
import {
  BoxHideLeftSwitch,
  BoxHideRightSwitch,
  BoxHideSwitch,
  ButtonBox,
  ChatBtn,
  ChatLogo,
  KahootBtn,
  KahootLogo,
  SupportBtn,
  SupportLogo,
} from 'components/Stream/Stream.styled';
import { Support } from 'components/Stream/Support/Support';
import { useState } from 'react';

const TeacherPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isButtonBoxOpen, setIsButtonBoxOpen] = useState(true);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  // eslint-disable-next-line
  const [width, height] = useSize(document.body);

  const toggleKahoot = e => {
    setIsKahootOpen(isKahootOpen => !isKahootOpen);
    isChatOpen || isSupportOpen
      ? setIsOpenedLast(isOpenedLast => 'kahoot')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleChat = () => {
    setIsChatOpen(isChatOpen => !isChatOpen);
    isKahootOpen || isSupportOpen
      ? setIsOpenedLast(isOpenedLast => 'chat')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleSupport = () => {
    setIsSupportOpen(isSupportOpen => !isSupportOpen);
    isKahootOpen || isChatOpen
      ? setIsOpenedLast(isOpenedLast => 'support')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleButtonBox = () => {
    setIsButtonBoxOpen(isOpen => !isOpen);
  };

  return (
    <>
      <KahootBackground height="100vh">
        <iframe
          id="kahoot-window"
          title="kahoot-pin"
          src="https://kahoot.com/?utm_name=controller_app&utm_source=controller&utm_campaign=controller_app&utm_medium=link"
          width="100%"
          height="100%"
        ></iframe>
      </KahootBackground>

      <ButtonBox className={!isButtonBoxOpen ? 'hidden' : ''}>
        <KahootBtn onClick={toggleKahoot}>
          <KahootLogo />
        </KahootBtn>

        <ChatBtn onClick={toggleChat}>
          <ChatLogo />
        </ChatBtn>

        <SupportBtn onClick={toggleSupport}>
          <SupportLogo />
        </SupportBtn>
      </ButtonBox>
      <BoxHideSwitch id="no-transform" onClick={toggleButtonBox}>
        {isButtonBoxOpen ? <BoxHideLeftSwitch /> : <BoxHideRightSwitch />}
      </BoxHideSwitch>
      <Support
        sectionWidth={width}
        isSupportOpen={isSupportOpen}
        isOpenedLast={isOpenedLast}
        openKahoot={toggleKahoot}
        isKahootOpen={isKahootOpen}
      >
        <iframe
          id="kahoot-window"
          title="kahoot-pin"
          src="https://kahoot.com/?utm_name=controller_app&utm_source=controller&utm_campaign=controller_app&utm_medium=link"
          width="100%"
          height="100%"
        ></iframe>
      </Support>
    </>
  );
};

export default TeacherPage;
