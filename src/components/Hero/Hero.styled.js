import styled, { keyframes } from 'styled-components';
import { ReactComponent as TitleSketchSVG } from '../../img/svg/sketchTitle.svg';

export const HeroSection = styled.section`
  position: relative;
  min-height: 500px;
  padding-top: 50px;
  padding-bottom: 30px;
  margin-top: 73px;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px 0;
  }
`;

export const HeroTextWrapper = styled.div``;

export const Title = styled.h1`
  position: relative;
  z-index: 1;

  width: 270px;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  -webkit-text-stroke: 1px var(--main-color);
  margin: 0 auto 30px auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    letter-spacing: 3.5px;
    width: 500px;
    font-size: 70px;
    -webkit-text-stroke: 2px var(--main-color);
  }
`;

const sketchAnimation = keyframes`
  0%{
    stroke-dashoffset: 746;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const TitleSketch = styled(TitleSketchSVG)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke-dasharray: 746;
  width: 120px;

  @media screen and (min-width: 768px) {
    width: 270px;
  }

  & path {
    animation-name: ${sketchAnimation};
    animation-duration: 1.1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    stroke: #f5ce46;
    stroke-width: 4px;
  }
`;

export const SubTitle = styled.span`
  position: relative;
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;
  line-height: 0.7;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 100px;
    vertical-align: sub;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--main-color);
  margin-bottom: 5px;
  padding: 0 30px;
  transition: max-height var(--animation-global);

  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 22px;
    padding: 0 55px;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DescriptionLink = styled.a`
  display: block;
  margin-bottom: 54px;

  font-family: var(--secondary-font-family);
  font-size: 18px;
  font-weight: 700;

  color: var(--accent-color);
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 55px;
  }
`;
