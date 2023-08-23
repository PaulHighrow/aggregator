import styled from 'styled-components';

export const ServicesSection = styled.section`
  background-color: var(--main-color);

  padding: 20px 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  gap: 10px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const ServiceCard = styled.li`
  --items: 1;
  --gap: 10px;
  flex-basis: calc((100% - var(--gap) * var(--items)) / var(--items));
  overflow: hidden;
  border-radius: 30px;
  transition: transform var(--animation-global), box-shadow var(--animation-global);

  @media screen and (min-width: 480px) {
    --items: 2;
    --gap: 15px;
  }

  @media screen and (min-width: 1280px) {
    --items: 4;
    --gap: 20px;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 10px 1px #ffffff99;
  }
`;

export const ServiceTitle = styled.h3`
  background-color: var(--secondary-color);
  color: var(--main-color);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  padding: 18px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const ServiceText = styled.p`
  background-color: var(--text-color);
  color: var(--main-color);
  font-size: 16px;
  padding: 22px 15px;
  height: 100%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;
