import styled, { keyframes } from 'styled-components';
import { ReactComponent as MenuDownArrow } from '../../img/svg/invertedDownArrow.svg';
import { ReactComponent as LogoIcon } from '../../img/svg/invertedLogo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import sketchOutline from 'img/svg/sketchOutline.svg';
import sketchOutlineNarrow from 'img/svg/sketchOutlineNarrow.svg';
import sketchOutlineSmallNarrow from 'img/svg/sketchOutlineSmallNarrow.svg';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 16px;
  height: 60px;
  background-color: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0.5px 5px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px;
  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 10px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform var(--animation-global);

  @media screen and (min-width: 400px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 42px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 55px;
  }

  &.hidden {
    transform: translateY(-90px);
  }

  &.shown {
    transform: translateY(0px);
  }
`;

export const NavContainer = styled.div`
  position: sticky;
  z-index: 9;
  top: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: auto;
    gap: 24px;
  }
`;

export const MobileMenuBtn = styled.button`
  border: none;
  border-radius: 9px;
  padding: 8px;
  background-color: var(--main-transparent-color);
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media screen and (min-width: 768px) {
    background-color: transparent;
    padding: 8px 12px;
  }

  &:hover,
  &:focus {
    background-color: var(--main-transparent-color);
  }
`;

export const MobileMenuIcon = styled(MenuDownArrow)`
  color: var(--main-color);
  flex-shrink: 0;
  stroke-width: 1;

  @media screen and (min-width: 768px) {
    stroke-width: 2;
  }
`;

export const BurgerMenuIcon = styled(RxHamburgerMenu)`
  color: var(--main-color);
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

export const LogoRoute = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled(LogoIcon)`
  z-index: 10;
  width: 43px;
  display: block;
  flex-shrink: 0;
  height: 100%;
  transition: transform var(--animation-global), filter var(--animation-global);

  ${LogoRoute}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 0.5px #00000054);
  }
`;

export const wobblyOutline = keyframes`
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-2deg);
  }
  20% {
    transform: rotateZ(2deg);
  }
  25% {
    transform: rotateZ(-4deg);
  }
  30% {
    transform: rotateZ(4deg);
  }
  35% {
    transform: rotateZ(1deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`;

export const LeadBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;

  padding: 10px 10px;
  font-size: 20px;
  font-weight: 600;
  width: 180px;
  height: 50px;
  border: none;
  flex-shrink: 0;
  /* border: 2px solid #fff; */
  border-radius: 47px;
  background-color: var(--secondary-color);
  color: var(--main-color);
  text-align: center;
  position: relative;
  outline: transparent;
  transition: box-shadow var(--animation-global),
    transform var(--animation-global);

  @media screen and (min-width: 400px) {
    width: 250px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    width: 287px;
    height: 60px;
  }

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 10px 2px #fff;
    transform: scale(0.95);
    /* background-color: #fff;
    border-color: var(--secondary-color);
    color: var(--main-color); */
  }

  &::before {
    position: absolute;
    width: 180px;
    top: -2px;
    left: -2px;
    content: url(${sketchOutlineSmallNarrow});
    animation: 2s linear infinite ${wobblyOutline};

    transition: opacity var(--animation-global);

    @media screen and (min-width: 400px) {
      width: 250px;
      content: url(${sketchOutlineNarrow});
    }

    @media screen and (min-width: 768px) {
      content: url(${sketchOutline});
      width: 289px;
    }
  }
`;

export const PlatformLink = styled.a`
  border-color: var(--secondary-color);
  border-radius: 9px;
  padding: 10px 14px;
  background-color: transparent;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover,
  &:focus {
    background-color: var(--main-transparent-color);
  }
`;

export const HeaderText = styled.span`
  font-size: 20px;
  line-height: 1.45;

  margin-right: 8px;
  color: var(--main-color);

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }
`;
