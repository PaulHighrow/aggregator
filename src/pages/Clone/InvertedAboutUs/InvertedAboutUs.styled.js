import { InvertedBackgroundWrapper } from 'components/BackgroundWrapper/InvertedBackgroundWrappers';
import styled from 'styled-components';

export const AboutUsBackground = styled(InvertedBackgroundWrapper)`
  background-position: right -70px bottom 10px;
  background-color: var(--main-color);

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
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 13px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const AboutUsTitle = styled.h2`
  color: var(--secondary-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--secondary-color);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 29px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--secondary-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
    margin-bottom: 40px;
  }
`;

export const AboutUsSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 53px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
  margin-bottom: 13px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const AboutUsText = styled.p`
  max-width: 580px;
  color: var(--secondary-color);
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 29px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 38px;
  }
`;
