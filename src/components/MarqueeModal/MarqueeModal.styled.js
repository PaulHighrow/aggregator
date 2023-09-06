import styled from 'styled-components';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import { FormCloseBtn } from 'components/LeadForm/LeadForm.styled';

export const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);

  border-radius: 20px;
  background-color: var(--main-color);
  text-align: center;

  width: 300px;
  height: 700px;
  padding: 40px;

  @media screen and (min-width: 768px) {
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
  font-size: 32px;
  margin-bottom: 25px;
`;

export const ServiceList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  color: var(--secondary-color);
`;

export const ServiceLink = styled.a`
  font-size: 18px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
