import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';
import { SectionDescription } from 'components/HowItWorks/HowItWorks.styled';

export const PageFormNewSection = styled.section`
  position: relative;
  padding: 50px 20px 50px 20px;

  @media screen and (min-width: 768px) {
    padding: 100px 40px 100px 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px;
    padding-top: 150px;
    padding-bottom: 150px;
  }
`;

export const StyledFormNew = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--new-font-family);
  width: 100%;
  margin: 0 auto;
  gap: 36px;
`;

export const PageFormTitleBox = styled.div`
  width: 100%;
  max-width: 480px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    max-width: unset;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    margin-bottom: 80px;
    min-width: 340px;
  }
`;

export const PageFormDescription = styled(SectionDescription)`
  margin: 0 auto;
  max-width: unset;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 360px) {
    max-width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const PageFormInput = styled(Field)`
  width: 100%;
  padding: 20px;
  font-size: 14px;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 50px;

  @media screen and (min-width: 360px) {
    max-width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &:hover,
  &:focus {
    background-color: var(--secondary-burnt-color);
    outline: transparent;
  }

  &:-webkit-autofill {
    &,
    &:hover,
    &:focus {
      -webkit-text-fill-color: var(--main-color);
      -webkit-box-shadow: 0 0 0px 1000px var(--accent-color) inset;
    }
  }

  &::placeholder {
    color: var(--main-color);
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
