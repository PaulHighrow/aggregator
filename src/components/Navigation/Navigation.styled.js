import styled from 'styled-components';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CoursesArrowLeft } from '../../img/svg/coursesArrowLeft.svg';
import { ReactComponent as CoursesArrowRight } from '../../img/svg/coursesArrowRight.svg';

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

export const StyledNavigationNew = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 360px;
  top: 60px;
  right: 0%;
  font-size: 18px;
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
  &.active {
    @media screen and (min-width: 1280px) {
      cursor: pointer;
      color: var(--main-color);
      text-shadow: 0.5px 0px 0.5px rgba(0, 0, 0, 0.75);
    }
  }
`;

export const NavigationAnchor = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;

  transition: color var(--animation-global),
    background-color var(--animation-global),
    text-shadow var(--animation-global);
  padding: 10px 16px;

  @media screen and (min-width: 1280px) {
    padding: 0px;
    display: block;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--main-color);

    position: absolute;
    left: 0;
    bottom: 0;
    transform-origin: left;
    transform: scaleX(0);

    transition: transform var(--animation-global);
  }

  &:hover,
  &:focus,
  &.active {
    @media screen and (min-width: 1280px) {
      cursor: pointer;
    }
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;

export const NavigationLinkNew = styled(NavLink)`
  display: block;
  position: relative;
  text-decoration: none;

  transition: color var(--animation-global),
    background-color var(--animation-global),
    text-shadow var(--animation-global), font-weight var(--animation-global);
  padding: 10px 16px;

  @media screen and (min-width: 1280px) {
    padding: 5px 0;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--main-color);

    position: absolute;
    left: 0;
    bottom: 0;
    transform-origin: left;
    transform: scaleX(0);

    transition: transform var(--animation-global);
  }

  &:hover,
  &:focus {
    @media screen and (min-width: 1280px) {
      cursor: pointer;
      stroke-width: 0.5px;
    }
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }

  &.active {
    font-weight: 700;
  }

  &:visited {
    color: #000;
  }
`;

export const MenuCoursesWrapperNew = styled.div`
  position: relative;
  border-bottom: 0.5px solid var(--main-color);

  @media screen and (min-width: 1280px) {
    border-bottom: none;
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

export const MenuCoursesArrowLeft = styled(CoursesArrowLeft)`
  color: currentColor;

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;

export const MenuCoursesArrowRight = styled(CoursesArrowRight)`
  color: currentColor;

  &:hover,
  &:focus {
    color: var(--accent-color);
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
    stroke: var(--accent-color);
  }

  @media screen and (max-width: 1279px) {
    padding: 10px 16px;
  }
`;

export const NavigationMenuNew = styled.button`
  position: relative;

  height: 100%;

  border: none;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  gap: 8px;

  color: #000;
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
    stroke: var(--accent-color);
  }

  @media screen and (max-width: 1279px) {
    padding: 10px 16px;
  }
`;

export const NavigationMenuList = styled.ul`
  text-align: start;
  position: absolute;
  width: 120px;

  top: 0;
  left: -120px;

  display: flex;
  flex-direction: column;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  transition: opacity var(--animation-global), transform var(--animation-global);

  background-color: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 10px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  @media screen and (min-width: 500px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 0;
  }

  @media screen and (min-width: 1280px) {
    top: 102%;
    left: 0;

    width: max-content;

    clip-path: inset(2px -10px -10px -10px);
  }

  &.course-list-open {
    opacity: 1;
    transform: translateX(280px);

    @media screen and (min-width: 500px) {
      transform: translateX(0%);
    }

    @media screen and (min-width: 1280px) {
      transform: translateY(0%);
    }
  }

  &.course-list-closed {
    pointer-events: none;
    opacity: 0;
    transform: translateX(100%);

    @media screen and (min-width: 1280px) {
      transform: translateY(-100%);
    }
  }
`;

export const NavigationMenuItem = styled.li`
  padding: 10px 8px;

  &:not(:last-child) {
    border-bottom: 0.5px solid var(--main-color);
  }
`;

export const NavigationNavLink = styled(NavLink)`
  display: block;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--main-color);

  transition: color var(--animation-global);
  /* padding: 10px 16px; */

  @media screen and (min-width: 1280px) {
    padding: 0px;
    display: inline;
  }

  &:hover,
  &:focus,
  &.active {
    color: var(--accent-color);

    @media screen and (min-width: 1280px) {
      cursor: pointer;
    }
  }
`;
