import styled from 'styled-components';

export const AdmissionSection = styled.section`
  position: relative;
  padding: 30px 0;

  @media screen and (min-width: 768px) {
    padding: 42px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 55px 0;
  }
`;

export const AdmissionTitle = styled.h3`
  padding-left: 30px;
  color: var(--main-color);
  font-family: var(--title-font-family);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  width: 300px;
  -webkit-text-stroke: 1px var(--main-color);
  margin-bottom: 18px;
  text-transform: uppercase;

  @media screen and (max-width: 359px) {
    width: 260px;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    letter-spacing: 2.2px;
    margin: 0 auto;
    margin-bottom: 52px;
    padding-left: 42px;
    width: 540px;
    font-size: 34px;
    -webkit-text-stroke: 2px var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 44px;
    padding-left: 55px;
    width: 640px;
    margin-bottom: 87px;
  }
`;
