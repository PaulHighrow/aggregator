import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Outlet, useLocation } from 'react-router-dom';

const Streams = () => {
  let location = useLocation();

  return (
    <>
      <StreamsBackgroundWrapper>
        {location.pathname === '/streams' ? 'make a nav for streams' : ''}
        <Outlet />
      </StreamsBackgroundWrapper>
    </>
  );
};

export default Streams;
