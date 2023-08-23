import Marquee from 'react-fast-marquee';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as WrittenSVG } from '../../img/svg/handWritten.svg';

export const TestimonialSection = styled.section`
  position: relative;
  background-color: var(--main-color);

  padding: 20px 10px;

  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px 0;
  }
`;

export const TestimonialImg = styled.img`
  object-fit: fill;
  width: 270px;
  height: 210px;
  margin-right: 5px;
  transition: transform var(--animation-global);

  @media screen and (min-width: 768px) {
    width: 360px;
    height: 292px;
    margin-right: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 432px;
    height: 350px;
    margin-right: 20px;
  }

  &:hover {
    transform: rotateX(20deg);
  }
`;

export const TestimonialLink = styled.a`
  /* width: 270px;
  height: 210px; */
  transition: transform var(--animation-global);

  @media screen and (min-width: 768px) {
    /* width: 360px;
    height: 292px; */
  }

  @media screen and (min-width: 1024px) {
    /* width: 432px;
    height: 350px; */
  }

  &:hover {
    transform: rotateX(20deg);
  }
`;

const writeAnimation = keyframes`
  0%{
    stroke-dashoffset: 2325;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const Written = styled(WrittenSVG)`
  width: 700px;
  display: block;
  margin: 0 auto;

  stroke-dasharray: 2325;

  & path {
    animation-name: ${writeAnimation};
    animation-duration: 20s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const StyledMarquee = styled(Marquee)`
  margin: 0 auto;
  margin-bottom: 40px;
`;
