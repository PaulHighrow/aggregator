import styled from 'styled-components';

export const FinderInput = styled.input`
  height: 65px;
  width: 500px;

  overflow: hidden;

  background-color: transparent;
  position: absolute;
  z-index: 2;

  font-family: var(--streams-font-family);

  &.hidden {
    transform: translateX(-100%);
  }

  &.shown {
    transform: translateX(0);
  }
`;

export const FinderLessons = styled.div`
  height: 650px;
  width: 500px;

  overflow-y: scroll;

  background-color: #fff;
  position: absolute;
  top: 65px;
  z-index: 2;
`;

export const LessonBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LessonBoxItem = styled.li`
  color: #000;
`;

export const LessonValuesList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const LessonValuesItem = styled.li`

`