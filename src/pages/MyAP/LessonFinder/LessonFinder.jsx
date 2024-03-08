import React, { useState } from 'react';
import {
  FinderInput,
  FinderLessons,
  LessonBox,
  LessonBoxItem,
  LessonValuesItem,
  LessonValuesList,
} from './LessonFinder.styled';

export const LessonFinder = ({ lessons }) => {
  const [lessonsFound, setLessonsFound] = useState([...lessons]);

  const findLesson = e => {
    const value = e.target.value;
    console.log(lessonsFound);
    value !== ''
      ? setLessonsFound(lessonsFound => [
          ...lessons.filter(
            lesson =>
              lesson.keysEn.toLowerCase().includes(value) ||
              lesson.keysUa.toLowerCase().includes(value)
          ),
        ])
      : setLessonsFound(lessonsFound => [...lessons]);
  };

  return (
    <>
      <FinderInput onChange={findLesson} />
      <FinderLessons>
        <LessonBox>
          {lessonsFound.map(lesson => (
            <LessonBoxItem key={lesson._id}>
              <LessonValuesList>
                <LessonValuesItem>{lesson.level}</LessonValuesItem>
                <LessonValuesItem>{lesson.lesson}</LessonValuesItem>
                <LessonValuesItem>{lesson.topic}</LessonValuesItem>
                {/* {lesson.video}
              {lesson.pdf} */}
              </LessonValuesList>
            </LessonBoxItem>
          ))}
        </LessonBox>
      </FinderLessons>
    </>
  );
};
