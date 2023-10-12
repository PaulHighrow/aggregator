import styled from 'styled-components';

import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { arrowAnimation } from 'components/HowItWorks/HowItWorks.styled';
import { ReactComponent as Arrow } from '../../../img/svg/menu-arrow.svg';
import { ReactComponent as RotatedArrow } from '../../../img/svg/menu-arrow-rotated.svg';

export const EdCenterBackground = styled(BackgroundWrapper)`
  background-position: left -70px top 0;
  background-color: var(--main-color);

  @media screen and (min-width: 768px) {
    background-position: right -140px top;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -185px top;
  }
`;

export const EdCenterSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
    padding-bottom: 84px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const EdCenterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    width: 684px;
    display: grid;
    grid-template-columns: 448px auto;
    gap: 30px;
    align-items: center;

    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1155px;
    grid-template-columns: 800px auto;
    gap: 40px;
  }

  @media screen and (min-width: 1390px) {
    width: 1280px;
  }
`;

export const EdCenterTitle = styled.h2`
  color: var(--secondary-color);
  font-family: var(--title-font-family);
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--secondary-color);
  margin-bottom: 18px;

  @media screen and (min-width: 360px) {
    width: 300px;
    font-size: 40px;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 52px;
    width: 420px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--secondary-color);
  }

  @media screen and (min-width: 1280px) {
    width: 630px;
    font-size: 70px;
  }
`;

export const EdCenterSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
  }
`;

export const EdCenterNavigation = styled.ul`
  color: var(--secondary-color);
  font-size: 26px;
  font-weight: 600;
  max-width: 350px;
  letter-spacing: 1.8px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    text-align: end;
    font-size: 32px;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const NavigationItem = styled.li`
  position: relative;
  z-index: 1;
`;

export const EdVideoToggler = styled.a`
  color: var(--secondary-color);
  z-index: 1;
  position: relative;
  transition: color var(--animation-global);

  @media screen and (max-width: 1279px) {
    user-select: none;
  }

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }

  &.selected,
  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.selected svg {
    display: block;
  }

  &:hover > *,
  &:focus > * {
    opacity: 1;
    animation-name: ${arrowAnimation};
    animation-duration: 400ms;
    animation-direction: revert;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
`;

export const EdCenterArrowMobile = styled(Arrow)`
  opacity: 0;
  position: absolute;
  bottom: -4px;
  left: -4px;
  width: 250px;
  z-index: -1;
  stroke-dasharray: 435;
`;

export const EdCenterArrow = styled(RotatedArrow)`
  opacity: 0;
  position: absolute;
  z-index: -1;
  stroke-dasharray: 435;

  @media screen and (min-width: 768px) {
    bottom: -4px;
    right: -6px;
    width: 230px;
  }

  @media screen and (min-width: 1280px) {
    right: -8px;
    width: 350px;
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: 448px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 800px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;
