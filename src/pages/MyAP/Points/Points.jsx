import { nanoid } from 'nanoid';
import points from './pointsFebruary.json';
import {
  CupIcon,
  LeaderPlace,
  PointsBox,
  PointsBoxHeading,
  PointsCategory,
  PointsCategoryPicker,
  PointsCategoryPointer,
  PointsLeader,
  PointsLeaderboard,
  PointsTableHead,
  PointsTableHeadItem,
  PointsTableHeadItemWide,
  PointsUser,
  PointsUserData,
  PointsUserDataWide,
  UserPlace,
} from './Points.styled';
import { useState } from 'react';
console.log(points.february);

export const Points = ({ user }) => {
  const [position, setPosition] = useState('0%');
  const [activeRating, setActiveRating] = useState(0);

  const februarySorted = points.february.sort((a, b) => b.points - a.points);
  console.log(user);
  console.log(februarySorted);

  const calculatePointerPosition = i => {
    setPosition(position => (position = `${i * 100}%`));
    setActiveRating(i);
  };

  return (
    <PointsBox>
      <PointsBoxHeading>
        <CupIcon />
        Рейтинг
      </PointsBoxHeading>
      <PointsCategoryPicker>
        <PointsCategoryPointer
          style={{ transform: `translateX(${position})` }}
        />
        <PointsCategory
          onClick={() => {
            calculatePointerPosition(0);
          }}
          className={activeRating === 0 && 'active'}
        >
          Загальний
        </PointsCategory>
        <PointsCategory
          onClick={() => {
            calculatePointerPosition(1);
          }}
          className={activeRating === 1 && 'active'}
        >
          Місячний
        </PointsCategory>
      </PointsCategoryPicker>
      <PointsTableHead>
        <PointsTableHeadItem>Місце</PointsTableHeadItem>
        <PointsTableHeadItemWide>Прізвище та ім’я</PointsTableHeadItemWide>
        <PointsTableHeadItem>Бали</PointsTableHeadItem>
      </PointsTableHead>
      <PointsUser>
        <PointsUserData>
          {februarySorted.findIndex(leader => leader.name === user.name)}
        </PointsUserData>
        <PointsUserDataWide>{user.name}</PointsUserDataWide>
        <PointsUserData>{user.points}</PointsUserData>
      </PointsUser>
      <PointsLeaderboard>
        {februarySorted.slice(0, 10).map((leader, i) => (
          <PointsLeader key={nanoid(8)}>
            {i <= 2 ? (
              <LeaderPlace>{i + 1}</LeaderPlace>
            ) : (
              <UserPlace>{i + 1}</UserPlace>
            )}
            <PointsUserDataWide>{leader.name}</PointsUserDataWide>
            <PointsUserData>{leader.points}</PointsUserData>
          </PointsLeader>
        ))}
      </PointsLeaderboard>
    </PointsBox>
  );
};
