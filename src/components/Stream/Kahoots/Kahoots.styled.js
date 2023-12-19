import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';
import { KahootBtn } from '../Stream.styled';
import { ReactComponent as FullscreenIcon } from '../../../img/svg/fullScreen.svg';
import { ReactComponent as ExitFullscreenIcon } from '../../../img/svg/fullScreenExit.svg';

export const KahootBox = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(100%);
  }

  &.shown {
    transform: translateX(0);
  }

  &.fullscreen iframe {
    width: 100%;
  }

  & iframe {
    display: block;
    transition: width var(--animation-global);
  }
`;

export const KahootBackground = styled(StreamsBackgroundWrapper)`
  background-position: right -70px top 0px;

  @media screen and (min-width: 768px) {
    background-position: center top 0px;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -215px top 0;
  }
`;

export const KahootFullScreenBtn = styled(KahootBtn)`
  position: absolute;
  top: 16px;
  right: 60px;
  width: 32px;
  height: 32px;
  background-color: white;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 60px;
    right: 16px;
  }
`;

export const KahootFullScreenIcon = styled(FullscreenIcon)`
  width: 22px;
  height: 22px;
  fill: var(--main-color);
  stroke: var(--main-color);
`;

export const KahootExitFullScreenIcon = styled(ExitFullscreenIcon)`
  width: 22px;
  height: 22px;
  fill: var(--main-color);
  stroke: var(--main-color);
`;
