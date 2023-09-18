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
  gap: 25px;
  align-items: center;

  border-radius: 20px;
  background-color: var(--main-color);
  text-align: center;

  width: 300px;
  height: 500px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
    padding: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 700px;
    height: 700px;
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
  font-size: 32px;
  text-transform: uppercase;
`;

export const ModalDesc = styled.p`
  font-size: 26px;
  color: var(--secondary-color);
`;
