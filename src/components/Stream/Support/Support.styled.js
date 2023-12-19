import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled from 'styled-components';

export const SupportBox = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;

  transition: transform var(--animation-global);

  &.hidden {
    transform: translateX(100%);
  }

  &.shown {
    transform: translateX(0);
  }
`;

export const SupportBackground = styled(StreamsBackgroundWrapper)`
  background-position: right -70px top 0px;

  @media screen and (min-width: 768px) {
    background-position: center top 0px;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -215px top 0;
  }
`;
