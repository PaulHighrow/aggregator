import { useState } from 'react';
import {
  KahootNumbersBtn,
  KahootPicker,
} from '../HostKahoots/HostKahoots.styled';
import { PlatformBackground, PlatformBox } from './Platform.styled';

export const PlatformTrial = ({
  page,
  isPlatformOpen,
  isOpenedLast,
  sectionWidth,
}) => {
  const [activeLesson, setActiveLesson] = useState(1);

  const PLATFORM_LINKS = {
    trials: {
      links: {
        trials_1:
          'https://online.ap.education/school/marathons?marathonId=49509',
        trials_2:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=4063074&marathonId=37835&marathonLessonId=524894',
        trials_3:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=3911221&marathonId=37835&marathonLessonId=512156',
        trials_4:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=3910642&marathonId=37835&marathonLessonId=512099',
        trials_5:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=3911972&marathonId=37835&marathonLessonId=512252',
        trials_6:
          'https://online.ap.education/school/marathons?marathonId=49509',
        trials_7:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=5902708&marathonId=49509&marathonLessonId=736287',
      },
    },
    trials_kids: {
      links: {
        trials_kids_1:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=5703850&marathonId=49702&marathonLessonId=716930',
        trials_kids_2:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=4668905&marathonId=40552&marathonLessonId=589156',
      },
    },
    trials_pl: {
      links: {
        trials_pl_1:
          'https://online.ap.education/school/marathons?marathonId=41057',
        trials_pl_2:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=4563093&marathonId=41057&marathonLessonId=576687',
        trials_pl_3:
          'https://online.ap.education/school/marathons?marathonId=41057',
        trials_pl_4:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=5238417&marathonId=41057&marathonLessonId=666529',
      },
    },
    trials_de: {
      links: {
        trials_de_1:
          'https://online.ap.education/school/marathons?marathonId=41534',
        trials_de_2:
          'https://online.ap.education/school/courses/lesson-edit?lessonId=4505690&marathonId=41534&marathonLessonId=569844',
        trials_de_3:
          'https://online.ap.education/school/marathons?marathonId=41534',
      },
    },
  };

  const lessons = PLATFORM_LINKS[page].links;

  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'platform' ? '4' : '1',
      width: (sectionWidth / 10) * 4,
    };
  };

  const setLessonNumber = async e => {
    const lessonNumber = parseInt(e.currentTarget.innerText);
    setActiveLesson(lessonNumber);
  };

  return (
    <>
      <PlatformBox
        className={isPlatformOpen ? 'shown' : 'hidden'}
        style={{ ...supportBoxStylesHandler() }}
      >
        <>
          <KahootPicker>
            {Object.values(lessons).map((link, i) => (
              <KahootNumbersBtn
                key={i}
                onClick={setLessonNumber}
                className={activeLesson === i + 1 ? 'active' : ''}
                tabIndex={-1}
              >
                {i + 1}
              </KahootNumbersBtn>
            ))}
          </KahootPicker>

          {Object.values(lessons).map((link, i) => (
            <PlatformBackground
              key={i}
              className={activeLesson === i + 1 ? 'active' : ''}
            >
              <iframe
                id={`platform-window-${i + 1}`}
                title={`platform-pin-${i + 1}`}
                src={link}
                width="100%"
                height="100%"
              ></iframe>
            </PlatformBackground>
          ))}
        </>
      </PlatformBox>
    </>
  );
};
