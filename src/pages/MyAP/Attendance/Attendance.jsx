import {
  AttendanceArrowLeft,
  AttendanceArrowRight,
  AttendanceBox,
  AttendanceBtnLeft,
  AttendanceBtnRight,
  AttendanceHeading,
  AttendanceMonth,
  CalendarIcon,
  MonthSwitchBox,
} from './Attendance.styled';

export const Attendance = ({ user }) => {
  return (
    <AttendanceBox>
      <AttendanceHeading>
        <CalendarIcon />
        Відвідуваність
      </AttendanceHeading>
      <MonthSwitchBox>
        <AttendanceBtnLeft>
          <AttendanceArrowLeft />
        </AttendanceBtnLeft>
        <AttendanceMonth>
          {new Intl.DateTimeFormat('uk-UK', { month: 'long' }).format()}
        </AttendanceMonth>
        <AttendanceBtnRight>
          <AttendanceArrowRight />
        </AttendanceBtnRight>
      </MonthSwitchBox>
      {console.log(Date.parse('18.04.2024'), "nan?")}
      {console.log('18.04.2024'.split('.')[1])}
      {console.log(
        user.visited.filter(
          date => new Date(date).getMonth() === date.split('.')[1]
        )
      )}
      {user.visited}
    </AttendanceBox>
  );
};
