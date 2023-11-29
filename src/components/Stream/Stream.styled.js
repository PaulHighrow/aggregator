import styled from 'styled-components';
import { ReactComponent as KahootIcon } from '../../img/svg/kahootIcon.svg';
import { ReactComponent as ChatIcon } from '../../img/svg/youTubeChat.svg';
import { IoCloseCircle } from 'react-icons/io5';

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
  top: 0;
  right: 0;
  z-index: 25;
  width: max-content;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & > iframe {
    border: none;
    display: block;
    width: 100%;
  }
`;

export const ChatBtn = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  &:focus, &:hover {
    background-color: var(--accent-color);
    box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ChatCloseBtn = styled.button`
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  &:focus, &:hover {
    background-color: var(--accent-color);
    box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const KahootBtn = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 140px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  &:focus, &:hover {
    background-color: var(--accent-color);
    box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const KahootCloseBtn = styled.button`
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  &:focus, &:hover {
    background-color: var(--accent-color);
    box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const KahootLogo = styled(KahootIcon)`
  width: 20px;

  @media screen and (min-width: 768px) {
    width: 30px;
  }
`;

export const ChatLogo = styled(ChatIcon)`
  width: 40px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const CloseLogo = styled(IoCloseCircle)`
  width: 30px;  
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
