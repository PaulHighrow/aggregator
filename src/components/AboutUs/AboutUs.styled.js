import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as LoopyLine } from '../../img/svg/loopyLineNormal.svg';
import { ReactComponent as LoopyLineMirrored } from '../../img/svg/loopyLineMirror.svg';
import { PageNavigationText } from 'components/HowItWorks/HowItWorks.styled';

const pathAnimation = keyframes`
  0%{
    stroke-dashoffset: 1;
  }
  100%{
    stroke-dashoffset: 0;
  }
`;

export const AboutUsBackground = styled(BackgroundWrapper)`
  background-position: right -70px bottom 10px;

  @media screen and (min-width: 768px) {
    background-position: left -140px bottom -140px;
  }

  @media screen and (min-width: 1280px) {
    background-position: center top;
  }
`;

export const AboutUsSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

export const AboutUsTitle = styled.h2`
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 29px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
    margin-bottom: 40px;
  }
`;

export const AboutUsSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 44px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 72px;
  }
`;

export const VideoLimiter = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  margin-bottom: 13px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    max-width: 960px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Video = styled.video`
  display: block;
  width: 100%;
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
`;

export const AboutUsText = styled.p`
  color: var(--main-color);
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 29px;
    max-width: 580px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 38px;
  }
`;

export const NavAnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    padding: 0 75px;
  }
`;

export const NavigationWrapper = styled.div`
  width: 350px;
  padding-left: 11px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const NavigationItem = styled.li`
  flex: 0 0 auto;
`;

export const NavigationDesc = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--main-color);
  letter-spacing: 1.8px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 19px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    margin-bottom: 22px;
  }
`;

export const BottomPageNavigationText = styled(PageNavigationText)`
  right: 0px;
  left: 325px;
  bottom: -2px;
`;

export const LoopyLineIcon = styled(LoopyLine)`
  width: 120px;
  stroke-dasharray: 1;
  stroke-dashoffset: 2;
  animation-name: ${pathAnimation};
  animation-duration: 1s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  @media screen and (min-width: 1280px) {
    width: 130px;
  }
`;

export const LoopyLineMirroredIcon = styled(LoopyLineMirrored)`
  width: 120px;
  stroke-dasharray: 1;
  stroke-dashoffset: 2;
  animation-name: ${pathAnimation};
  animation-duration: 1s;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  @media screen and (min-width: 1280px) {
    width: 130px;
  }
`;
