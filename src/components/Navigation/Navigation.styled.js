import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledNavigation = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 360px;
  top: 60px;
  right: 0%;
  font-size: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  z-index: 5;
  background-color: var(--secondary-color);
  transition: opacity var(--animation-global), transform var(--animation-global);

  @media screen and (min-width: 768px) {
    position: static;
    display: flex;
    max-width: fit-content;

    box-shadow: none;
  }
`;

export const MenuButtonsWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  color: var(--secondary-color);
  justify-content: center;

  @media screen and (min-width: 768px) {
    border: none;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export const NavigationItem = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    border-bottom: 0.5px solid var(--main-color);
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const NavigationLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--main-color);

  transition: color var(--animation-global),
    background-color var(--animation-global),
    text-shadow var(--animation-global);
  padding: 10px 16px;

  @media screen and (min-width: 1280px) {
    padding: 0px;
    display: inline;
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--accent-color);

    @media screen and (min-width: 1280px) {
      cursor: pointer;
      color: var(--main-color);
      text-shadow: 0.5px 0px 0.5px rgba(0, 0, 0, 0.75);
      background-color: var(--main-transparent-color);
    }
  }
`;
