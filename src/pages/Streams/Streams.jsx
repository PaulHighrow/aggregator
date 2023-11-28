import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Stream } from 'components/Stream/Stream';

const Streams = () => {
  return (
    <>
      <StreamsBackgroundWrapper>
        <Stream />
      </StreamsBackgroundWrapper>
    </>
  );
};

export default Streams;
