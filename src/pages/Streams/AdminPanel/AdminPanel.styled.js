import { FormBtn, Input, InputNote } from 'components/LeadForm/LeadForm.styled';
import { Form } from 'formik';
import styled from 'styled-components';

export const AdminPanelSection = styled.section`
  height: max-content;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled(Form)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const LinksForm = styled(Form)`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const AdminFormBtn = styled(FormBtn)`
  margin: 0 auto;
`;

export const AdminInput = styled(Input)`
  border: 2px solid var(--main-color);
`;

export const AdminInputNote = styled(InputNote)`
  color: var(--main-color);
  font-size: 24px;
  font-weight: 700;
  bottom: -1.1em;
`;