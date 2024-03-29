import points from './pointsFebruary.json';
console.log(points.february);

export const Points = () => {
  return (
    <div>
        <ul>
      {points.february.map(user => {
        console.log(user);
        return (<li>{user.name}{' '}
        {user.points}</li>);
      })}
      </ul>
    </div>
  );
};
