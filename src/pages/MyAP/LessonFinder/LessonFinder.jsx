import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { ReactComponent as LessonCopyIcon } from '../../../img/svg/lessonCopyIcon.svg';
import { ReactComponent as PdfDownload } from '../../../img/svg/pdf-download.svg';
import { ReactComponent as PdfIcon } from '../../../img/svg/pdf-icon.svg';

import parse from 'html-react-parser';
import {
  FinderBox,
  FinderIcon,
  FinderInput,
  FinderLabel,
  FinderLessons,
  FinderMolding,
  LessonBox,
  LessonBoxItem,
  LessonCopyNameButton,
  LessonTextValuesBox,
  LessonTopBox,
  LessonValueName,
  LessonValuePdfLink,
  LessonValueTopic,
  LessonValuesLogo,
  LessonVideoBox,
  PdfWrapper,
} from './LessonFinder.styled';

export const LessonFinder = ({ lessons }) => {
  const [lessonsFound, setLessonsFound] = useState([]);

  const findLesson = e => {
    const value = e.target.value.toLowerCase().trim().trimStart();
    console.log(lessonsFound);
    value !== ''
      ? setLessonsFound(lessonsFound => [
          ...lessons.filter(
            lesson =>
              lesson.keysEn.toLowerCase().includes(value) ||
              lesson.keysUa.toLowerCase().includes(value) ||
              lesson.topic.toLowerCase().includes(value) ||
              lesson.lesson.toLowerCase().includes(value)
          ),
        ])
      : setLessonsFound(lessonsFound => [...lessons]);
  };

  const copyLessonName = lesson => {
    navigator.clipboard.writeText(lesson);
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
              <LessonTopBox>
                <LessonValuesLogo>
                  {lesson.level + lesson.lesson.replace('Lesson', ' -')}
                </LessonValuesLogo>
                <LessonTextValuesBox>
                  <LessonValueName>
                    {lesson.level} {lesson.lesson}
                  </LessonValueName>
                  <LessonCopyNameButton
                    onClick={() =>
                      copyLessonName(lesson.level + ' ' + lesson.lesson)
                    }
                  >
                    <LessonCopyIcon />
                  </LessonCopyNameButton>
                  <LessonValueTopic>{lesson.topic}</LessonValueTopic>
                </LessonTextValuesBox>
              </LessonTopBox>
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
              {lesson.pdf.map((pdf, i) => (
                <PdfWrapper>
                  <PdfIcon />
                  <LessonValuePdfLink
                    target="_blank"
                    rel="noopener noreferrer"
                    to={parse(pdf)}
                    key={i}
                  >
                    Граматика {i + 1}
                    <PdfDownload />
                  </LessonValuePdfLink>
                </PdfWrapper>
              ))}
            </LessonBoxItem>
          ))}
        </LessonBox>
      </FinderLessons>
      <FinderMolding />
    </FinderBox>
  );
};
