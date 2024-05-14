import styled from 'styled-components';
import { CalendarBtnIcon } from '../MyAPPanel/MyAPPanel.styled';
import { ReactComponent as CoursesArrowLeft } from '../../../img/svg/month-switch-left.svg';
import { ReactComponent as CoursesArrowRight } from '../../../img/svg/month-switch-right.svg';

export const AttendanceBox = styled.div`
  position: absolute;
  top: 142px;
  right: 120px;
  z-index: 5;

  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  font-family: var(--my-ap-font-family);

  overflow: hidden;
  border-radius: 20px;
  padding: 0 20px;
  height: 272px;
  width: 362px;
`;

export const AttendanceHeading = styled.h3`
  padding: 9px 0;

  color: #525266;
  border-bottom: 1px solid #0000000d;
  margin-bottom: -1px;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CalendarIcon = styled(CalendarBtnIcon)``;

export const AttendanceVisitedBox = styled.div`
  padding: 18px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MonthSwitchBox = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;

  margin-left: 16px;
`;

export const AttendanceMonth = styled.span`
  color: #525266;
  font-size: 14px;

  width: 70px;
  text-align: center;

  text-transform: capitalize;
`;

export const AttendanceBtnLeft = styled.button`
  width: 16px;
  height: 16px;

  position: relative;

  border: none;
  outline: transparent;
  background-color: transparent;

  &:not(:disabled):hover svg,
  &:not(:disabled):focus svg {
    color: #000;
    filter: drop-shadow(0.5px 0 1px rgba(0, 0, 0, 0.5));
  }
`;

export const AttendanceArrowLeft = styled(CoursesArrowLeft)`
  color: #bebecc;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  transition: color var(--animation-global), filter var(--animation-global);

  &.available {
    color: #525266;
  }
`;

export const AttendanceBtnRight = styled.button`
  width: 16px;
  height: 16px;

  position: relative;

  border: none;
  outline: transparent;
  background-color: transparent;

  &:not(:disabled):hover svg,
  &:not(:disabled):focus svg {
    color: #000;
    filter: drop-shadow(0.5px 0 1px rgba(0, 0, 0, 0.5));
  }
`;

export const AttendanceArrowRight = styled(CoursesArrowRight)`
  color: #bebecc;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  transition: color var(--animation-global), filter var(--animation-global);

  &.available {
    color: #525266;
  }
`;

export const VisitedList = styled.ul`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin: -1px;
  padding: 0 8px;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const VisitedItem = styled.li`
  padding: 10px 0;
  display: flex;
  gap: 8px;
`;

export const VisitedText = styled.span``;

export const VisitedCounter = styled.span``;

export const VisitedYearBox = styled.div`
  padding: 10px 8px;
  display: flex;
  gap: 8px;
  font-size: 14px;
`;
