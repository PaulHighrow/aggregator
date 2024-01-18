import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OffsetLoaderWrapper = styled(LoaderWrapper)`
  top: 70%;
`;