import { Title } from 'components/Hero/Hero.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'utils/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Suspense
        fallback={
          <>
            <Loader />
            <Title as={'h2'}>Loading...</Title>
          </>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
