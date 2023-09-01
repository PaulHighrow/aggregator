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
`;

export const MarqueeOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #00000080;
  transition: background-color var(--animation-global);

  &:hover,
  &:focus {
    background-color: transparent;
  }
`;

export const MarqueePicture = styled.picture`
  display: block;
`;

export const MarqueeImg = styled.img`
  width: 100%;
`;

export const MarqueeText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px;
  border-radius: 20px;

  font-size: 22px;
  text-align: center;
  color: var(--secondary-color);

  transition: background-color var(--animation-global),
    transform var(--animation-global);

  div:hover > &,
  div:focus > & {
    background-color: #00000080;
    transform: scale(1.5) translate(-33%, -33%);
  }
`;
