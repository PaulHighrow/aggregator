import styled from 'styled-components';
import { ReactComponent as ViewerIcon } from '../../img/svg/viewerIcon.svg';
import { ReactComponent as WhiteBoardIcon } from '../../img/svg/whiteBoardIcon.svg';
import { ReactComponent as PlatformIcon } from '../../img/svg/myap/logo-short.svg';
import { ReactComponent as BoxSwitchUp } from '../../img/svg/btnbox-switch-up.svg';
import { ReactComponent as BoxSwitchDown } from '../../img/svg/btnbox-switch-down.svg';
import { ChatBtn, StreamSection } from 'components/Stream/Stream.styled';

export const TeacherPageSection = styled(StreamSection)`
  background-color: #4ec82d;
`;

export const TeacherButtonBox = styled.div`
  position: absolute;
  bottom: 25px;
  left: 85px;
  z-index: 100;
  display: flex;
  gap: 20px;

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateY(calc(200px));
  }
`;

export const TeacherButtonBoxHideSwitch = styled.div`
  position: absolute;
  bottom: 0;
  left: 180px;

  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.09));

  z-index: 10;

  width: 60px;
  height: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const BoxHideUpSwitch = styled(BoxSwitchUp)`
  stroke: var(--main-color);
  transition: stroke var(--animation-global);
`;

export const BoxHideDownSwitch = styled(BoxSwitchDown)`
  stroke: var(--main-color);
  transition: stroke var(--animation-global);
`;

export const KeyboardBox = styled.div`
  width: 50vw;
  margin: 0 auto;
  z-index: 5;

  scrollbar-width: thin;
  scrollbar-gutter: stable;

  background-color: white;
  position: absolute;
  border-radius: 20px;
  bottom: 0;
  right: 0;
  left: 0;

  font-family: var(--streams-font-family);

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateY(100%);
  }

  &.shown {
    transform: translateY(0);
  }
`;

export const ViewerBtn = styled(ChatBtn)``;

export const ViewerLogo = styled(ViewerIcon)`
  width: 25px;
  height: 25px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const WhiteBoardBtn = styled(ChatBtn)``;

export const WhiteBoardLogo = styled(WhiteBoardIcon)`
  width: 25px;
  height: 25px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const PlatformBtn = styled(ChatBtn)``;

export const PlatformLogo = styled(PlatformIcon)`
  z-index: 5;
  width: 48px;
  height: 48px;
`;
