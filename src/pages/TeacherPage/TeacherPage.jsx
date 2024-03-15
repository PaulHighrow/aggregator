import useSize from '@react-hook/size';
import { useState } from 'react';
import { Platform } from './Platform/Platform';
import {
  BoxHideDownSwitch,
  BoxHideUpSwitch,
  PlatformBtn,
  PlatformLogo,
  TeacherButtonBox,
  TeacherButtonBoxHideSwitch,
  TeacherPageSection,
  ViewerBtn,
  ViewerLogo,
  WhiteBoardBtn,
  WhiteBoardLogo
} from './TeacherPage.styled';
import { Viewer } from './Viewer/Viewer';
import { WhiteBoard } from './WhiteBoard/WhiteBoard';

const TeacherPage = () => {
  const [isWhiteBoardOpen, setIsWhiteBoardOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isButtonBoxOpen, setIsButtonBoxOpen] = useState(true);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  // eslint-disable-next-line
  const [width, height] = useSize(document.body);

  const toggleViewer = e => {
    setIsViewerOpen(isViewerOpen => !isViewerOpen);
    isWhiteBoardOpen || isPlatformOpen
      ? setIsOpenedLast(isOpenedLast => 'viewer')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleWhiteBoard = e => {
    setIsWhiteBoardOpen(isWhiteBoardOpen => !isWhiteBoardOpen);
    isViewerOpen || isPlatformOpen
      ? setIsOpenedLast(isOpenedLast => 'whiteboard')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const togglePlatform = () => {
    setIsPlatformOpen(isPlatformOpen => !isPlatformOpen);
    isViewerOpen || isWhiteBoardOpen
      ? setIsOpenedLast(isOpenedLast => 'platform')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleButtonBox = () => {
    setIsButtonBoxOpen(isOpen => !isOpen);
  };

  return (
    <TeacherPageSection>
      <TeacherButtonBox className={!isButtonBoxOpen ? 'hidden' : ''}>
        <ViewerBtn onClick={toggleViewer}>
          <ViewerLogo />
        </ViewerBtn>

        <WhiteBoardBtn onClick={toggleWhiteBoard}>
          <WhiteBoardLogo />
        </WhiteBoardBtn>

        <PlatformBtn onClick={togglePlatform}>
          <PlatformLogo />
        </PlatformBtn>
      </TeacherButtonBox>
      <TeacherButtonBoxHideSwitch id="no-transform" onClick={toggleButtonBox}>
        {isButtonBoxOpen ? <BoxHideDownSwitch /> : <BoxHideUpSwitch />}
      </TeacherButtonBoxHideSwitch>
      <Viewer
        sectionWidth={width}
        isViewerOpen={isViewerOpen}
        isOpenedLast={isOpenedLast}
      />

      <WhiteBoard
        sectionWidth={width}
        isWhiteBoardOpen={isWhiteBoardOpen}
        isOpenedLast={isOpenedLast}
      />

      <Platform
        sectionWidth={width}
        isPlatformOpen={isPlatformOpen}
        isOpenedLast={isOpenedLast}
      />
    </TeacherPageSection>
  );
};

export default TeacherPage;
