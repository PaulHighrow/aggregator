import { useState } from 'react';
import {
  AttendanceArrowLeft,
  AttendanceArrowRight,
  AttendanceBox,
  AttendanceBtnLeft,
  AttendanceBtnRight,
  AttendanceHeading,
  AttendanceMonth,
  AttendancePointsBox,
  AttendancePointsContainer,
  AttendanceVisitedBox,
  CalendarIcon,
  MonthSwitchBox,
  VisitedCounter,
  VisitedItem,
  VisitedList,
  VisitedText,
  VisitedTotal,
  VisitedYearBox,
} from './Attendance.styled';
import { ReactComponent as AttendancePlus } from '../../../img/svg/attendance-plus.svg';
import { ReactComponent as AttendanceMinus } from '../../../img/svg/attendance-minus.svg';
import { ReactComponent as AttendanceEmpty } from '../../../img/svg/attendance-empty.svg';

export const Attendance = ({ user }) => {
  const [month, setMonth] = useState(
    +new Intl.DateTimeFormat('uk-UK', { month: 'numeric' }).format()
  );
  const [year, setYear] = useState(
    +new Intl.DateTimeFormat('uk-UK', { year: 'numeric' }).format()
  );

  const changeDateFormat = dateString => {
    if (dateString) {
      const dateArray = dateString.split('.');
      return Date.parse([dateArray[1], dateArray[0], dateArray[2]].join('.'));
    }
    return;
  };

  const decreaseMonth = () => {
    if (month > 1) {
      setMonth(month - 1);
      return;
    }
    setMonth(12);
    setYear(year - 1);
    return;
  };

  const increaseMonth = () => {
    if (month < 12) {
      setMonth(month + 1);
      return;
    }
    setMonth(1);
    setYear(year + 1);
    return;
  };

  const calculateWeeklyVisits = () => {
    const lessonDays = getLessonDaysForWeeks().map(lessonDay =>
      lessonDay.getDate()
    );
    return user.visited.filter(
      date =>
        new Date(changeDateFormat(date)).getMonth() + 1 === month &&
        lessonDays.includes(new Date(changeDateFormat(date)).getDate())
    ).length;
  };

  const calculateWeeklyUnattended = () => {
    const lessonDays = getLessonDaysForWeeks();
    const currentDay = lessonDays.findIndex(
      lessonDay => lessonDay.getDate() === new Date().getDate()
    );
    return lessonDays.slice(0, currentDay + 1).length - calculateWeeklyVisits();
  };

  const calculateMonthlyVisits = passedMonth =>
    user.visited.filter(
      date =>
        new Date(changeDateFormat(date)).getMonth() + 1 === passedMonth &&
        new Date(changeDateFormat(date)).getFullYear() === year
    ).length;

  const calculateYearlyVisits = () => {
    return user.visited.filter(
      date => new Date(changeDateFormat(date)).getFullYear() === year
    ).length;
  };

  const getLessonDaysForWeeks = () => {
    let date = new Date();

    const sunday = date.getDate() - date.getDay();

    const lessonDays = [];

    date.setDate(sunday);
    while (date.getDay() <= 6 && date.getDate() < sunday + 7) {
      if (date.getDay() >= 1 && date.getDay() <= 4) {
        lessonDays.push(
          new Date(
            changeDateFormat(
              date.getDate() +
                '.' +
                (date.getMonth() + 1) +
                '.' +
                date.getFullYear()
            )
          )
        );
      }
      date.setDate(date.getDate() + 1);
    }
    return lessonDays;
  };

  const getLessonDaysForMonths = () => {
    let date = new Date(year, month - 1, 1);

    const lessonDays = [];

    date.setDate(1);
    while (date.getMonth() + 1 === month) {
      if (date.getDay() >= 1 && date.getDay() <= 4) {
        lessonDays.push(
          date.getDate() +
            '.' +
            (date.getMonth() + 1) +
            '.' +
            date.getFullYear()
        );
      }
      date.setDate(date.getDate() + 1);
    }
    return lessonDays.length;
  };

  const getLessonDaysForYears = () => {
    let date = new Date();

    const lessonDays = [];

    date.setDate(1);
    date.setMonth(0);

    while (date.getFullYear() === year) {
      if (date.getDay() >= 1 && date.getDay() <= 4) {
        lessonDays.push(
          date.getDate() +
            '.' +
            (date.getMonth() + 1) +
            '.' +
            date.getFullYear()
        );
      }
      date.setDate(date.getDate() + 1);
    }
    return lessonDays.length;
  };

  const calculatePoints = () => {
    const lessonDays = getLessonDaysForWeeks().map(lessonDay =>
      lessonDay.getDate()
    );

    const visitedWithinWeek = user.visited.filter(
      date =>
        (date =
          new Date(changeDateFormat(date)).getMonth() + 1 === month &&
          lessonDays.includes(new Date(changeDateFormat(date)).getDate()))
    );

    const visitedWithinWeekDays = visitedWithinWeek.map(date =>
      new Date(changeDateFormat(date)).getDate()
    );

    return lessonDays.map(date =>
      new Date(year, month - 1, date).getMonth() + 1 === month &&
      visitedWithinWeekDays.includes(
        new Date(year, month - 1, date).getDate()
      ) ? (
        <AttendancePlus />
      ) : new Date(year, month - 1, date).getMonth() + 1 === month &&
        date < new Date().getDate() &&
        !visitedWithinWeekDays.includes(
          new Date(year, month - 1, date).getDate()
        ) ? (
        <AttendanceMinus />
      ) : (
        <AttendanceEmpty />
      )
    );
  };

  return (
    <AttendanceBox>
      <AttendanceHeading>
        <CalendarIcon />
        Відвідуваність
      </AttendanceHeading>
      <AttendanceVisitedBox>
        <MonthSwitchBox>
          <AttendanceBtnLeft
            disabled={calculateMonthlyVisits(month - 1) === 0 ? true : false}
            onClick={decreaseMonth}
          >
            <AttendanceArrowLeft
              className={calculateMonthlyVisits(month - 1) !== 0 && 'available'}
            />
          </AttendanceBtnLeft>
          <AttendanceMonth>
            {new Intl.DateTimeFormat('uk-UK', { month: 'long' }).format(
              new Date(`${month}`)
            )}
          </AttendanceMonth>
          <AttendanceBtnRight
            disabled={calculateMonthlyVisits(month + 1) === 0 ? true : false}
            onClick={increaseMonth}
          >
            <AttendanceArrowRight
              className={calculateMonthlyVisits(month + 1) !== 0 && 'available'}
            />
          </AttendanceBtnRight>
        </MonthSwitchBox>
        <VisitedList>
          <VisitedItem>
            <AttendancePointsBox>
              <VisitedText>Відвідано:</VisitedText>
              <AttendancePointsContainer>
                {calculatePoints()}
              </AttendancePointsContainer>
              <VisitedCounter>
                {calculateWeeklyVisits()}/
                <VisitedTotal>{getLessonDaysForWeeks().length}</VisitedTotal>
              </VisitedCounter>
            </AttendancePointsBox>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>Пропуски:</VisitedText>
            <VisitedCounter
              style={{ color: calculateWeeklyUnattended() > 0 && '#D61D1D' }}
            >
              {calculateWeeklyUnattended()}
            </VisitedCounter>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>За місяць:</VisitedText>
            <VisitedCounter>
              {calculateMonthlyVisits(month)}/
              <VisitedTotal>{getLessonDaysForMonths()}</VisitedTotal>
            </VisitedCounter>
          </VisitedItem>
        </VisitedList>
        <VisitedYearBox>
          <VisitedText>Загальна відвідуваність за рік:</VisitedText>
          <VisitedCounter>
            {calculateYearlyVisits()}/
            <VisitedTotal>{getLessonDaysForYears()}</VisitedTotal>
          </VisitedCounter>
        </VisitedYearBox>
      </AttendanceVisitedBox>
    </AttendanceBox>
  );
};
