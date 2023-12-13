import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Box } from 'components/Box/Box.styled';
import styled from 'styled-components';

export const ReviewsBackground = styled(BackgroundWrapper)`
  background-position: left -70px bottom 0px;

  @media screen and (min-width: 768px) {
    background-position: center center;
  }

  @media screen and (min-width: 1280px) {
    background-position: right -215px center;
  }
`;

export const ReviewsSection = styled.section`
  position: relative;
  padding: 30px 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 42px;
    padding-top: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px 0;
  }
`;

export const ReviewsBox = styled(Box)`
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    padding: 0 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 55px;
  }

  @media screen and (min-width: 1920px) {
    padding: 0;
  }
`;

export const ReviewsWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 6px;
  display: flex;
  gap: 33px;
  flex-direction: column;
  align-items: center;

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

export const ReviewsTitle = styled.h2`
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;
  max-width: 320px;

  @media screen and (min-width: 768px) {
    text-align: center;
    letter-spacing: 3.5px;
    margin: 0 auto;
    margin-bottom: 52px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    max-width: 871px;
    font-size: 70px;
  }
`;

export const ReviewsSubTitle = styled.span`
  display: block;
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

export const VideoLimiter = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 640px;

  @media screen and (min-width: 768px) {
    max-width: 960px;
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

export const LeadBtnWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
`;

export const ReviewsVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const ReviewsTextBox = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 580px;
  }
`;

export const ReviewsText = styled.p`
  color: var(--main-color);
  font-size: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 29px;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 38px;
    margin-bottom: 50px;
  }
`;
