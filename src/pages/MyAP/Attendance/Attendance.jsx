import {
  AttendanceBox,
  AttendanceHeading,
  CalendarIcon,
} from './Attendance.styled';

export const Attendance = ({ user }) => {
  return (
    <AttendanceBox>
      <AttendanceHeading>
        <CalendarIcon />
        Відвідуваність
      </AttendanceHeading>
      {user.visited}
    </AttendanceBox>
  );
};
