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
} from './Attendance.styled';

export const Attendance = ({ user }) => {
  const [month, setMonth] = useState(
    +new Intl.DateTimeFormat('uk-UK', { month: 'numeric' }).format()
  );

  const changeDateFormat = dateString => {
    if (dateString) {
      const dateArray = dateString.split('.');
      return Date.parse([dateArray[1], dateArray[0], dateArray[2]].join('.'));
    }
    return;
  };

  const decreaseMonth = () => {
    month > 1 ? setMonth(month - 1) : setMonth(12);
  };

  const increaseMonth = () => {
    month < 12 ? setMonth(month + 1) : setMonth(1);
  };

  return (
    <AttendanceBox>
      <AttendanceHeading>
        <CalendarIcon />
        Відвідуваність
      </AttendanceHeading>
      <AttendanceVisitedBox>
        <MonthSwitchBox>
          <AttendanceBtnLeft onClick={decreaseMonth}>
            <AttendanceArrowLeft />
          </AttendanceBtnLeft>
          <AttendanceMonth>
            {new Intl.DateTimeFormat('uk-UK', { month: 'long' }).format(
              new Date(`${month}`)
            )}
          </AttendanceMonth>
          <AttendanceBtnRight onClick={increaseMonth}>
            <AttendanceArrowRight />
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
              }
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
            </VisitedCounter>
          </VisitedItem>
          <VisitedItem>
            <VisitedText>За місяць:</VisitedText>
            <VisitedCounter>
              {
                user.visited.filter(
                  date =>
                    new Date(changeDateFormat(date)).getMonth() + 1 === month
                ).length
              }
              /16
            </VisitedCounter>
          </VisitedItem>
        </VisitedList>
      </AttendanceVisitedBox>
    </AttendanceBox>
  );
};
