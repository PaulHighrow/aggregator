import styled from 'styled-components';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { FormCloseBtn } from 'components/LeadForm/LeadForm.styled';

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  border-radius: 20px;
  background-color: var(--main-color);
  text-align: center;

  width: 300px;
  padding: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 700px;
    padding: 40px;
  }
`;

export const MarqueeBackdrop = styled(Backdrop)`
  background-color: #000000ab;
`;

export const MarqueeCloseBtn = styled(FormCloseBtn)`
  width: 30px;
  height: 30px;
`;

export const ModalHeader = styled.h4`
  color: var(--accent-color);
  font-family: var(--secondary-font-family);
  font-size: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const ModalDesc = styled.p`
  color: var(--secondary-color);
  font-size: 18px;
  max-height: 150px;
  /* overflow-y: scroll; */

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
