import { LogoLink } from 'components/Menu/Menu.styled';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../img/svg/LogoFooter.svg';

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';

export const Footer = styled.footer`
  background-color: var(--secondary-color);

  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const FooterLogo = styled(LogoIcon)`
  height: 50px;
  display: block;
  flex-shrink: 0;
  height: 100%;
  transition: transform var(--animation-global), filter var(--animation-global);

  ${LogoLink}:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #00000054);
  }
`;

export const FooterTitle = styled.h3`
  text-align: center;
  color: var(--secondary-color);
  -webkit-text-stroke: 2px var(--main-color);
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 20px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

export const FacebookBtn = styled(AiOutlineFacebook)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  transition: fill var(--animation-global), transform var(--animation-global),
    filter var(--animation-global);

  ${LogoLink}:hover & {
    fill: #fff;
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #00000054);
  }
`;
export const YouTubeBtn = styled(AiOutlineYoutube)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  transition: fill var(--animation-global), transform var(--animation-global),
    filter var(--animation-global);

  ${LogoLink}:hover & {
    fill: #fff;
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #00000054);
  }
`;
export const InstagramBtn = styled(AiOutlineInstagram)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  transition: fill var(--animation-global), transform var(--animation-global),
    filter var(--animation-global);

  ${LogoLink}:hover & {
    fill: #fff;
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #00000054);
  }
`;
export const TikTokBtn = styled(BiLogoTiktok)`
  fill: var(--main-color);
  width: 40px;
  height: 40px;
  transition: fill var(--animation-global), transform var(--animation-global),
    filter var(--animation-global);

  ${LogoLink}:hover & {
    fill: #fff;
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 5px #00000054);
  }
`;

export const Contacts = styled.div`
  text-align: center;
`;

export const ContactsList = styled.ul`
  display: grid;
  gap: 10px;
`;

export const ContactLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  transition: color var(--animation-global);
  text-decoration: none;
  color: var(--main-color);

  &:hover,
  &:focus {
    color: #fff;
  }
`;
