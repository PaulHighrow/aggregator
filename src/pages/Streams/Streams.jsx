import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { StreamNav } from 'components/Stream/StreamNav/StreamNav';
import { Outlet, useLocation } from 'react-router-dom';

const Streams = () => {
  let location = useLocation();

  return (
    <>
      <StreamsBackgroundWrapper>
        {location.pathname === '/streams' ? <StreamNav /> : ''}
        <Outlet />
      </StreamsBackgroundWrapper>
    </>
  );
};

export default Streams;
