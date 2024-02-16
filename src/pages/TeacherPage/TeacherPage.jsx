import useSize from '@react-hook/size';
import {
  BoxHideLeftSwitch,
  BoxHideRightSwitch,
  BoxHideSwitch,
  ButtonBox,
  ChatBtn,
  ChatLogo,
  StreamSection,
  SupportBtn,
  SupportLogo
} from 'components/Stream/Stream.styled';
import { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Platform } from './Platform/Platform';
import { KeyboardBox, ViewerBtn, ViewerLogo } from './TeacherPage.styled';
import { Viewer } from './Viewer/Viewer';

const TeacherPage = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isButtonBoxOpen, setIsButtonBoxOpen] = useState(true);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  // eslint-disable-next-line
  const [width, height] = useSize(document.body);

  const onChange = input => {
    console.log('Input changed', input);
  };

  const onKeyPress = button => {
    console.log('Button pressed', button);
  };

  const toggleViewer = e => {
    setIsViewerOpen(isViewerOpen => !isViewerOpen);
    isKeyboardOpen || isPlatformOpen
      ? setIsOpenedLast(isOpenedLast => 'viewer')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleKeyboard = () => {
    setIsKeyboardOpen(isChatOpen => !isChatOpen);
    isViewerOpen || isPlatformOpen
      ? setIsOpenedLast(isOpenedLast => 'keyboard')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const togglePlatform = () => {
    setIsPlatformOpen(isPlatformOpen => !isPlatformOpen);
    isViewerOpen || isKeyboardOpen
      ? setIsOpenedLast(isOpenedLast => 'platform')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleButtonBox = () => {
    setIsButtonBoxOpen(isOpen => !isOpen);
  };

  return (
    <StreamSection>
      <ButtonBox className={!isButtonBoxOpen ? 'hidden' : ''}>
        <ViewerBtn onClick={toggleViewer}>
          <ViewerLogo />
        </ViewerBtn>

        <ChatBtn onClick={toggleKeyboard}>
          <ChatLogo />
        </ChatBtn>

        <SupportBtn onClick={togglePlatform}>
          <SupportLogo />
        </SupportBtn>
      </ButtonBox>
      <BoxHideSwitch id="no-transform" onClick={toggleButtonBox}>
        {isButtonBoxOpen ? <BoxHideLeftSwitch /> : <BoxHideRightSwitch />}
      </BoxHideSwitch>
      <Viewer
        sectionWidth={width}
        isViewerOpen={isViewerOpen}
        isOpenedLast={isOpenedLast}
      />

      <Platform
        sectionWidth={width}
        isPlatformOpen={isPlatformOpen}
        isOpenedLast={isOpenedLast}
      />
      <KeyboardBox className={isKeyboardOpen ? 'shown' : 'hidden'}>
        <Keyboard onChange={onChange} onKeyPress={onKeyPress} physicalKeyboardHighlight={true}/>
      </KeyboardBox>
    </StreamSection>
  );
};

export default TeacherPage;
