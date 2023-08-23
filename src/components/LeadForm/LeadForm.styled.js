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
  width: 310px;
  padding: 40px;
  border: 2px solid var(--secondary-color);
  margin: 0 auto;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 640px;
  }
`;

export const FormTitle = styled.h3`
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--main-color);
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
`;

export const Input = styled(Field)`
  width: 240px;
  padding: 10px 5px;

  border-color: transparent;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 480px;
  }

  &:hover,
  &:focus {
    background-color: var(--secondary-burnt-color);
    outline: transparent;
  }
`;

export const InputNote = styled(ErrorMessage)`
  position: absolute;
  bottom: -16px;
  color: var(--secondary-burnt-color);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const FormCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border-color: var(--secondary-color);
  border-radius: 50%;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: red;
  }
`;

export const CloseIcon = styled(IoClose)`
  fill: var(--secondary-color);
  width: 26px;
  height: 26px;
  flex-shrink: 0;

  ${FormCloseBtn}:hover & {
    fill: red;
  }
`;

export const FormBtn = styled(LeadBtn)`
  width: 240px;
`;
