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
  width: 180px;
  height: 320px;

  @media screen and (min-width: 768px) {
    width: 270px;
    height: 480px;
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
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  background-color: #00000060;
  transition: background-color var(--animation-global);
`;

export const MarqueeVideo = styled.video`
  width: 180px;
  height: 320px;

  @media screen and (min-width: 768px) {
    width: 270px;
    height: 480px;
  }
`;

export const MarqueeText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px;
  border-radius: 20px;

  font-size: 28px;
  text-align: center;
  color: var(--secondary-color);
  background-color: #00000090;

  transition: background-color var(--animation-global),
    transform var(--animation-global);
`;
