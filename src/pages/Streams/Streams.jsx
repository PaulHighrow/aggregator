import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Stream } from 'components/Stream/Stream';
import { Outlet } from 'react-router-dom';

const Streams = () => {
  return (
    <>
      <StreamsBackgroundWrapper>
        <Outlet />
        <Stream />
      </StreamsBackgroundWrapper>
    </>
  );
};

export default Streams;
