import styled from 'styled-components';
import { ReactComponent as UpArrowIcon } from '../../img/svg/up-arrow.svg';
import { Link } from 'react-scroll';

export const StyledUpButton = styled(Link)`
  width: 60px;
  height: 60px;

  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 4;

  background-color: var(--main-color);
  border-radius: 50%;
  border: 1px solid var(--secondary-color);

  display: flex;
  justify-content: center;

  &:hover > svg {
    color: var(--accent-color);
    transform: scale(1.1) translateY(-5px);
  }
`;

export const UpArrow = styled(UpArrowIcon)`
  color: var(--secondary-color);
  width: 25px;
  transition: color var(--animation-global), transform var(--animation-global);
`;
