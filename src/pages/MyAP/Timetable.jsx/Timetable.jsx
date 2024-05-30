import {
  TimetableBody,
  TimetableBox,
  TimetableHeading,
  TimetableIcon,
  TimetableLessonLink,
  TimetableLessonLinkText,
  TimetableLessonType,
  TimetableSpeakings,
  TimetableWebinars,
} from './Timetable.styled';

export const Timetable = ({ user }) => {
  return (
    <TimetableBox>
      <TimetableHeading>
        <TimetableIcon />
        Графік занять
      </TimetableHeading>
      <TimetableBody>
        <TimetableWebinars>
          <TimetableLessonType>Вебінари</TimetableLessonType>
          <TimetableLessonLink to="/streams/a1">
            <TimetableLessonLinkText>Перейти</TimetableLessonLinkText>
          </TimetableLessonLink>
        </TimetableWebinars>{' '}
        <TimetableSpeakings>
          <TimetableLessonType>Мовні практики</TimetableLessonType>
          <TimetableLessonLink to="/streams/a1-sc">
            <TimetableLessonLinkText>Перейти</TimetableLessonLinkText>
          </TimetableLessonLink>
        </TimetableSpeakings>
      </TimetableBody>
    </TimetableBox>
  );
};
