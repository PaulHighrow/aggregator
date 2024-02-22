import styled from 'styled-components';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

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
  z-index: 6;
  background-color: var(--secondary-color);
  transition: opacity var(--animation-global), transform var(--animation-global);

  @media screen and (min-width: 1280px) {
    position: relative;
    top: 0;
    right: 0;
    display: flex;
    max-width: fit-content;
    height: 100%;

    box-shadow: none;
  }
`;

export const MenuButtonsWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1280px) {
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
    justify-content: center;
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
    }
  }
`;

export const MenuCoursesWrapper = styled.div`
  position: relative;
  border-bottom: 0.5px solid var(--main-color);

  @media screen and (min-width: 1280px) {
    border-bottom: none;
    margin-right: 12px;
  }
`;

export const NavigationMenu = styled.button`
  position: relative;

  height: 100%;

  border: none;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  gap: 8px;

  color: var(--main-color);
  font-weight: 600;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  transition: color var(--animation-global), fill var(--animation-global);

  &:hover,
  &:focus {
    color: var(--accent-color);
    fill: var(--accent-color);
  }

  @media screen and (max-width: 1279px) {
    padding: 10px 16px;
  }
`;

export const NavigationMenuList = styled.ul`
  text-align: start;
  position: absolute;
  top: 102%;
  left: 0;

  width: max-content;

  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: var(--secondary-color);

  @media screen and (min-width: 1280px) {
    transition: opacity var(--animation-global),
      transform var(--animation-global);

    box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 10px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    clip-path: inset(2px -10px -10px -10px);
  }
`;

export const NavigationMenuItem = styled.li`
  padding: 10px 8px;

  &:not(:last-child) {
    border-bottom: 0.5px solid var(--main-transparent-color);
  }
`;

export const NavigationNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--main-color);

  transition: color var(--animation-global);
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
      color: var(--accent-color);
    }
  }
`;
