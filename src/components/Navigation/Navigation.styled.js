import styled from 'styled-components';
import { Link } from "react-scroll";

export const StyledNavigation = styled.nav`
  position: absolute;
  width: 150px;
  top: 65px;
  right: 10px;
  border-radius: 10px;
  z-index: 5;
  background-color: var(--main-color);

  @media screen and (min-width: 768px) {
    position: static;
    display: block;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-top-right-radius: 0;
  overflow: hidden;
  border: 1.5px solid var(--secondary-color);

  @media screen and (min-width: 768px) {
    border: none;
    flex-direction: row;
    gap: 10px;
  }

  @media screen and (min-width: 1024px) {
    gap: 20px;
  }

  color: var(--secondary-color);
  justify-content: center;
`;

export const NavigationItem = styled.li`
  overflow: hidden;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      border-bottom: 1px solid var(--secondary-color);
    }
  }
`;

export const NavigationLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--secondary-color);
  transition: color var(--animation-global),
    background-color var(--animation-global),
    text-shadow var(--animation-global);
  padding: 10px 8px;

  &:hover,
  &:focus,
  &:active {
    color: white;

    @media screen and (max-width: 767px) {
      color: var(--main-color);
      text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.75);
      background-color: var(--secondary-color);
    }
  }
`;
