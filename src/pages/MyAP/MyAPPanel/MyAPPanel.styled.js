import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../img/svg/myap/search.svg';
import { ReactComponent as CupIcon } from '../../../img/svg/myap/cup.svg';
import { ReactComponent as CalendarIcon } from '../../../img/svg/myap/calendar.svg';

export const PanelBackdrop = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  background-color: #00000080;
  z-index: 4;
`;

export const APPanel = styled.div`
  width: 60px;
  height: 145px;

  position: absolute;
  top: 142px;
  right: 38px;
  z-index: 5;
  border-radius: 21px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #fff;
`;

export const APPanelBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  color: #bebecc;
  transition: color var(--animation-global);

  &:hover {
    color: #525266;
  }
`;

export const SearchBtnIcon = styled(SearchIcon)`
  height: 30px;
  width: 30px;
`;

export const CupBtnIcon = styled(CupIcon)`
  height: 30px;
  width: 30px;
`;

export const CalendarBtnIcon = styled(CalendarIcon)`
  height: 30px;
  width: 30px;
`;
