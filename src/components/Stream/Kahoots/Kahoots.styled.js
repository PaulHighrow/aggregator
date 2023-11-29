import styled from 'styled-components';

export const KahootBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(-90px);
  }

  &.shown {
    transform: translateX(0px);
  }

  & iframe {
    display: block;
  }
`;
