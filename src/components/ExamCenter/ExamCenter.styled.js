import styled, { keyframes } from 'styled-components';

import underline from 'img/svg/underline.svg';
// import underlineLong from 'img/svg/underline-long.svg';

export const ExamCenterSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const ExamCenterWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 6px;
  display: flex;
  gap: 33px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 684px;
    gap: 30px;

    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1155px;
    
    gap: 40px;
  }

  @media screen and (min-width: 1390px) {
    width: 1280px;
  }
`;

export const ExamCenterTitle = styled.h2`
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;

  @media screen and (min-width: 390px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 52px;
    font-size: 51px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    max-width: 871px;
    font-size: 82px;
  }
`;

export const ExamCenterSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 28px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 390px) {
    font-size: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 100px;
  }
`;

export const ExamCenterNavigation = styled.ul`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 1.8px;
  display: flex;
  gap: 20px;
  margin-bottom: 33px;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    text-align: end;
    font-size: 32px;
    gap: 41px;
    overflow: hidden;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    gap: 62px;
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

export const NavigationItem = styled.li``;

export const NavigationLink = styled.a`
  color: #9d9d9d;
  z-index: 1;
  position: relative;
  z-index: 1;

  &::after {
    content: url(${underline});
    fill: #9d9d9d;
    opacity: 1;
    position: absolute;
    bottom: -10px;
    left: -6px;
    width: 250px;
    z-index: -1;
    stroke-dasharray: 435;

    @media screen and (min-width: 768px) {
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
    fill: var(--main-color);
    opacity: 1;
    animation-name: ${arrowAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-iteration-count: 1;
  }

  &:active,
  &:hover,
  &:focus {
    color: var(--main-color);
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
    margin-bottom: 90px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin-bottom: 120px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const NavigationWrapper = styled.div`
  padding-left: 11px;

  @media screen and (min-width: 768px) {
    padding-left: 43px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 75px;
  }
`;

export const NavigationDesc = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--main-color);
  letter-spacing: 1.8px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
    margin-bottom: 22px;
  }
`;
