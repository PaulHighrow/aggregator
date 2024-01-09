import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';
import { KahootBtn } from '../Stream.styled';
import { ReactComponent as FullscreenIcon } from '../../../img/svg/fullScreen.svg';
import { ReactComponent as ExitFullscreenIcon } from '../../../img/svg/fullScreenExit.svg';
import { ReactComponent as ClipBoardAddIcon } from '../../../img/svg/clipBoardAdd.svg';
import { ReactComponent as ClipBoardCopyIcon } from '../../../img/svg/clipBoardCopy.svg';
import { CloseIcon, FormCloseBtn } from 'components/LeadForm/LeadForm.styled';

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

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(100%);
  }

  &.shown {
    transform: translateX(0);
  }
`;

export const KahootDisclaimerBackground = styled(KahootBackground)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: width var(--animation-global);
`;

export const KahootDisclaimerBox = styled.div`
  overflow-y: scroll;
  width: 100%;
  padding: 20px 48px;
`;

export const KahootDisclaimerText = styled.p`
  font-size: 18px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const KahootDisclaimerList = styled.ul`
  list-style: disc;
  padding: 12px 0px;
`;

export const KahootDisclaimerItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const KahootNumbersHider = styled(KahootBtn)`
  position: absolute;
  top: 64px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-color: white;
  cursor: pointer;
  flex-shrink: 0;
  margin: 0;
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);

  font-weight: 700;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    top: 150px;
    right: 16px;
  }
`;

export const KahootPicker = styled.div`
  position: absolute;
  top: 112px;
  right: 16px;
  width: max-content;
  z-index: 10;
  font-family: var(--title-font-family);

  display: flex;
  flex-direction: column;
  gap: 16px;

  transition: all var(--animation-global);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    top: 16px;
    left: 50%;
  }

  &.hidden {
    transform: translateX(150px);

    @media screen and (min-width: 768px) {
      transform: translate(-50%, -200%);
    }
  }

  &.shown {
    transform: translateX(0px);

    @media screen and (min-width: 768px) {
      transform: translate(-50%, 0px);
    }
  }
`;

export const KahootNumbersBtn = styled(KahootBtn)`
  position: static;
  width: 32px;
  height: 32px;
  background-color: white;
  cursor: pointer;
  flex-shrink: 0;
  margin: 0;
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);

  font-weight: 700;

  &.active {
    background-color: var(--accent-color);
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
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);

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
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);

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

export const ClipBoardNotification = styled.div`
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

export const ClipBoardFormDismissBtn = styled(FormCloseBtn)`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 24px;
  height: 24px;

  border-color: var(--main-color);
  border-radius: 50%;
  background-color: transparent;
`;

export const DismissIcon = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  fill: var(--main-color);
`;

export const ClipBoardInput = styled.input`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
`;

export const ClipBoardSubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
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
