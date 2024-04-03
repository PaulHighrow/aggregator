import React, { useState } from 'react';
import {
  FinderBox,
  FinderIcon,
  FinderInput,
  FinderLabel,
  FinderLessons,
  LessonBox,
  LessonBoxItem,
  LessonValuesItem,
  LessonValuesList,
  LessonVideoBox,
} from './LessonFinder.styled';
import ReactPlayer from 'react-player/youtube';

export const LessonFinder = ({ lessons }) => {
  const [lessonsFound, setLessonsFound] = useState([...lessons]);

  const findLesson = e => {
    const value = e.target.value.toLowerCase().trim().trimStart();
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
    <FinderBox>
      <FinderLabel>
        <FinderIcon />
        <FinderInput onChange={findLesson} />
      </FinderLabel>
      <FinderLessons>
        <LessonBox>
          {lessonsFound.map(lesson => (
            <LessonBoxItem key={lesson._id}>
              <LessonValuesList>
                <LessonValuesItem>
                  {lesson.level} {lesson.lesson}
                </LessonValuesItem>
                <LessonValuesItem>{lesson.topic}</LessonValuesItem>
                {lesson.video[0] && (
                  <LessonValuesItem>
                    <LessonVideoBox>
                      <ReactPlayer
                        loop={true}
                        muted={false}
                        controls={true}
                        style={{
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                        }}
                        width="100%"
                        height="100%"
                        url={lesson.video[0]}
                      />
                    </LessonVideoBox>
                    {lesson.pdf}
                  </LessonValuesItem>
                )}
              </LessonValuesList>
            </LessonBoxItem>
          ))}
        </LessonBox>
      </FinderLessons>
    </FinderBox>
  );
};
