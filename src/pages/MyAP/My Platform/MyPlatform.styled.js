import styled from 'styled-components';

export const MyPlatformBox = styled.div`
  height: 100vh;
  width: 100vw;

  overflow: hidden;

  background-color: white;
  position: absolute;
  border-radius: 20px;
  top: 0;
  left: 0;

  font-family: var(--streams-font-family);

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(-100%);
  }

  &.shown {
    transform: translateX(0);
  }
`;