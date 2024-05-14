import { useState } from 'react';
import {
  AttendanceArrowLeft,
  AttendanceArrowRight,
  AttendanceBox,
  AttendanceBtnLeft,
  AttendanceBtnRight,
  AttendanceHeading,
  AttendanceMonth,
  AttendanceVisitedBox,
  CalendarIcon,
  MonthSwitchBox,
  VisitedCounter,
  VisitedItem,
  VisitedList,
  VisitedText,
  VisitedYearBox,
} from './Attendance.styled';

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

  // const getLessonDaysForWeeks = () => {
  //   let date = new Date();
  //   console.log(date);
  //   const sunday = date.getDate() - date.getDay();

  //   console.log(sunday);

  //   const lessonDays = [];

  //   date.setDate(sunday);
  //   console.log(date);
  //   while (date.getDay() <= 6) {
  //     if (date.getDay() >= 1 && date.getDay() <= 4) {
  //       lessonDays.push(date);
  //     }
  //     date.setDate(date.getDate() + 1);
  //   }
  //   return lessonDays.length;
  // };

  const getLessonDaysForMonths = () => {
    let date = new Date(year, month - 1, 1);

    const lessonDays = [];

    date.setDate(1);
    while (date.getMonth() + 1 === month) {
      if (date.getDay() >= 1 && date.getDay() <= 4) {
        lessonDays.push(date);
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
        lessonDays.push(date);
      }
      date.setDate(date.getDate() + 1);
    }
    return lessonDays.length;
  };

// getLessonDaysForWeeks()

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
            <VisitedText>Відвідано:</VisitedText>
            <VisitedCounter>
              {
                user.visited.filter(
                  date =>
                    new Date(changeDateFormat(date)).getMonth() + 1 === month
                ).length
              }/16
            </VisitedCounter>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>Пропуски:</VisitedText>
            <VisitedCounter>
              {
                user.visited.filter(
                  date =>
                    new Date(changeDateFormat(date)).getMonth() + 1 === month
                ).length
              }
              /{getLessonDaysForMonths()}
            </VisitedCounter>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>За місяць:</VisitedText>
            <VisitedCounter>
              {calculateMonthlyVisits(month)}/{getLessonDaysForMonths()}
            </VisitedCounter>
          </VisitedItem>
        </VisitedList>
        <VisitedYearBox>
          <VisitedText>Загальна відвідуваність за рік:</VisitedText>
          <VisitedCounter>
            {calculateYearlyVisits()}/{getLessonDaysForYears()}
          </VisitedCounter>
        </VisitedYearBox>
      </AttendanceVisitedBox>
    </AttendanceBox>
  );
};
