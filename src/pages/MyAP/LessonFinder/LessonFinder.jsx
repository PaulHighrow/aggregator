import parse from 'html-react-parser';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { ReactComponent as LessonCopyIcon } from '../../../img/svg/lessonCopyIcon.svg';
import { ReactComponent as PdfDownload } from '../../../img/svg/pdf-download.svg';
import { ReactComponent as PdfIcon } from '../../../img/svg/pdf-icon.svg';

import {
  FaqBox,
  FaqList,
  FaqListItem,
  FaqListTrigger,
  FaqSwitchDown,
  FaqSwitchUp,
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
  PdfBox,
  PdfPreview,
  PdfPreviewBackground,
  PdfWrapper,
} from './LessonFinder.styled';

export const LessonFinder = ({ lessons, user }) => {
  const [lessonsFound, setLessonsFound] = useState([]);
  const [isPdfPreviewOpen, setIsPdfPreviewOpen] = useState(false);
  const [isFaqListOpen, setIsFaqListOpen] = useState(false);
  const [openedPdf, setOpenedPdf] = useState('');

  const findLesson = e => {
    const value = e.target.value.toLowerCase().trim().trimStart();
    console.log(lessonsFound);
    value !== ''
      ? setLessonsFound(
          lessonsFound =>
            (lessonsFound = [
              ...lessons.filter(
                lesson =>
                  (lesson.keysEn.toLowerCase().includes(value) ||
                    lesson.keysUa.toLowerCase().includes(value) ||
                    lesson.topic.toLowerCase().includes(value) ||
                    lesson.lesson.toLowerCase().includes(value)) &&
                  user.lang === lesson.lang
              ),
            ])
        )
      : setLessonsFound(lessonsFound => (lessonsFound = [...lessons]));
  };

  const copyLessonName = lesson => {
    navigator.clipboard.writeText(lesson);
  };

  const openPdfPreviewOnHover = e => {
    setOpenedPdf(pdf => (pdf = e.target.id));
    if (!isPdfPreviewOpen) {
      setIsPdfPreviewOpen(isOpen => !isOpen);
    }
  };

  const closePdfPreviewOnMouseOut = () => {
    setOpenedPdf(pdf => (pdf = ''));
    if (isPdfPreviewOpen) {
      setIsPdfPreviewOpen(isOpen => !isOpen);
    }
  };

  const toggleFaq = () => {
    setIsFaqListOpen(isOpen => !isOpen);
  };

  return (
    <FinderBox className={lessonsFound.length === 0 && 'nothing-found'}>
      <FinderLabel>
        <FinderIcon />
        <FinderInput
          onChange={findLesson}
          placeholder="Введіть номер або тему уроку"
        />
      </FinderLabel>

      {lessonsFound.length !== 0 && (
        <>
          <FinderLessons>
            <LessonBox>
              {lessonsFound.slice(0, 5).map(lesson => (
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
                  <PdfBox onMouseLeave={closePdfPreviewOnMouseOut}>
                    {lesson.pdf.map((pdf, i) => (
                      <>
                        <PdfWrapper
                          key={pdf}
                          id={pdf}
                          onMouseEnter={e => openPdfPreviewOnHover(e)}
                        >
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
                        <PdfPreviewBackground
                          className={
                            isPdfPreviewOpen &&
                            openedPdf === pdf &&
                            'preview-open'
                          }
                        >
                          {isPdfPreviewOpen && openedPdf === pdf && (
                            <PdfPreview
                              title={`Preview of ${pdf}`}
                              src={pdf
                                .replace('open?id=', 'file/d/')
                                .replace('view', 'preview')
                                .replace('&usp=drive_copy', '/preview')}
                              allow="autoplay"
                            ></PdfPreview>
                          )}
                        </PdfPreviewBackground>
                      </>
                    ))}
                  </PdfBox>
                  {lesson.faq.length > 0 && (
                    <FaqBox>
                      <FaqListTrigger onClick={toggleFaq}>
                        FAQ{' '}
                        {isFaqListOpen ? <FaqSwitchUp /> : <FaqSwitchDown />}
                      </FaqListTrigger>
                      {isFaqListOpen && (
                        <FaqList>
                          {lesson.faq.map((answer, i) => (
                            <FaqListItem>
                              <a href={answer}> Відповідь {i + 1}</a>
                            </FaqListItem>
                          ))}
                        </FaqList>
                      )}
                    </FaqBox>
                  )}
                </LessonBoxItem>
              ))}
            </LessonBox>
          </FinderLessons>
          <FinderMolding />
        </>
      )}
    </FinderBox>
  );
};
