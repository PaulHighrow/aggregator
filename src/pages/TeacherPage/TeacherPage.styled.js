import styled from 'styled-components';
import { ReactComponent as ViewerIcon } from '../../img/svg/viewerIcon.svg';
import { ChatBtn } from 'components/Stream/Stream.styled';

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