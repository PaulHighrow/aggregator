import React, { useState } from 'react';
import {
  FinderInput,
  FinderLessons,
  LessonBox,
  LessonBoxItem,
  LessonValuesItem,
  LessonValuesList,
} from './LessonFinder.styled';
import ReactPlayer from 'react-player/youtube';
import { VideoBox } from 'components/HowItWorks/HowItWorks.styled';

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
                <LessonValuesItem>
                  {lesson.level} {lesson.lesson}
                </LessonValuesItem>
                <LessonValuesItem>{lesson.topic}</LessonValuesItem>
                {lesson.video[0] && (
                  <LessonValuesItem>
                    <VideoBox>
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
                    </VideoBox>
                  </LessonValuesItem>
                )}
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
