import styled, { keyframes } from 'styled-components';
import { ReactComponent as KahootIcon } from '../../img/svg/kahootIcon.svg';
import { ReactComponent as ChatIcon } from '../../img/svg/youTubeChat.svg';
import { ReactComponent as SupportIcon } from '../../img/svg/supportIcon.svg';
import { ReactComponent as SupportArrowIcon } from '../../img/svg/supportIcons/supportArrow.svg';
import { ReactComponent as SupportPointerIcon } from '../../img/svg/supportIcons/supportPointer.svg';

export const StreamSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const Video = styled.div`
  overflow: hidden;
`;

export const MoldingNoClick = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 35%;
  z-index: 1;

  @media screen and (min-height: 800px) {
    height: 50%;
  }

  @media screen and (min-height: 1200px) {
    height: 65%;
  }
`;

export const MoldingNoClickSecondary = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 70%;
  height: calc(65% - 60px);
  z-index: 1;
  display: block;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-height: 800px) {
    height: calc(50% - 60px);
  }

  @media screen and (min-height: 1200px) {
    height: calc(35% - 60px);
  }
`;

export const pulse = keyframes`
  0%{
    transform: scale(0.9);
  }
  100%{
    transform: scale(1.1);
  }
`;

export const SupportMarkerRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 250px;
  height: 40px;
  pointer-events: none;
  z-index: 10;

  background: transparent;
  background-clip: padding-box;

  &:before {
    content: '';
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &.animated:before {
    content: '';
    z-index: -1;
    position: absolute;
    display: block;
    width: 100%;
    height: 150%;

    filter: blur(10px);
    opacity: 0.5;
    background: linear-gradient(360deg, var(--main-color), #f9ea38);
  }
`;

export const SupportMarkerLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 240px;
  height: 40px;
  pointer-events: none;
  z-index: 10;

  &:before {
    content: '';
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &.animated:before {
    content: '';
    z-index: -1;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    filter: blur(10px);
    opacity: 0.5;
    background: linear-gradient(360deg, var(--main-color), #f9ea38);
  }
`;

export const VideoBox = styled.div`
  /* position: relative; */
  padding-top: 100vh;
  max-height: 100vh;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & iframe {
    border: none;
    display: block;
  }

  transition: all var(--animation-global);
`;

export const ChatBox = styled.div`
  position: absolute;
  background-color: white;
  top: 0;
  right: 0;
  height: 100vh;
  width: max-content;
  min-width: 300px;
  /* border-radius: 20px; */
  font-family: var(--chat-font-family);
  /* overflow: hidden; */
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  transition: transform var(--animation-global);

  @media screen and (orientation: portrait) {
    bottom: 0;
    top: auto;
    left: 0;
    right: auto;
    width: 100%;
    height: 45%;
  }

  @media screen and (min-width: 768px) {
    left: auto;
    right: 0;
  }

  & > iframe {
    border: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  &.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;

    @media screen and (orientation: portrait) {
      transform: translateX(-100%);
    }

    transform: translateX(100%);
  }

  &.shown {
    display: block;
    transform: translateX(0);
  }

  &.transformed {
    transform: translateX(0);
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  top: 60px;
  left: 12px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ChatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  margin: 0 auto;
  transition: all var(--animation-global);

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  &:focus,
  &:hover,
  &:active {
    background-color: var(--accent-color);
    box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
  }

  &.animated {
    animation: ${pulse} 1000ms infinite ease-in-out alternate;
  }

  &:before {
    content: '';
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &.animated:before {
    content: '';
    z-index: -1;
    position: absolute;
    border-radius: 50%;
    display: block;
    width: 55px;
    height: 55px;
    /* animation: ${pulse} 1000ms infinite ease-in-out alternate; */

    filter: blur(10px);
    opacity: 1;
    background: linear-gradient(360deg, var(--main-color), #f9ea38);

    @media screen and (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const KahootBtn = styled(ChatBtn)``;

export const KahootLogo = styled(KahootIcon)`
  width: 25px;
  height: 25px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ChatLogo = styled(ChatIcon)`
  width: 40px;
  height: 40px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 58px;
    height: 58px;
  }
`;

export const SupportBtn = styled(ChatBtn)``;

export const SupportLogo = styled(SupportIcon)`
  fill: var(--main-color);
  width: 31px;
  height: 31px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const SupportArrow = styled(SupportArrowIcon)`
  fill: var(--main-color);
  position: absolute;
  bottom: 60px;
  left: 60px;
  width: 80px;
  height: 80px;
  z-index: 5;
  opacity: 0;
  transition: all var(--animation-global);

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  &.animated {
    opacity: 1;
    filter: drop-shadow(1px 1px 7px #f9ea38);
    animation: ${pulse} 1000ms infinite ease-in-out alternate;
  }
`;

export const SupportPointer = styled(SupportPointerIcon)`
  fill: var(--main-color);
  position: absolute;
  bottom: 60px;
  right: 100px;
  width: 64px;
  height: 64px;
  z-index: 5;
  opacity: 0;

  @media screen and (min-width: 768px) {
    width: 72px;
    height: 72px;
  }

  &.animated {
    opacity: 1;
    filter: drop-shadow(1px 1px 7px #f9ea38);
    transform: rotate(180deg);
    animation: ${pulse} 1s infinite ease-in-out alternate;
  }
`;

export const StreamPlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StreamPlaceHolderText = styled.p`
  text-align: center;
  font-size: 32px;
`;
