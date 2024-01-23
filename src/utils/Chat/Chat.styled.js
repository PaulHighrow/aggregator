import styled from 'styled-components';
import mobile1xBGPng from '../../img/bg/mobile-bg@1x.png';
import mobile1xBGWebp from '../../img/bg/mobile-bg@1x.webp';
import { ReactComponent as ChatSendIcon } from '../../img/svg/sendIcon.svg';
import { ReactComponent as ChatScrollDownArrow } from '../../img/svg/downArrow.svg';
import { ReactComponent as PinnedMessageIcon } from '../../img/svg/pinnedMessage.svg';

export const ChatLoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;

  background-image: image-set(
    url(${mobile1xBGWebp}) type('image/webp'),
    url(${mobile1xBGPng}) type('image/png')
  );
  background-size: 100% auto;
  background-position: top 40% center;
  background-repeat: no-repeat;

  @media screen and (min-width: 1280px) {
    height: 100vh;
  }
`;

export const ChatLoginHeader = styled.h2`
  font-size: 30px;
  color: var(--main-color);
`;

export const ChatLoginLabel = styled.label`
  font-size: 18px;
`;

export const ChatLoginInput = styled.input`
  border: 1.5px solid var(--accent-color);
  border-radius: 8px;
  padding: 8px;
  font-size: 18px;
  width: 80%;

  transition: background-color var(--animation-global);

  &:hover,
  &:focus {
    background-color: var(--accent-transparent-color);
  }
`;

export const ChatLoginButton = styled.button`
  width: 55%;
  padding: 8px;
  font-size: 18px;
  cursor: pointer;
  background-color: #607eaa;
  color: #f9f5eb;
  outline: none;
  border: none;
  border-radius: 5px;

  transition: background-color var(--animation-global),
    color var(--animation-global);

  &:hover,
  &:focus {
    background-color: var(--main-color);
    color: var(--accent-color);
  }
`;

export const ChatContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: image-set(
    url(${mobile1xBGWebp}) type('image/webp'),
    url(${mobile1xBGPng}) type('image/png')
  );
  background-size: auto 40%;
  background-position: bottom 50px right 10px;
  background-repeat: no-repeat;

  @media screen and (orientation: landscape) {
    max-width: 300px;

    background-size: 100% auto;
    background-position: bottom -30px right -50px;
  }

  @media screen and (min-width: 1280px) {
    height: 100vh;
    max-width: 300px;

    background-size: 100% auto;
    background-position: bottom -30px right -50px;
  }
`;

export const ChatWindowedContainer = styled(ChatContainer)`
  position: relative;

  height: 100vh;
  max-width: none;
`;

export const ChatMessagesBox = styled.div`
  width: 100%;
  height: 95%;
  padding: 14px;
  overflow-x: hidden;
  overflow-y: scroll;

  @media screen and (min-width: 1280px) {
    height: 95vh;
  }
`;

export const ChatWindowedMessagesBox = styled(ChatMessagesBox)`
  height: 95vh;
`;

export const ChatMessageWrapper = styled.div`
  margin-bottom: 8px;
`;

export const ChatMessageYou = styled.p`
  text-align: right;
  font-size: 12px;
  margin-bottom: 1px;
`;

export const ChatMessageUsername = styled.p`
  font-size: 12px;
  margin-bottom: 1px;
`;

export const ChatMessageYouCloud = styled.div`
  position: relative;
  background-color: var(--accent-transparent-color);
  max-width: 65%;
  padding: 8px;
  border-radius: 10px;
  margin-left: auto;
  font-size: 15px;

  @media screen and (orientation: landscape) {
    max-width: 230px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 230px;
  }
`;

export const ChatWindowedMessageYouCloud = styled(ChatMessageYouCloud)`
  max-width: 95%;

  @media screen and (orientation: landscape) {
    max-width: 95%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 95%;
  }
`;

export const ChatMessageUserCloud = styled.div`
  position: relative;
  background-color: var(--main-transparent-color);
  max-width: 65%;
  padding: 8px;
  border-radius: 10px;
  font-size: 15px;

  @media screen and (orientation: landscape) {
    max-width: 230px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 230px;
  }
`;

export const ChatWindowedMessageUserCloud = styled(ChatMessageUserCloud)`
  max-width: 95%;

  @media screen and (orientation: landscape) {
    max-width: 95%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 95%;
  }
`;

export const ChatMessageText = styled.p`
  word-wrap: break-word;
  white-space: normal;

  & > a {
    color: var(--main-color);
  }
`;

export const ChatWindowedMessageText = styled(ChatMessageText)`
  & > a {
    color: var(--accent-color);
  }
`;

export const ChatMessageTime = styled.p`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 11px;
  color: #00000081;
`;

export const ChatFooterBox = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #f9f5eb;
  height: 5vh;
  min-height: 48px;
`;

export const ChatMessageForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const СhatMessageInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  padding: 15px;

  word-wrap: break-word;
  white-space: normal;
`;

export const ChatSend = styled(ChatSendIcon)`
  width: 24px;
  height: 24px;
  fill: var(--main-color);

  transition: fill var(--animation-global);
`;

export const СhatSendMessageButton = styled.button`
  background-color: var(--accent-transparent-color);
  padding: 10px;
  border: none;
  border-radius: 50%;
  outline: none;
  color: #eae3d2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--animation-global),
    box-shadow var(--animation-global);

  &:hover,
  &:focus {
    background-color: var(--main-color);
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.5);
  }

  &:hover > svg,
  &:focus > svg {
    fill: var(--accent-color);
  }
`;

export const ChatFastScrollButton = styled(СhatSendMessageButton)`
  position: absolute;
  bottom: 65px;
  right: 35px;
  z-index: 5;

  width: 36px;
  height: 36px;

  background-color: var(--main-semi-transparent-color);

  &:hover > svg,
  &:focus > svg {
    fill: none;
  }
`;

export const ChatScrollDownIcon = styled(ChatScrollDownArrow)`
  flex-shrink: 0;
  stroke-width: 2;
`;

export const ChatPinnedMessage = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;

  width: 100%;
  background-color: var(--accent-color);

  border-radius: 10px;
`;

export const ChatPinnedMessageIcon = styled(PinnedMessageIcon)`
  position: absolute;
  top: 0;
  right: 0;

  width: 22px;
  height: 22px;

  fill: var(--main-color);
`;
