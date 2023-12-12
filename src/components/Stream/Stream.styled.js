import styled from 'styled-components';
import { ReactComponent as KahootIcon } from '../../img/svg/kahootIcon.svg';
import { ReactComponent as ChatIcon } from '../../img/svg/youTubeChat.svg';

export const StreamSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 100vh;
  max-height: 100vh;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & iframe {
    border: none;
    display: block;
  }
`;

export const ChatBox = styled.div`
  position: absolute;
  background-color: white;
  top: 0;
  right: 0;
  width: max-content;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  transition: transform var(--animation-global);

  & > iframe {
    border: none;
    display: block;
    width: 100%;
  }

  &.hidden {
    transform: translateX(100%);
  }

  &.shown {
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
`;

export const KahootBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  margin: 0 auto;

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
`;

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
