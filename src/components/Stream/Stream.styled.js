import styled from 'styled-components';

export const StreamSection = styled.section`
  position: relative;
`;

export const SectionWrapper = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionTitle = styled.h2`
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px var(--main-color);

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    letter-spacing: 3.5px;
    font-size: 55px;
    -webkit-text-stroke: 2px var(--main-color);
  }
`;

export const SectionSubTitle = styled.span`
  font-family: var(--secondary-font-family);
  font-size: 42px;
  -webkit-text-stroke: 0;
  letter-spacing: 2px;

  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`;

export const StreamInnerBox = styled.div`
  position: relative;
`;

export const VideoBox = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const ChatBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: max-content;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px -10px 30px 0px rgba(0, 0, 0, 0.25);

  & > iframe {
    border: none;
    display: block;
  }
`;

export const ChatBtn = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  display: block;
  width: 70px;
  height: 70px;
  font-size: 20px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const KahootBtn = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 140px;
  right: 50px;
  display: block;
  width: 70px;
  height: 70px;
  font-size: 20px;
  border-radius: 50%;
  margin: 0 auto;
`;
