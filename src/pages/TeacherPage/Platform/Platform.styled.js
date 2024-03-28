import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';

export const PlatformBox = styled.div`
  height: 100%;

  scrollbar-width: thin;
  scrollbar-gutter: stable;

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

export const PlatformBackground = styled(StreamsBackgroundWrapper)`
  background: unset;

  transition: transform var(--animation-global);

  &.active {
    position: absolute;
    top: 0;
    left: 0;
    z-index: inherit;
    width: 100%;
  }

  .minimized & {
    background: unset;
  }
`;
