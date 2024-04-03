import styled from 'styled-components';
import { SearchBtnIcon } from '../MyAPPanel/MyAPPanel.styled';

export const FinderBox = styled.div`
  position: absolute;
  top: 142px;
  right: calc(10% - 48px);
  z-index: 5;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  border-radius: 20px;
`;

export const FinderLabel = styled.label`
  display: block;
  position: relative;
`;

export const FinderIcon = styled(SearchBtnIcon)`
  position: absolute;
  top: 50%;
  left: 20px;

  transform: translateY(-50%);
`;

export const FinderInput = styled.input`
  height: 48px;
  width: 362px;

  overflow: hidden;

  padding: 9px 20px;
  padding-left: 60px;
  border: none;
  outline: transparent;

  font-family: var(--my-ap-font-family);
  font-size: 20px;
  color: #525266;

  &.hidden {
    transform: translateX(-100%);
  }

  &.shown {
    transform: translateX(0);
  }
`;

export const FinderLessons = styled.div`
  height: 314px;
  width: 362px;
  padding: 0 20px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  background-color: #fff;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #0000000d;
  }
`;

export const LessonBox = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: var(--my-ap-font-family);

  gap: 8px;
`;

export const LessonBoxItem = styled.li`
  color: #000;
  padding: 4px;
  border-bottom: 1px solid #0000000d;
`;

export const LessonValuesList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  gap: 4px;
`;

export const LessonValuesItem = styled.li`
  display: block;
`;

export const LessonVideoBox = styled.div`
  background-color: #0000004d;
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
`;
