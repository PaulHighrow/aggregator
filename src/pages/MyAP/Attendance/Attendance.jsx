import { useEffect, useState } from 'react';
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
  const [lessonDaysForWeek, SetLessonDaysForWeek] = useState([]);
  const [lessonDaysForMonth, SetLessonDaysForMonth] = useState([]);
  const [lessonDaysForYear, SetLessonDaysForYear] = useState([]);

  useEffect(() => {
    const getLessonDaysForWeeks = () => {
      let date = new Date(year, month - 1, week + 1);

      const sunday = date.getDate() - date.getDay();

      const lessonDays = [];

      date.getDate() !== sunday
        ? date.setDate(sunday)
        : date.setDate(sunday + 1);

      let i = 0;

      while (date.getDay() <= 6 && i < 7) {
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
      SetLessonDaysForWeek(days => (days = lessonDays));
    };
    getLessonDaysForWeeks();

    const getLessonDaysForMonths = () => {
      let date = new Date(year, month - 1, 1);

      const lessonDays = [];

      date.setDate(1);
      while (date.getMonth() + 1 === month) {
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
      SetLessonDaysForMonth(days => (days = lessonDays));
    };
    getLessonDaysForMonths();

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
      SetLessonDaysForYear(days => (days = lessonDays.length));
    };
    getLessonDaysForYears();
  }, [week, month, year]);

  const changeDateFormat = dateString => {
    if (dateString) {
      const dateArray = dateString.split('.');
      return Date.parse([dateArray[1], dateArray[0], dateArray[2]].join('.'));
    }
    return;
  };

  const decreaseWeek = () => {
    const newWeek = week - 7;
    setWeek(newWeek);
  };

  const increaseWeek = () => {
    const newWeek = week + 7;
    setWeek(newWeek);
  };

  const decreaseMonth = () => {
    if (month > 1) {
      setMonth(month - 1);
      const firstDayOfPreviousMonth = new Date(year, month - 2, 1);
      const visitedThisMonth = user.visited.filter(
        day => new Date(changeDateFormat(day)).getMonth() === month - 2
      );
      const firstVisitedDayOfPreviousMonth = new Date(
        year,
        month - 2,
        +visitedThisMonth[0].split('.')[0]
      );

      firstVisitedDayOfPreviousMonth > 7
        ? setWeek(
            firstVisitedDayOfPreviousMonth.getDate() -
              firstVisitedDayOfPreviousMonth.getDay()
          )
        : setWeek(
            firstDayOfPreviousMonth.getDate() - firstDayOfPreviousMonth.getDay()
          );
      return;
    }
    setMonth(12);
    setYear(year - 1);
    const firstDayOfPreviousMonth = new Date(year, month - 2, 1);
    const visitedThisMonth = user.visited.filter(
      day => new Date(changeDateFormat(day)).getMonth() === month - 2
    );
    const firstVisitedDayOfPreviousMonth = new Date(
      year,
      month - 2,
      +visitedThisMonth[0].split('.')[0]
    );

    firstVisitedDayOfPreviousMonth > 7
      ? setWeek(
          firstVisitedDayOfPreviousMonth.getDate() -
            firstVisitedDayOfPreviousMonth.getDay()
        )
      : setWeek(
          firstDayOfPreviousMonth.getDate() - firstDayOfPreviousMonth.getDay()
        );
    return;
  };

  const increaseMonth = () => {
    if (month < 11) {
      setMonth(month + 1);
      const firstDayOfNextMonth = new Date(year, month, 1);
      // const visitedThisMonth = user.visited.filter(
      //   day => new Date(changeDateFormat(day)).getMonth() === month - 2
      // );
      // const firstVisitedDayOfPreviousMonth = new Date(
      //   year,
      //   month - 2,
      //   +visitedThisMonth[0].split('.')[0]
      // );

      // firstVisitedDayOfPreviousMonth > 7
      //   ? setWeek(
      //       firstVisitedDayOfPreviousMonth.getDate() -
      //         firstVisitedDayOfPreviousMonth.getDay()
      //     )
      //   : setWeek(
      //       firstDayOfPreviousMonth.getDate() - firstDayOfPreviousMonth.getDay()
      //     );
      setWeek(firstDayOfNextMonth.getDate() - firstDayOfNextMonth.getDay());
      return;
    }
    setMonth(1);
    setYear(year + 1);
    const firstDayOfNextMonth = new Date(year, month, 1);

    setWeek(firstDayOfNextMonth.getDate() - firstDayOfNextMonth.getDay());
    return;
  };

  const editDateFormat = date => (`${date}`.length > 1 ? date : '0' + date);

  const calculateWeekPeriod = () => {
    const firstDayOfWeekDate = new Date(year, month - 1, week + 1);

    const date = new Date(firstDayOfWeekDate);

    const lastDayOfWeekDate = new Date(date.setDate(date.getDate() + 6));

    return `${editDateFormat(firstDayOfWeekDate.getDate())}.${editDateFormat(
      firstDayOfWeekDate.getMonth() + 1
    )} - ${editDateFormat(lastDayOfWeekDate.getDate())}.${editDateFormat(
      lastDayOfWeekDate.getMonth() + 1
    )}.${lastDayOfWeekDate.getFullYear()}`;
  };

  const calculateWeeklyVisits = () => {
    const lessonDays = lessonDaysForWeek.map(lessonDay => lessonDay.getDate());
    return user.visited.filter(
      date =>
        new Date(changeDateFormat(date)).getMonth() + 1 ===
          new Date().getMonth() + 1 &&
        lessonDays.includes(new Date(changeDateFormat(date)).getDate())
    ).length;
  };

  const getLessonDaysOfPassedWeek = passedDay => {
    let date = new Date(passedDay);

    const sunday = date.getDate() - date.getDay();

    const lessonDays = [];

    date.getDate() !== sunday ? date.setDate(sunday) : date.setDate(sunday + 1);
    let i = 0;
    while (date.getDay() <= 6 && i < 7) {
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

  const calculateSetWeeklyVisits = passedWeek => {
    const firstDayOfWeekDate = new Date(year, month - 1, passedWeek + 1);

    const passedWeekLessonDays = getLessonDaysOfPassedWeek(
      firstDayOfWeekDate
    ).map(day => new Date(day).toLocaleDateString('uk-UA'));
    return user.visited.filter(
      date =>
        new Date(changeDateFormat(date)).getMonth() + 1 === month &&
        passedWeekLessonDays.includes(date)
    ).length;
  };

  const calculateWeeklyUnattended = () => {
    const lessonDays = lessonDaysForWeek;

    const currentDay = lessonDays.findIndex(
      lessonDay => lessonDay.getDate() === new Date().getDate()
    );

    const futureDays = lessonDays.slice(0, currentDay + 1).length;

    return currentDay < 0
      ? lessonDaysForWeek.length - calculateWeeklyVisits()
      : futureDays === 0
      ? 0
      : futureDays - calculateWeeklyVisits() < 0
      ? 0
      : futureDays - calculateWeeklyVisits();
  };

  const calculateMonthlyUnattended = () => {
    const lessonDays = lessonDaysForWeek;
    const currentDay = lessonDays.findIndex(
      lessonDay => lessonDay.getDate() === new Date().getDate()
    );
    const futureDays = lessonDays.slice(0, currentDay + 1).length;
    return futureDays === 0
      ? 0
      : futureDays - calculateMonthlyVisits(month) < 0
      ? 0
      : futureDays - calculateMonthlyVisits(month);
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

  const calculatePoints = () => {
    const lessonDays = lessonDaysForWeek.map(lessonDay => lessonDay.getDate());

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
            disabled={calculateSetWeeklyVisits(week - 7) === 0 ? true : false}
            onClick={decreaseWeek}
          >
            <AttendanceArrowLeft
              className={
                calculateSetWeeklyVisits(week - 7) !== 0 && 'available'
              }
            />
          </AttendanceBtn>
          <AttendancePeriod>{calculateWeekPeriod()}</AttendancePeriod>
          <AttendanceBtn
            disabled={calculateSetWeeklyVisits(week + 7) === 0 ? true : false}
            onClick={increaseWeek}
          >
            <AttendanceArrowRight
              className={
                calculateSetWeeklyVisits(week + 7) !== 0 && 'available'
              }
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
                <VisitedTotal>{lessonDaysForWeek.length}</VisitedTotal>
              </VisitedCounter>
            </AttendancePointsBox>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>Пропуски:</VisitedText>
            <VisitedCounter
              style={{
                color:
                  lessonDaysForWeek.length - calculateWeeklyVisits() > 0 &&
                  '#D61D1D',
              }}
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
              <VisitedTotal>{lessonDaysForMonth.length}</VisitedTotal>
            </VisitedCounter>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>Пропуски:</VisitedText>
            <VisitedCounter
              style={{ color: calculateMonthlyUnattended() > 0 && '#D61D1D' }}
            >
              {calculateMonthlyUnattended()}
            </VisitedCounter>
          </VisitedItem>
        </VisitedList>
        <VisitedYearBox>
          <VisitedText>Загалом відвідано уроків за рік:</VisitedText>
          <VisitedCounter>
            {calculateYearlyVisits()}/
            <VisitedTotal>{lessonDaysForYear}</VisitedTotal>
          </VisitedCounter>
        </VisitedYearBox>
      </AttendanceVisitedBox>
    </AttendanceBox>
  );
};
