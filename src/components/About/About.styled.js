import { LeadBtn } from 'components/Menu/Menu.styled';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as SketchIcon } from '../../img/svg/sketchHighlight.svg';

export const AboutSection = styled.section`
  position: relative;
  background-color: var(--main-color);

  padding: 20px 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const SectionTitle = styled.h2`
  color: var(--main-color);
  -webkit-text-stroke: 2px var(--secondary-color);
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 56px;
  }
`;

const sketchAnimation = keyframes`
  0%{
    stroke-dashoffset: 491;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const Sketch = styled(SketchIcon)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%) rotateY(180deg);
  stroke-dasharray: 491;

  @media screen and (min-width: 768px) {
    width: 225px;
  }

  @media screen and (min-width: 1024px) {
    width: 275px;
  }

  & path {
    animation-name: ${sketchAnimation};
    animation-duration: 125s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const AboutLeadBtn = styled(LeadBtn)`
  display: block;
  margin: 0 auto;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const AboutListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutPic = styled.picture`
  object-fit: cover;
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
`;

export const AboutImg = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

export const AboutText = styled.p`
  font-size: 20px;
  color: var(--text-color);
`;

export const AboutAccent = styled.span`
  font-weight: 500;
  color: var(--secondary-color);
`;
