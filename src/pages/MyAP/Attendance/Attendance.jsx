import { useState } from 'react';
import { ReactComponent as AttendanceEmpty } from '../../../img/svg/attendance-empty.svg';
import { ReactComponent as AttendanceMinus } from '../../../img/svg/attendance-minus.svg';
import { ReactComponent as AttendancePlus } from '../../../img/svg/attendance-plus.svg';
import {
  AttendanceArrowLeft,
  AttendanceArrowRight,
  AttendanceBox,
  AttendanceBtn,
  AttendanceFlex,
  AttendanceHeading,
  AttendancePeriod,
  AttendancePoints,
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

export const Attendance = ({ user }) => {
  const [week, setWeek] = useState(new Date().getDate() - new Date().getDay());
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

  const decreaseWeek = () => {
    setWeek(week => week - 7);
  };

  const increaseWeek = () => {
    setWeek(week => week + 7);
  };

  const decreaseMonth = () => {
    setWeek(new Date(year, month - 1, 2).getDate() - new Date().getDay());
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

  const editDateFormat = date => (`${date}`.length > 1 ? date : '0' + date);

  const calculateWeekPeriod = () => {
    const firstDayOfWeekDate = new Date(year, month - 1, week + 1);
    console.log();

    const date = new Date(firstDayOfWeekDate);

    const lastDayOfWeekDate = new Date(date.setDate(date.getDate() + 6));

    return `${editDateFormat(firstDayOfWeekDate.getDate())}.${editDateFormat(
      firstDayOfWeekDate.getMonth() + 1
    )} - ${editDateFormat(lastDayOfWeekDate.getDate())}.${editDateFormat(
      lastDayOfWeekDate.getMonth() + 1
    )}.${lastDayOfWeekDate.getFullYear()}`;
  };

  const calculateWeeklyVisits = () => {
    const lessonDays = getLessonDaysForWeeks().map(lessonDay =>
      lessonDay.getDate()
    );
    return user.visited.filter(
      date =>
        new Date(changeDateFormat(date)).getMonth() + 1 ===
          new Date().getMonth() + 1 &&
        lessonDays.includes(new Date(changeDateFormat(date)).getDate())
    ).length;
  };

  const calculateWeeklyUnattended = () => {
    const lessonDays = getLessonDaysForWeeks();
    const currentDay = lessonDays.findIndex(
      lessonDay => lessonDay.getDate() === new Date().getDate()
    );
    const futureDays = lessonDays.slice(0, currentDay + 1).length;
    return futureDays === 0 ? 0 : futureDays - calculateWeeklyVisits();
  };

  const calculateMonthlyUnattended = () => {
    const lessonDays = getLessonDaysForMonths();
    console.log(lessonDays);
    const currentDay = lessonDays.findIndex(
      lessonDay => lessonDay.getDate() === new Date().getDate()
    );
    console.log(currentDay);
    return (
      lessonDays.slice(0, currentDay + 1).length - calculateMonthlyVisits()
    );
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

    date.getDate() !== sunday ? date.setDate(sunday) : date.setDate(sunday + 1);
    let i = 0;
    while (date.getDay() <= 6 && date.getDate() < sunday + 7 && i < 7) {
      i += 1;
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
        lessonDays.push(date);
      }
      date.setDate(date.getDate() + 1);
    }
    return lessonDays;
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
          new Date(changeDateFormat(date)).getMonth() + 1 ===
            new Date().getMonth() + 1 &&
          lessonDays.includes(new Date(changeDateFormat(date)).getDate()))
    );

    const visitedWithinWeekDays = visitedWithinWeek.map(date =>
      new Date(changeDateFormat(date)).getDate()
    );

    return lessonDays.map((date, i) =>
      new Date(year, month - 1, date).getMonth() + 1 === month &&
      visitedWithinWeekDays.includes(
        new Date(year, month - 1, date).getDate()
      ) ? (
        <AttendancePlus key={i} />
      ) : new Date(year, month - 1, date).getMonth() + 1 === month &&
        date < new Date().getDate() &&
        !visitedWithinWeekDays.includes(
          new Date(year, month - 1, date).getDate()
        ) ? (
        <AttendanceMinus key={i} />
      ) : (
        <AttendanceEmpty key={i} />
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
          <AttendanceBtn
            disabled={calculateMonthlyVisits(month - 1) === 0 ? true : false}
            onClick={decreaseWeek}
          >
            <AttendanceArrowLeft
              className={calculateMonthlyVisits(month - 1) !== 0 && 'available'}
            />
          </AttendanceBtn>
          <AttendancePeriod>{calculateWeekPeriod()}</AttendancePeriod>
          <AttendanceBtn
            disabled={calculateMonthlyVisits(month + 1) === 0 ? true : false}
            onClick={increaseWeek}
          >
            <AttendanceArrowRight
              className={calculateMonthlyVisits(month + 1) !== 0 && 'available'}
            />
          </AttendanceBtn>
        </MonthSwitchBox>
        <VisitedList>
          <VisitedItem>
            <AttendancePointsBox>
              <AttendanceFlex>
                <VisitedText>Відвідано:</VisitedText>
                <AttendancePoints>
                  <AttendancePointsContainer>
                    {calculatePoints()}
                  </AttendancePointsContainer>
                </AttendancePoints>
              </AttendanceFlex>
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
        </VisitedList>
        <MonthSwitchBox>
          <AttendanceBtn
            disabled={calculateMonthlyVisits(month - 1) === 0 ? true : false}
            onClick={decreaseMonth}
          >
            <AttendanceArrowLeft
              className={calculateMonthlyVisits(month - 1) !== 0 && 'available'}
            />
          </AttendanceBtn>
          <AttendancePeriod>
            {new Intl.DateTimeFormat('uk-UK', { month: 'long' }).format(
              new Date(`${month}`)
            )}
          </AttendancePeriod>
          <AttendanceBtn
            disabled={calculateMonthlyVisits(month + 1) === 0 ? true : false}
            onClick={increaseMonth}
          >
            <AttendanceArrowRight
              className={calculateMonthlyVisits(month + 1) !== 0 && 'available'}
            />
          </AttendanceBtn>
        </MonthSwitchBox>
        <VisitedList>
          <VisitedItem>
            <VisitedText>Відвідано:</VisitedText>
            <VisitedCounter>
              {calculateMonthlyVisits(month)}/
              <VisitedTotal>{getLessonDaysForMonths().length}</VisitedTotal>
            </VisitedCounter>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>Пропуски:</VisitedText>
            <VisitedCounter
              style={{ color: calculateWeeklyUnattended() > 0 && '#D61D1D' }}
            >
              {calculateMonthlyUnattended()}
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
