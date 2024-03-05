import { FormBtn, Input, InputNote } from 'components/LeadForm/LeadForm.styled';
import { Form } from 'formik';
import styled from 'styled-components';

export const AdminPanelSection = styled.section`
  height: max-content;
  padding: 30px 0;
  display: flex;
  align-items: flex-start;
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

export const UsersForm = styled(Form)`
  margin: 0 auto;

  position: sticky;
  top: 50%;

  transform: translateY(-50%);

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
  position: static;
`;

export const UserDBTable = styled.table`
  max-width: 50vw;
  margin: 0 auto;

  table-layout: auto;
  width: 100%;

  text-align: center;
  border: 1px solid #000;
  border-collapse: collapse;
`;

export const UserDBCaption = styled.caption`
  caption-side: top;
  margin-bottom: 20px;
`;

export const UserDBItemValue = styled.span`
  font-size: 11px;
`;

export const UserDBRow = styled.tr`
  border: 1px solid #000;
`;

export const UserHeadCell = styled.th`
  border: 1px solid #000;
  padding: 3px;
`;

export const UserCell = styled.td`
  border: 1px solid #000;
  padding: 3px;
`;

export const UserDeleteButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--main-color);
  border-radius: 5px;
`;

export const UserBanButton = styled(UserDeleteButton)`
  &.banned {
    border-color: #023020;
  }
  &.not_banned {
    border-color: #8b0000;
  }
`;
