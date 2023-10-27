import { Title } from 'components/Hero/Hero.styled';
import styled from 'styled-components';

export const SuspenseBox = styled.div`
  position: relative;
  height: 50vh;
  padding-top: 120px;
`;

export const SuspenseTitle = styled(Title)`
 position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;