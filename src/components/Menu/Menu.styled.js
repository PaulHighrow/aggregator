import { IoMenu } from 'react-icons/io5';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../img/svg/LogoHeader.svg';

import raysIconDeformed from 'img/svg/rays-b-d.svg';
import raysBoldIcon from 'img/svg/rays-b.svg';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 10px;
  height: 80px;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: static;
    padding: 0 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const MobileMenuBtn = styled.button`
  border-color: var(--secondary-color);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover,
  &:focus {
    background-color: var(--secondary-color);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

  &::before {
    position: absolute;
    left: -20px;
    top: -20px;
    content: url(${raysIconDeformed});
    width: 20px;
    height: 20px;
    margin-right: 5px;
    opacity: 0;
    transition: opacity var(--animation-global);
  }

  &:active::before {
    opacity: 1;
  }
`;

export const MobileMenuIcon = styled(IoMenu)`
  color: var(--secondary-color);
  width: 36px;
  height: 36px;
  flex-shrink: 0;

  ${MobileMenuBtn}:hover &, ${MobileMenuBtn}:focus & {
    color: var(--main-color);
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
  height: 50px;
  display: block;
  flex-shrink: 0;
  height: 100%;
  transition: transform var(--animation-global), filter var(--animation-global);

  ${LogoLink}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 2px #ffd84ccf);
  }
`;

export const LeadBtn = styled.button`
  padding: 10px 10px;
  font-weight: 700;
  width: 200px;
  border: none;
  /* border: 2px solid #fff; */
  border-radius: 47px;
  background-color: var(--secondary-color);
  text-align: center;
  position: relative;
  outline: transparent;
  transition: box-shadow var(--animation-global),
    transform var(--animation-global);

  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 10px 2px #fff;
    transform: scale(0.95);
    /* background-color: #fff;
    border-color: var(--secondary-color);
    color: var(--main-color); */
  }

  /* &::before {
    position: absolute;
    left: -22px;
    top: -20px;
    content: url(${raysBoldIcon});
    opacity: 0;
    transition: opacity var(--animation-global);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  } */
`;
