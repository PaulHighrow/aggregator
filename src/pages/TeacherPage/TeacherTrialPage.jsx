import useSize from '@react-hook/size';
import { KahootBtn, KahootLogo } from 'components/Stream/Stream.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HostKahoots } from './HostKahoots/HostKahoots';
import { PlatformTrial } from './Platform/PlatformTrial';
import { TeacherChat } from './TeacherChat/TeacherChat';
import {
  BoxHideDownSwitch,
  BoxHideUpSwitch,
  PlatformBtn,
  PlatformLogo,
  TeacherButtonBox,
  TeacherButtonBoxHideSwitch,
  ViewerBtn,
  ViewerLogo,
  WhiteBoardBtn,
  WhiteBoardLogo,
} from './TeacherPage.styled';
import { Viewer } from './Viewer/Viewer';
import { WhiteBoard } from './WhiteBoard/WhiteBoard';

const TeacherTrialPage = () => {
  const [isWhiteBoardOpen, setIsWhiteBoardOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isButtonBoxOpen, setIsButtonBoxOpen] = useState(true);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  // eslint-disable-next-line
  const [width, height] = useSize(document.body);
  const location = useLocation().pathname.split('/teacher/')[1];

  console.log(location);

  const getLocation = location => {
    switch (location) {
      case 'deutsch-a1':
        return 'deutsch';
      case 'deutsch-a2':
        return 'deutscha2';
      case 'polski-a1':
        return 'polski';
      case 'polski-a2':
        return 'polskia2';
      default:
        return location;
    }
  };
  const page = getLocation(location);

  useEffect(() => {
    document.title = `Teacher ${page.toLocaleUpperCase()} | AP Education`;
  }, [page]);

  const toggleViewer = () => {
    !isOpenedLast
      ? setIsViewerOpen(isViewerOpen => !isViewerOpen)
      : isOpenedLast === 'viewer' &&
        setIsViewerOpen(isViewerOpen => !isViewerOpen);
    isWhiteBoardOpen || isPlatformOpen || isKahootOpen
      ? setIsOpenedLast(isOpenedLast => 'viewer')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleWhiteBoard = () => {
    !isOpenedLast
      ? setIsWhiteBoardOpen(isWhiteBoardOpen => !isWhiteBoardOpen)
      : isOpenedLast === 'whiteboard' &&
        setIsWhiteBoardOpen(isWhiteBoardOpen => !isWhiteBoardOpen);
    isViewerOpen || isPlatformOpen || isKahootOpen
      ? setIsOpenedLast(isOpenedLast => 'whiteboard')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const togglePlatform = () => {
    !isOpenedLast
      ? setIsPlatformOpen(isPlatformOpen => !isPlatformOpen)
      : isOpenedLast === 'platform' &&
        setIsPlatformOpen(isPlatformOpen => !isPlatformOpen);
    isViewerOpen || isWhiteBoardOpen || isKahootOpen
      ? setIsOpenedLast(isOpenedLast => 'platform')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleKahoot = () => {
    !isOpenedLast
      ? setIsKahootOpen(isKahootOpen => !isKahootOpen)
      : isOpenedLast === 'kahoot' &&
        setIsKahootOpen(isKahootOpen => !isKahootOpen);
    isPlatformOpen || isWhiteBoardOpen || isViewerOpen
      ? setIsOpenedLast(isOpenedLast => 'kahoot')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleButtonBox = () => {
    setIsButtonBoxOpen(isOpen => !isOpen);
  };

  return (
    <>
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

        <KahootBtn onClick={toggleKahoot}>
          <KahootLogo />
        </KahootBtn>
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
        page={page}
        sectionWidth={width}
        isWhiteBoardOpen={isWhiteBoardOpen}
        isOpenedLast={isOpenedLast}
      />
      <PlatformTrial
        sectionWidth={width}
        isPlatformOpen={isPlatformOpen}
        isOpenedLast={isOpenedLast}
      />
      <HostKahoots
        page={page}
        sectionWidth={width}
        sectionHeight={height}
        isKahootOpen={isKahootOpen}
        isOpenedLast={isOpenedLast}
      />
      <TeacherChat page={page} />
    </>
  );
};

export default TeacherTrialPage;
