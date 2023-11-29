import Marquee from 'react-fast-marquee';
import styled from 'styled-components';

export const StyledMarquee = styled(Marquee)`
  margin: 0 auto;
  max-width: 100vw;
`;

export const MarqueeChild = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 30px;
  transition: transform var(--animation-global);
  width: 240px;
  height: 240px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }

  &:hover > *,
  &:focus > * {
    background-color: transparent;
  }

  &:hover span,
  &:focus span {
    background-color: #00000080;
    transform: scale(1.5) translate(-33%, -33%);
  }
`;

export const MarqueeOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  border-radius: 20px;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  background-color: #00000060;
  transition: background-color var(--animation-global);
`;

export const MarqueeVideo = styled.video`
  object-fit: cover;
  width: 240px;
  height: 240px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;