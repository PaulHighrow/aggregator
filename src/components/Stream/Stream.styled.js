import styled from 'styled-components';

export const StreamSection = styled.section`
  position: relative;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px;
  }
`;

export const SectionWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 120px;
    margin-bottom: 80px;
  }
`;

export const SectionTitle = styled.h2`
  width: 200px;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin: 0;
    letter-spacing: 3.5px;
    width: 400px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 70px;
  }
`;

export const SectionSubTitle = styled.span`
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

export const StreamBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const VideoLimiter = styled.div`
  margin: 0 auto;
  max-width: 640px;
  width: 100%;

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
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const ChatBox = styled.div`
  position: relative;
  width: max-content;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & > iframe {
    border: none;
    display: block;
  }
`;
