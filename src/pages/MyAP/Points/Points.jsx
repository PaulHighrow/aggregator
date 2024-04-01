import { nanoid } from 'nanoid';
import points from './pointsFebruary.json';
console.log(points.february);

export const Points = () => {
  return (
    <div>
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
    </div>
  );
};
