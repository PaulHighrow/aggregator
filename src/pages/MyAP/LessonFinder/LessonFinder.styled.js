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
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LessonValuesLogo = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  text-transform: uppercase;
  text-align: center;
  font-size: 7.5px;
  font-weight: 700;
  color: var(--secondary-color);
  text-shadow: 0px 1.527px 1.527px rgba(0, 0, 0, 0.25);

  border-radius: 6px;
  background: linear-gradient(322deg, #0f645b -5.61%, #09c6cc 93.88%);
`;

export const LessonValuesList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  gap: 4px;
`;

export const LessonTextValuesBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LessonValuesItem = styled.li`
  position: relative;
`;

export const LessonValueName = styled.p`
color: #525266;
font-size: 14px;
font-weight: 500;
`

export const LessonValueTopic = styled.p`
color: #BEBECC;
font-size: 12px;
`

export const LessonCopyNameButton = styled.button`
  border: none;
  outline: transparent;
  background-color: transparent;

  position: absolute;
  top: 0;
  right: 0;
`;

export const LessonVideoBox = styled.div`
  background-color: #0000004d;
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
`;
