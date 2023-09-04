import styled, { keyframes } from 'styled-components';

import menuHoverArrow from 'img/svg/menu-arrow.svg';
import menuHoverRotatedArrow from 'img/svg/menu-arrow-rotated.svg';

export const EdCenterSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
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
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
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
    -webkit-text-stroke: 2px var(--main-color);
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
  color: var(--main-color);
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

const arrowAnimation = keyframes`
  0%{
    stroke-dashoffset: 435;
  }
  100% {
    /* closing the offset makes the line appear to be drawn-in */
    stroke-dashoffset: 0;
  }
`;

export const NavigationItem = styled.li`
  position: relative;
  z-index: 1;

  &::after {
    content: url(${menuHoverArrow});
    opacity: 0;
    position: absolute;
    bottom: -10px;
    left: -6px;
    width: 250px;
    z-index: -1;
    stroke-dasharray: 435;

    @media screen and (min-width: 768px) {
      content: url(${menuHoverRotatedArrow});
      bottom: -12px;
      width: 220px;
    }

    @media screen and (min-width: 1280px) {
      bottom: -14px;
      left: -28px;
      width: 350px;
    }

    @media screen and (min-width: 1390px) {
      left: 10px;
    }
  }

  &:hover::after,
  &:focus::before {
    opacity: 1;
    animation-name: ${arrowAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
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
