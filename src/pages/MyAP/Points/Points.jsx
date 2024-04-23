import { nanoid } from 'nanoid';
import points from './pointsFebruary.json';
import { CupIcon, PointsBox, PointsBoxHeading } from './Points.styled';
console.log(points.february);

export const Points = () => {
  return (
    <PointsBox>
      <PointsBoxHeading>
        <CupIcon />Рейтинг
      </PointsBoxHeading>
      <ul>
        {points.february.map(user => {
          // console.log(user);
          return (
            <li key={nanoid(8)}>
              {user.name} {user.points}
            </li>
          );
        })}
      </ul>
    </PointsBox>
  );
};
