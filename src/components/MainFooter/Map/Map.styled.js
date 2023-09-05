import styled from 'styled-components';

export const Location = styled.p`
  width: 180px;
  display: flex;
  flex-direction: column;
`;

export const LocationName = styled.span`
  font-size: 16px;
  color: var(--main-color);
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

export const LocationAdress = styled.span`
  font-size: 13px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
