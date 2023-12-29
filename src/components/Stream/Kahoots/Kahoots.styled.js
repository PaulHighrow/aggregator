import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';
import { KahootBtn } from '../Stream.styled';
import { ReactComponent as FullscreenIcon } from '../../../img/svg/fullScreen.svg';
import { ReactComponent as ExitFullscreenIcon } from '../../../img/svg/fullScreenExit.svg';
import { ReactComponent as ClipBoardAddIcon } from '../../../img/svg/clipBoardAdd.svg';
import { ReactComponent as ClipBoardCopyIcon } from '../../../img/svg/clipBoardCopy.svg';

export const KahootBox = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;

  outline: transparent;

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
    border: none;
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

export const ClipBoardBtn = styled(KahootBtn)`
  position: absolute;
  top: 16px;
  right: 106px;
  width: 32px;
  height: 32px;
  background-color: white;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 106px;
    right: 16px;
  }
`;

export const ClipBoardInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ClipBoardFormText = styled.p`
  color: var(--main-color);
  font-size: 22px;
  font-weight: 700;
`;

export const ClipBoardInput = styled.input`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
`;

export const ClipBoardSubmitBtn = styled.button`
  font-size: 22px;
  font-weight: 700;
  width: 50%;
`;

export const ClipBoardAdd = styled(ClipBoardAddIcon)`
  width: 22px;
  height: 22px;
  fill: var(--main-color);
  stroke: var(--main-color);
`;

export const ClipBoardCopy = styled(ClipBoardCopyIcon)`
  width: 22px;
  height: 22px;
  fill: var(--main-color);
  stroke: var(--main-color);
`;
