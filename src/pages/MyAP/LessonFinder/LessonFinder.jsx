import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { ReactComponent as LessonCopyIcon } from '../../../img/svg/lessonCopyIcon.svg';
import {
  FinderBox,
  FinderIcon,
  FinderInput,
  FinderLabel,
  FinderLessons,
  LessonBox,
  LessonBoxItem,
  LessonCopyNameButton,
  LessonValueName,
  LessonValueTopic,
  LessonValuesLogo,
  LessonVideoBox
} from './LessonFinder.styled';

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
              <LessonValuesLogo>
                {lesson.level + lesson.lesson.replace('Lesson', ' -')}
              </LessonValuesLogo>
              {/* <LessonValuesBox> */}
              <LessonValueName>
                {lesson.level} {lesson.lesson}
              </LessonValueName>
              <LessonCopyNameButton>
                <LessonCopyIcon />
              </LessonCopyNameButton>
              <LessonValueTopic>{lesson.topic}</LessonValueTopic>
              {/* </LessonValuesBox> */}
              {lesson.video[0] && (
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
              )}
              {lesson.pdf}
            </LessonBoxItem>
          ))}
        </LessonBox>
      </FinderLessons>
    </FinderBox>
  );
};
