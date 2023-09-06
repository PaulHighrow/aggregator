import { LeadBtn } from 'components/Menu/Menu.styled';
import { ErrorMessage, Field, Form } from 'formik';
import { IoClose } from 'react-icons/io5/';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  padding: 40px 20px;
  border-radius: 20px;
  margin: 0 auto;
  gap: 36px;

  @media screen and (min-width: 768px) {
    width: 640px;
    padding: 50px 20px;
  }
`;

export const FormTitle = styled.h3`
  color: var(--secondary-color);
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Input = styled(Field)`
  width: 280px;
  padding: 10px 5px;
  font-size: 22px;

  border-color: transparent;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &:hover,
  &:focus {
    background-color: var(--secondary-burnt-color);
    outline: transparent;
  }
`;

export const InputNote = styled(ErrorMessage)`
  position: absolute;
  bottom: -20px;
  color: var(--secondary-burnt-color);
  text-align: center;
  font-size: 15px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    bottom: -28px;
    font-size: 22px;
  }
`;

export const FormCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  border-radius: 50%;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: var(--accent-color);
  }
`;

export const CloseIcon = styled(IoClose)`
  fill: var(--secondary-color);
  width: 26px;
  height: 26px;
  flex-shrink: 0;

  ${FormCloseBtn}:hover & {
    fill: var(--accent-color);
  }
`;

export const FormBtn = styled(LeadBtn)`
  font-size: 24px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
