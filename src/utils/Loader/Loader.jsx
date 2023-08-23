import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#FF4D00', '#FF8A00', '#F9C838', '#f5ce46', '#f08d2b']}
      />
    </LoaderWrapper>
  );
};
