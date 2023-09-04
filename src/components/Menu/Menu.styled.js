import styled, { keyframes } from 'styled-components';
import { ReactComponent as LogoIcon } from '../../img/svg/logo.svg';
import { ReactComponent as MenuDownArrow } from '../../img/svg/downArrow.svg';

import sketchOutline from 'img/svg/sketchOutline.svg';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 30px;
  height: 73px;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: static;
    padding: 0 42px;
    height: 89px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 55px;
    height: 105px;
  }
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
  border-color: var(--text-color);
  border: none;
  border-radius: 9px;
  padding: 10px 14px;
  background-color: var(--secondary-transparent-color);
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media screen and (min-width: 768px) {
    background-color: transparent;
  }

  &:hover,
  &:focus {
    background-color: var(--secondary-transparent-color);
  }
`;

export const MobileMenuIcon = styled(MenuDownArrow)`
  color: var(--secondary-color);
  flex-shrink: 0;
  stroke-width: 1;

  @media screen and (min-width: 768px) {
    stroke-width: 2;
  }
`;

export const PhoneNumber = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: var(--secondary-color);
  text-decoration: none;
  transition: color var(--animation-global);

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled(LogoIcon)`
  width: 49px;
  display: block;
  flex-shrink: 0;
  height: 100%;
  transition: transform var(--animation-global), filter var(--animation-global);

  ${LogoLink}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #ffffff);
  }

  @media screen and (min-width: 768px) {
    width: 64px;
  }

  @media screen and (min-width: 1280px) {
    width: 78px;
  }
`;

const wobblyOutline = keyframes`
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
  padding: 10px 10px;

  font-size: 22px;
  width: 258px;
  height: 60px;
  border: none;
  /* border: 2px solid #fff; */
  border-radius: 47px;
  background-color: var(--secondary-color);
  color: var(--main-color);
  text-align: center;
  position: relative;
  outline: transparent;
  transition: box-shadow var(--animation-global),
    transform var(--animation-global);

  @media screen and (min-width: 390px) {
    width: 287px;
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
    width: 260px;
    height: 64px;
    top: -7%;
    left: 0%;
    content: url(${sketchOutline});
    animation: 2s linear infinite ${wobblyOutline};

    transition: opacity var(--animation-global);

    @media screen and (min-width: 390px) {
      width: 289px;
    }
  }
`;

export const PlatformLink = styled.a`
  border-color: var(--text-color);
  border-radius: 9px;
  padding: 10px 14px;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover,
  &:focus {
    background-color: var(--secondary-transparent-color);
  }
`;

export const HeaderText = styled.span`
  font-size: 20px;
  line-height: 1.45;

  margin-right: 8px;
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }
`;
